// placeholder
// src/app/(shop)/search/ui.tsx
"use client";
import { useEffect, useState } from "react";
import { Search, Filter } from "lucide-react";


interface Product { id: string; name: string; slug: string; price: number; images: string[]; category: string; }


export default function SearchUI() {
    const [items, setItems] = useState<Product[]>([]);
    const [q, setQ] = useState("");
    const [category, setCategory] = useState("all");


    useEffect(() => {
        (async () => {
            const qs = new URLSearchParams({ q, category });
            const res = await fetch(`/api/products?${qs.toString()}`);
            const data = await res.json();
            // รองรับทั้ง array และ object ที่มี items
            if (Array.isArray(data)) {
                setItems(data);
            } else if (Array.isArray(data.items)) {
                setItems(data.items);
            } else {
                setItems([]);
            }
        })();
    }, [q, category]);


    return (
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-white/60" />
                    <input placeholder="ค้นหาสินค้า..." value={q} onChange={e => setQ(e.target.value)} className="w-full rounded-2xl bg-white/5 border border-white/10 pl-10 pr-4 py-2 outline-none focus:border-cyan-400" />
                </div>
                <div className="glass rounded-2xl px-3 py-2 flex items-center gap-2">
                    <Filter className="size-4" />
                    <select value={category} onChange={e => setCategory(e.target.value)} className="bg-transparent outline-none">
                        <option value="all">ทั้งหมด</option>
                        <option value="audio">Audio</option>
                        <option value="drone">Drone</option>
                        <option value="laptop">Laptop</option>
                        <option value="mobile">Mobile</option>
                    </select>
                </div>
            </div>


            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {items.map(p => (
                    <a key={p.id} href={`/product/${p.slug}`} className="glass rounded-2xl p-5 card-3d hover:bg-white/10">
                        <img src={p.images?.[0] || "/placeholder.png"} alt={p.name} className="w-full h-40 object-contain floaty" />
                        <div className="mt-3">
                            <p className="font-semibold">{p.name}</p>
                            <p className="text-white/70">฿{(p.price / 100).toLocaleString()}</p>
                        </div>
                    </a>
                ))}
            </div>
        </main>
    );
}