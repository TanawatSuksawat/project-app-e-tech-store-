// placeholder
// src/app/(admin)/products/ui.tsx
"use client";
import Link from "next/link";


export default function AdminProductsUI() {
    return (
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-semibold">จัดการสินค้า</h1>
                <Link href="/products/new" className="btn-primary">เพิ่มสินค้า</Link>
            </div>
            <div className="mt-6 glass rounded-2xl p-6">
                <p className="text-white/70">(ตัวอย่าง) ยังไม่มีข้อมูล — สร้างได้ที่ปุ่ม "เพิ่มสินค้า"</p>
            </div>
        </main>
    );
}