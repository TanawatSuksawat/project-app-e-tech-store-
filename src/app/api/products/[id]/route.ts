// placeholder
// src/app/api/products/[id]/route.ts
import { NextResponse } from "next/server";


const SAMPLE = [
    { id: "1", name: "Pro Headphones X1", slug: "pro-headphones-x1", price: 89900, images: ["/hero-headphones.png"], description: "เสียงใส เบสแน่น", rating: 4.7 },
    { id: "2", name: "Quantum Drone Q8", slug: "quantum-drone-q8", price: 189900, images: ["/hero-drone.png"], description: "บินนิ่ง ภาพคมชัด", rating: 4.6 },
];


export async function GET(_: any, ctx: { params: { id: string } }) {
    const { id } = ctx.params;
    const idOrSlug = id;
    const p = SAMPLE.find(x => x.id === idOrSlug || x.slug === idOrSlug);
    return NextResponse.json(p ?? SAMPLE[0]);
}