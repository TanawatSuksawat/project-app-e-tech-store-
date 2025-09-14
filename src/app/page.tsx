// src/app/page.tsx

"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import AppHeader from "@/components/layout/AppHeader";
import AppFooter from "@/components/layout/AppFooter";

export default function Home() {
  return (
    <>
      <AppHeader />
      <main className="relative min-h-screen bg-gradient-to-br from-black via-indigo-950 to-neutral-900 overflow-x-hidden flex flex-col items-center justify-center">
        {/* 3D Glow & Floating Particles */}
        <div className="pointer-events-none fixed inset-0 z-0">
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-indigo-400 via-cyan-400 to-emerald-400 rounded-full blur-3xl opacity-30 animate-pulse" />
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-br from-indigo-400 via-cyan-400 to-emerald-400 rounded-full blur-2xl opacity-20 animate-pulse" />
        </div>

        <section className="relative z-10 w-full max-w-3xl mx-auto px-4 py-24 flex flex-col items-center justify-center">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="glass rounded-3xl card-3d shadow-2xl border-2 border-indigo-500/20 p-10 flex flex-col items-center justify-center">
            <motion.div initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.2, delay: 0.3 }}>
              <img src="/next.svg" alt="Next.js logo" className="w-40 mb-8 floaty drop-shadow-2xl" />
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400 drop-shadow-xl animate-gradient-x text-center mb-6">
              E-Tech Store
            </h1>
            <p className="text-white/80 text-xl md:text-2xl drop-shadow-lg text-center mb-8">สัมผัสประสบการณ์ช้อปสินค้าอิเล็กทรอนิกส์สุดล้ำ ดีไซน์ 3D อลังการ</p>
            <div className="flex gap-6 mt-4">
              <Link href="/homepage" className="btn-primary text-lg px-8 py-3 shadow-xl hover:scale-105 transition-transform">เข้าสู่หน้าแรก</Link>
              <Link href="/search" className="btn-ghost text-lg px-8 py-3 shadow-lg hover:scale-105 transition-transform">ค้นหาสินค้า</Link>
            </div>
          </motion.div>
        </section>
      </main>
      <AppFooter />
    </>
  );
}
