// placeholder
// src/app/(auth)/register/ui.tsx
"use client";
import { useState } from "react";
import { UserPlus } from "lucide-react";


export default function RegisterUI() {
    const [loading, setLoading] = useState(false);
    async function onSubmit(e: React.FormEvent) {
        e.preventDefault(); setLoading(true);
        const form = e.currentTarget as HTMLFormElement;
        const data = Object.fromEntries(new FormData(form).entries());
        await fetch("/api/auth/register", { method: "POST", body: JSON.stringify(data) });
        location.href = "/homepage";
    }
    return (
        <div className="min-h-[calc(100vh-4rem)] grid place-items-center px-4">
            <div className="w-full max-w-md glass rounded-2xl p-8 card-3d">
                <h1 className="text-2xl font-semibold">สร้างบัญชีใหม่</h1>
                <form onSubmit={onSubmit} className="mt-6 space-y-4">
                    <div>
                        <label className="text-sm">ชื่อ</label>
                        <input name="name" required className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 focus:border-emerald-400" />
                    </div>
                    <div>
                        <label className="text-sm">อีเมล</label>
                        <input name="email" type="email" required className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 focus:border-emerald-400" />
                    </div>
                    <div>
                        <label className="text-sm">รหัสผ่าน</label>
                        <input name="password" type="password" required className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 focus:border-emerald-400" />
                    </div>
                    <button disabled={loading} className="btn-primary w-full flex items-center justify-center gap-2">
                        <UserPlus className="size-4" />{loading ? "กำลังสร้างบัญชี..." : "สมัครสมาชิก"}
                    </button>
                </form>
            </div>
        </div>
    );
}