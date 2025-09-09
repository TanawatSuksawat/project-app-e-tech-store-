// placeholder
// src/app/(shop)/cart/ui.tsx
"use client";
import { useState } from "react";
import { Trash2 } from "lucide-react";


export default function CartUI() {
    const [items, setItems] = useState<{ id: string; name: string; price: number; img: string; qty: number }[]>([]);
    const total = items.reduce((s, i) => s + i.price * i.qty, 0);
    function remove(id: string) { setItems(prev => prev.filter(i => i.id !== id)); }
    return (
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
            <h1 className="text-2xl font-semibold">ตะกร้าสินค้า</h1>
            <div className="grid lg:grid-cols-3 gap-8 mt-6">
                <div className="lg:col-span-2 space-y-4">
                    {items.length === 0 && <p className="text-white/70">ยังไม่มีสินค้าในตะกร้า</p>}
                    {items.map(i => (
                        <div key={i.id} className="glass rounded-2xl p-4 flex items-center gap-4">
                            <img src={i.img} className="size-20 object-contain rounded-xl" />
                            <div className="flex-1">
                                <p className="font-medium">{i.name}</p>
                                <p className="text-white/70">฿{(i.price / 100).toLocaleString()} × {i.qty}</p>
                            </div>
                            <button onClick={() => remove(i.id)} className="btn-ghost"><Trash2 className="size-5" /></button>
                        </div>
                    ))}
                </div>
                <aside className="glass rounded-2xl p-6 h-fit">
                    <p className="font-semibold">สรุปคำสั่งซื้อ</p>
                    <p className="mt-2 text-2xl font-bold">฿{(total / 100).toLocaleString()}</p>
                    <a href="/checkout" className="btn-primary w-full mt-4 inline-flex justify-center">ชำระเงิน</a>
                </aside>
            </div>
        </main>
    );
}