// placeholder
// src/components/layout/AppHeader.tsx
"use client";
import Link from "next/link";
import { ShoppingCart, Search, LogIn, User, Package2 } from "lucide-react";
import { motion } from "framer-motion";


export default function AppHeader() {
    return (
        <header className="sticky top-0 z-40 backdrop-blur bg-black/40 border-b border-white/10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3">
                    <Package2 className="size-6" />
                    <Link href="/" className="font-bold tracking-tight text-lg">E‑Tech Store</Link>
                </motion.div>
                <nav className="hidden md:flex items-center gap-6 text-sm">
                    <Link href="/homepage" className="hover:text-white/80">Home</Link>
                    <Link href="/search" className="hover:text-white/80 flex items-center gap-2"><Search className="size-4" />Search</Link>
                    <Link href="/cart" className="hover:text-white/80 flex items-center gap-2"><ShoppingCart className="size-4" />Cart</Link>
                    <Link href="/orders" className="hover:text-white/80 flex items-center gap-2"><User className="size-4" />Orders</Link>
                </nav>
                <div className="flex items-center gap-3">
                    <Link href="/login" className="btn-ghost flex items-center gap-2">
                        <LogIn className="size-4" /> <span className="hidden sm:inline">Login</span>
                    </Link>
                </div>
            </div>
        </header>
    );
}