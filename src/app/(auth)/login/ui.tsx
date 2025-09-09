// placeholder
// src/app/(auth)/login/ui.tsx
"use client";
import { useState } from "react";
import { LogIn } from "lucide-react";
import { motion } from "framer-motion";


export default function LoginUI() {
    const [loading, setLoading] = useState(false);
    async function onSubmit(e: React.FormEvent) {
        e.preventDefault(); setLoading(true);
        const form = e.currentTarget as HTMLFormElement;
        const data = Object.fromEntries(new FormData(form).entries());
        await fetch("/api/auth/login", { method: "POST", body: JSON.stringify(data) });
        location.href = "/homepage";
    }
    return (
        <div className="min-h-[calc(100vh-4rem)] grid place-items-center px-4">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md glass rounded-2xl p-8 card-3d">
                <h1 className="text-2xl font-semibold">ยินดีต้อนรับกลับมา</h1>
                <p className="text-white/65 mt-1">เข้าสู่ระบบเพื่อช้อปสินค้าอิเล็กทรอนิกส์สุดล้ำ</p>
                <form onSubmit={onSubmit} className="mt-6 space-y-4">
                    <div>
                        <label className="text-sm">อีเมล</label>
                        <input name="email" type="email" required className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 outline-none focus:border-cyan-400" />
                    </div>
                    <div>
                        <label className="text-sm">รหัสผ่าน</label>
                        <input name="password" type="password" required className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 outline-none focus:border-cyan-400" />
                    </div>
                    <button disabled={loading} className="btn-primary w-full flex items-center justify-center gap-2">
                        <LogIn className="size-4" />{loading ? "กำลังเข้าสู่ระบบ..." : "เข้าสู่ระบบ"}
                    </button>
                </form>
                <p className="mt-4 text-center text-sm text-white/70">ยังไม่มีบัญชี? <a className="underline" href="/register">สมัครสมาชิก</a></p>
            </motion.div>
        </div>
    );
}