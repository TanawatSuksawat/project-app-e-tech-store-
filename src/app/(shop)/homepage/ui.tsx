// placeholder
// src/app/(shop)/homepage/ui.tsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";


const featured = [
    { name: "Pro Headphones X1", price: 89900, img: "/off10%.png", href: "/product/pro-headphones-x1" },
    { name: "Quantum Drone Q8", price: 189900, img: "/hero-drone.png", href: "/product/quantum-drone-q8" },
];


export default function HomepageUI() {
    return (
        <main className="relative min-h-screen bg-gradient-to-br from-black via-indigo-950 to-neutral-900 overflow-x-hidden">
            {/* HERO */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none z-0">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(58,105,255,0.25),transparent_70%)]" />
                    <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-br from-indigo-500/30 via-cyan-400/20 to-emerald-400/10 rounded-full blur-3xl opacity-60 animate-pulse" />
                </div>
                <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
                    <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="space-y-6">
                        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400 drop-shadow-xl animate-gradient-x">
                            อนาคตของ Electronics อยู่ที่นี่แล้ว
                        </h1>
                        <p className="mt-4 text-white/80 max-w-xl text-lg md:text-2xl drop-shadow-lg">อุปกรณ์ระดับโปร ดีไซน์ล้ำ เบาจริง เสียงชัด ภาพคม พร้อมกระเป๋าสตางค์สั่น</p>
                        <div className="mt-8 flex gap-4">
                            <Link href="/search" className="btn-primary text-lg px-8 py-3 shadow-xl hover:scale-105 transition-transform">เริ่มช้อปเลย</Link>
                            <Link href="#featured" className="btn-ghost text-lg px-8 py-3 shadow-lg hover:scale-105 transition-transform">ดูสินค้ายอดฮิต</Link>
                        </div>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, scale: 0.8, rotate: -8 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 1 }} className="relative flex justify-center items-center">
                        <div className="aspect-[4/3] rounded-3xl glass card-3d grid place-items-center shadow-2xl border-2 border-indigo-500/20">
                            <motion.img src="/hero-gadget.png" alt="hero" className="w-3/4 floaty drop-shadow-2xl" initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.2, delay: 0.3 }} />
                        </div>
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-48 h-16 bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400 blur-2xl opacity-40" />
                    </motion.div>
                </div>
            </section>

            {/* FEATURED */}
            <section id="featured" className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
                <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400 mb-10 drop-shadow-xl">สินค้าเด่น</motion.h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {featured.map((p, idx) => (
                        <motion.a
                            key={p.name}
                            href={p.href}
                            className="glass rounded-3xl card-3d p-8 flex flex-col items-center justify-center shadow-xl border-2 border-white/10 hover:scale-105 hover:shadow-2xl transition-transform relative group"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 + idx * 0.2 }}
                        >
                            <img src={p.img} alt={p.name} className="w-full h-48 object-contain floaty drop-shadow-xl group-hover:scale-110 transition-transform" />
                            <div className="mt-6 text-center">
                                <p className="font-bold text-2xl gradient-text drop-shadow-lg">{p.name}</p>
                                <p className="text-white/80 text-xl mt-2 drop-shadow">฿{(p.price / 100).toLocaleString()}</p>
                            </div>
                            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400 blur-xl opacity-30" />
                        </motion.a>
                    ))}
                </div>
            </section>

            {/* 3D Glow & Floating Particles */}
            <div className="pointer-events-none fixed inset-0 z-0">
                <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-indigo-400 via-cyan-400 to-emerald-400 rounded-full blur-3xl opacity-30 animate-pulse" />
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-br from-indigo-400 via-cyan-400 to-emerald-400 rounded-full blur-2xl opacity-20 animate-pulse" />
            </div>
        </main>
    );
}