// placeholder
// src/app/(shop)/homepage/ui.tsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";


const featured = [
    { name: "Pro Headphones X1", price: 89900, img: "/hero-headphones.png", href: "/product/pro-headphones-x1" },
    { name: "Quantum Drone Q8", price: 189900, img: "/hero-drone.png", href: "/product/quantum-drone-q8" },
];


export default function HomepageUI() {
    return (
        <main>
            {/* HERO */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(58,105,255,0.25),transparent_70%)]" />
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                            อนาคตของ <span className="gradient-text">Electronics</span> อยู่ที่นี่แล้ว
                        </h1>
                        <p className="mt-4 text-white/70 max-w-xl">อุปกรณ์ระดับโปร ดีไซน์ล้ำ เบาจริง เสียงชัด ภาพคม พร้อมกระเป๋าสตางค์สั่น</p>
                        <div className="mt-8 flex gap-3">
                            <Link href="/search" className="btn-primary">เริ่มช้อปเลย</Link>
                            <Link href="#featured" className="btn-ghost">ดูสินค้ายอดฮิต</Link>
                        </div>
                    </div>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .2 }} className="relative">
                        <div className="aspect-[4/3] rounded-3xl glass card-3d grid place-items-center">
                            <img src="/hero-gadget.png" alt="hero" className="w-3/4 floaty" />
                        </div>
                    </motion.div>
                </div>
            </section>


            {/* FEATURED */}
            <section id="featured" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
                <h2 className="text-2xl font-semibold">สินค้าเด่น</h2>
                <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featured.map((p) => (
                        <a key={p.name} href={p.href} className="glass rounded-2xl p-6 card-3d hover:bg-white/10">
                            <img src={p.img} alt={p.name} className="w-full h-40 object-contain floaty" />
                            <div className="mt-4">
                                <p className="font-semibold">{p.name}</p>
                                <p className="text-white/70">฿{(p.price / 100).toLocaleString()}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </section>
        </main>
    );
}