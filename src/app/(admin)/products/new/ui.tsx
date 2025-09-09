// placeholder
// src/app/(admin)/products/new/ui.tsx
"use client";
import { useState } from "react";


export default function NewProductUI() {
    const [loading, setLoading] = useState(false);
    async function onSubmit(e: React.FormEvent) {
        e.preventDefault(); setLoading(true);
        const data = Object.fromEntries(new FormData(e.currentTarget as HTMLFormElement).entries());
        await fetch("/api/products/create", { method: "POST", body: JSON.stringify(data) });
        location.href = "/products";
    }
    return (
        <main className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10">
            <h1 className="text-2xl font-semibold">เพิ่มสินค้า</h1>
            <form onSubmit={onSubmit} className="mt-6 glass rounded-2xl p-6 space-y-4">
                <input name="name" placeholder="ชื่อสินค้า" className="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2" />
                <input name="slug" placeholder="slug" className="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2" />
                <textarea name="description" placeholder="รายละเอียด" className="w-full min-h-28 rounded-xl bg-white/5 border border-white/10 p-3" />
                <input name="price" type="number" placeholder="ราคา (สตางค์)" className="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2" />
                <input name="images" placeholder="รูปภาพ (URL, คั่นด้วย ,)" className="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2" />
                <input name="category" placeholder="หมวดหมู่" className="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2" />
                <input name="stock" type="number" placeholder="สต็อก" className="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2" />
                <button disabled={loading} className="btn-primary">{loading ? "กำลังบันทึก..." : "บันทึก"}</button>
            </form>
        </main>
    );
}