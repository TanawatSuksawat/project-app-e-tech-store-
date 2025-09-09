// src/app/page.tsx
import Link from "next/link";
import AppHeader from "@/components/layout/AppHeader";
import AppFooter from "@/components/layout/AppFooter";

export const metadata = {
  title: "E-Tech Store — Electronics that Wow",
  description: "ช้อปสินค้าอิเล็กทรอนิกส์ระดับโปร ดีไซน์ล้ำ ภาพสวย เสียงชัด",
};

export default function LandingPage() {
  return (
    <>
      <AppHeader />

      {/* HERO */}
      <main>
        <section className="relative overflow-hidden">
          {/* แสงสวย ๆ */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-24 -left-24 w-[50rem] h-[50rem] rounded-full bg-gradient-to-br from-indigo-600/30 via-cyan-500/20 to-emerald-400/10 blur-3xl" />
          </div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 md:pt-20 pb-16 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                E-Tech Store
                <span className="block gradient-text">อนาคตของ Electronics</span>
              </h1>
              <p className="mt-4 text-white/70 max-w-xl">
                รวมของเล่นไฮเทคระดับโปร ดีไซน์ล้ำ เบาจริง เสียงชัด ภาพคม ใช้งานได้จริง ไม่ใช่แค่โชว์
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/homepage" className="btn-primary">เริ่มช้อปเลย</Link>
                <Link href="/search" className="btn-ghost">ค้นหา/กรองสินค้า</Link>
                <Link href="/cart" className="btn-ghost">ตะกร้าสินค้า</Link>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl glass card-3d grid place-items-center">
                {/* ใส่รูปใน public/ เช่น hero-gadget.png */}
                <img src="/hero-gadget.png" alt="Gadget Hero" className="w-3/4 floaty" />
              </div>
              <div className="absolute -bottom-4 -right-4 text-xs text-white/60">
                * ใส่ไฟล์ภาพใน /public ก่อน: hero-gadget.png
              </div>
            </div>
          </div>
        </section>

        {/* QUICK NAV */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
          <h2 className="text-2xl font-semibold">ไปยังส่วนสำคัญอย่างรวดเร็ว</h2>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/homepage" className="glass rounded-2xl p-6 card-3d hover:bg-white/10">
              <p className="text-lg font-semibold">หน้าโฮม / แนะนำสินค้า</p>
              <p className="mt-1 text-white/70">แบนเนอร์และสินค้ายอดนิยม</p>
            </Link>
            <Link href="/search" className="glass rounded-2xl p-6 card-3d hover:bg-white/10">
              <p className="text-lg font-semibold">ค้นหา & กรอง</p>
              <p className="mt-1 text-white/70">ค้นหาตามชื่อ หมวดหมู่ ราคา</p>
            </Link>
            <Link href="/product/pro-headphones-x1" className="glass rounded-2xl p-6 card-3d hover:bg-white/10">
              <p className="text-lg font-semibold">ตัวอย่างหน้าสินค้า</p>
              <p className="mt-1 text-white/70">แสดงรูป รายละเอียด ราคา</p>
            </Link>
            <Link href="/cart" className="glass rounded-2xl p-6 card-3d hover:bg-white/10">
              <p className="text-lg font-semibold">ตะกร้าสินค้า</p>
              <p className="mt-1 text-white/70">ดู รายการ สรุปราคา ดำเนินการชำระเงิน</p>
            </Link>
            <Link href="/checkout" className="glass rounded-2xl p-6 card-3d hover:bg-white/10">
              <p className="text-lg font-semibold">ชำระเงิน</p>
              <p className="mt-1 text-white/70">กรอกที่อยู่และโทเค็นชำระ (mock)</p>
            </Link>
            <Link href="/orders" className="glass rounded-2xl p-6 card-3d hover:bg-white/10">
              <p className="text-lg font-semibold">คำสั่งซื้อของฉัน</p>
              <p className="mt-1 text-white/70">เช็คสถานะคำสั่งซื้อที่ผ่านมา</p>
            </Link>
            <Link href="/login" className="glass rounded-2xl p-6 card-3d hover:bg-white/10">
              <p className="text-lg font-semibold">เข้าสู่ระบบ / สมัครสมาชิก</p>
              <p className="mt-1 text-white/70">จัดการบัญชีและสั่งซื้อ</p>
            </Link>
            <Link href="/products" className="glass rounded-2xl p-6 card-3d hover:bg-white/10">
              <p className="text-lg font-semibold">จัดการสินค้า (Admin)</p>
              <p className="mt-1 text-white/70">สร้าง/แก้ไข/ลบ — ต้องล็อกอินเป็น Admin</p>
            </Link>
          </div>
        </section>

        {/* CATEGORIES */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24">
          <h2 className="text-2xl font-semibold">หมวดหมู่ยอดนิยม</h2>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Audio", img: "/hero-headphones.png", q: "audio" },
              { label: "Drone", img: "/hero-drone.png", q: "drone" },
              { label: "Laptop", img: "/placeholder.png", q: "laptop" },
              { label: "Mobile", img: "/placeholder.png", q: "mobile" },
            ].map(({ label, img, q }) => (
              <Link key={q} href={`/search?category=${q}`} className="glass rounded-2xl p-5 card-3d hover:bg-white/10">
                <img src={img} alt={label} className="w-full h-32 object-contain floaty" />
                <p className="mt-3 font-semibold">{label}</p>
                <p className="text-white/70 text-sm">ดูสินค้าทั้งหมดในหมวด {label}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <AppFooter />
    </>
  );
}
