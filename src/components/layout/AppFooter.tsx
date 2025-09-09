// src/components/layout/AppFooter.tsx
export default function AppFooter() {
    return (
        <footer className="border-t border-white/10 py-10 text-sm text-white/70 bg-gradient-to-b from-black/0 to-black/40">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
                <div>
                    <p className="font-semibold">E‑Tech Store</p>
                    <p className="mt-2">Electronics with an extra sprinkle of wow ✨</p>
                </div>
                <div>
                    <p className="font-semibold">Customer Care</p>
                    <ul className="mt-2 space-y-2">
                        <li>Shipping & Returns</li>
                        <li>Warranty</li>
                        <li>Contact us</li>
                    </ul>
                </div>
                <div>
                    <p className="font-semibold">Follow</p>
                    <p className="mt-2">@etech • #wirelessjoy</p>
                </div>
            </div>
            <p className="mt-10 text-center">© {new Date().getFullYear()} E‑Tech Store</p>
        </footer>
    );
}