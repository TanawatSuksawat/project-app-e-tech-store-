// placeholder
// src/app/(shop)/product/[slug]/ui.tsx
"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Star, ShoppingCart } from "lucide-react";


interface Product { id: string; name: string; slug: string; price: number; images: string[]; description: string; rating: number; }


export default function ProductDetailUI() {
    const { slug } = useParams<{ slug: string }>();
    const [p, setP] = useState<Product | null>(null);


    useEffect(() => {
        (async () => {
            const res = await fetch(`/api/products/${slug}`);
            setP(await res.json());
        })();
    }, [slug]);


    if (!p) return <div className="px-6 py-16 text-center">กำลังโหลด...</div>;


    return (
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-2 gap-10">
            <div className="glass rounded-3xl p-6 card-3d grid place-items-center">
                <img src={p.images?.[0] || "/placeholder.png"} alt={p.name} className="w-4/5 h-80 object-contain floaty" />
            </div>
            <div>
                <h1 className="text-3xl font-bold">{p.name}</h1>
                <div className="mt-2 flex items-center gap-2 text-amber-400">
                    <Star className="size-4 fill-current" />
                    <span>{p.rating.toFixed(1)}</span>
                </div>
                <p className="mt-4 text-white/70 leading-relaxed">{p.description}</p>
                <p className="mt-6 text-3xl font-bold">฿{(p.price / 100).toLocaleString()}</p>
                <button className="btn-primary mt-6 flex items-center gap-2"><ShoppingCart className="size-4" /> เพิ่มลงตะกร้า</button>
            </div>
        </main>
    );
}