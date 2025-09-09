// src/app/api/products/route.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

// ───────────────────────────────────────────────────────────────────────────────
// Query params ที่รองรับ
// q: string           -> ค้นหาจาก name/description/category (case-insensitive)
// category: string    -> filter ตามหมวด (ถ้า "all" หรือไม่ส่ง = ไม่กรอง)
// min, max: number    -> ราคา (หน่วย "สตางค์/เซ็นต์") ช่วงขั้นต่ำ-สูงสุด
// page: number        -> หน้าเริ่มที่ 1 (default 1)
// pageSize: number    -> จำนวนต่อหน้า 1–100 (default 12)
// sort: new|price_asc|price_desc|popular (default "new")
// ───────────────────────────────────────────────────────────────────────────────

type Sort = "new" | "price_asc" | "price_desc" | "popular";

function parseIntSafe(v: string | null, def: number) {
  const n = Number(v);
  return Number.isFinite(n) ? n : def;
}

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function getOrderBy(sort: Sort) {
  switch (sort) {
    case "price_asc":
      return { price: "asc" as const };
    case "price_desc":
      return { price: "desc" as const };
    case "popular":
      return { rating: "desc" as const };
    case "new":
    default:
      return { createdAt: "desc" as const };
  }
}

// ตัวอย่างข้อมูลสำหรับ fallback (ถ้ายังไม่ได้ migrate Prisma)
const SAMPLE = [
  {
    id: "1",
    slug: "pro-headphones-x1",
    name: "Pro Headphones X1",
    description: "หูฟังระดับโปร เสียงใส เบสแน่น",
    price: 89900,
    images: ["/hero-headphones.png"],
    category: "audio",
    rating: 4.7,
    stock: 10,
    createdAt: new Date("2025-01-01"),
  },
  {
    id: "2",
    slug: "quantum-drone-q8",
    name: "Quantum Drone Q8",
    description: "โดรนบินนิ่ง ภาพคมชัด 4K",
    price: 189900,
    images: ["/hero-drone.png"],
    category: "drone",
    rating: 4.6,
    stock: 7,
    createdAt: new Date("2025-02-01"),
  },
  {
    id: "3",
    slug: "ultra-laptop-z",
    name: "Ultra Laptop Z",
    description: "แล็ปท็อปพกพา เบาแรง ประสิทธิภาพสูง",
    price: 349990,
    images: ["/placeholder.png"],
    category: "laptop",
    rating: 4.8,
    stock: 5,
    createdAt: new Date("2025-03-01"),
  },
];

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const q = (searchParams.get("q") || "").trim();
  const category = (searchParams.get("category") || "all").trim().toLowerCase();

  const min = parseIntSafe(searchParams.get("min"), Number.NaN);
  const max = parseIntSafe(searchParams.get("max"), Number.NaN);

  const page = clamp(parseIntSafe(searchParams.get("page"), 1), 1, 10_000);
  const pageSize = clamp(parseIntSafe(searchParams.get("pageSize"), 12), 1, 100);
  const sort = (searchParams.get("sort") as Sort) || "new";

  // Prisma where clause
  const where: any = {};
  if (q) {
    where.OR = [
      { name: { contains: q, mode: "insensitive" } },
      { description: { contains: q, mode: "insensitive" } },
      { category: { contains: q, mode: "insensitive" } },
    ];
  }
  if (category && category !== "all") where.category = category;

  if (!Number.isNaN(min) || !Number.isNaN(max)) {
    where.price = {};
    if (!Number.isNaN(min)) where.price.gte = min;
    if (!Number.isNaN(max)) where.price.lte = max;
  }

  const orderBy = getOrderBy(sort);
  const skip = (page - 1) * pageSize;

  try {
    // ถ้าฐานข้อมูลพร้อม → ใช้ Prisma
    const [total, items] = await Promise.all([
      prisma.product.count({ where }),
      prisma.product.findMany({
        where,
        orderBy,
        skip,
        take: pageSize,
        select: {
          id: true,
          slug: true,
          name: true,
          description: true,
          price: true,
          images: true,
          category: true,
          stock: true,
          createdAt: true,
        },
      }),
    ]);

    return NextResponse.json(
      { items, page, pageSize, total, hasMore: skip + items.length < total },
      { status: 200 },
    );
  } catch (err) {
    // Fallback: ยังไม่ migrate / table ไม่มี → ใช้ SAMPLE ให้พอทดสอบหน้า UI ได้
    console.warn("[/api/products] Prisma unavailable, using SAMPLE fallback:", err);

    let data = SAMPLE.slice();

    if (q) {
      const L = q.toLowerCase();
      data = data.filter(
        (p) =>
          p.name.toLowerCase().includes(L) ||
          p.description.toLowerCase().includes(L) ||
          p.category.toLowerCase().includes(L),
      );
    }
    if (category && category !== "all") {
      data = data.filter((p) => p.category.toLowerCase() === category);
    }
    if (!Number.isNaN(min)) data = data.filter((p) => p.price >= min);
    if (!Number.isNaN(max)) data = data.filter((p) => p.price <= max);

    switch (sort) {
      case "price_asc":
        data.sort((a, b) => a.price - b.price);
        break;
      case "price_desc":
        data.sort((a, b) => b.price - a.price);
        break;
      case "popular":
        data.sort((a, b) => b.rating - a.rating);
        break;
      case "new":
      default:
        data.sort((a, b) => +b.createdAt - +a.createdAt);
        break;
    }

    const total = data.length;
    const sliced = data.slice(skip, skip + pageSize);

    return NextResponse.json(
      { items: sliced, page, pageSize, total, hasMore: skip + sliced.length < total, fallback: true },
      { status: 200 },
    );
  }
}
