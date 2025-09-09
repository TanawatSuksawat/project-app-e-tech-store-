// placeholder
// src/app/(account)/orders/ui.tsx
"use client";
export default function OrdersUI() {
    const orders: [{ id: string; total: number; status: string; createdAt: string }] | any = [];
    return (
        <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
            <h1 className="text-2xl font-semibold">คำสั่งซื้อของฉัน</h1>
            <div className="mt-6 glass rounded-2xl overflow-hidden">
                <table className="w-full text-sm">
                    <thead className="bg-white/5">
                        <tr>
                            <th className="text-left p-4">Order</th>
                            <th className="text-left p-4">สถานะ</th>
                            <th className="text-right p-4">ยอดรวม</th>
                            <th className="text-right p-4">วันที่</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.length === 0 && (
                            <tr><td colSpan={4} className="p-6 text-center text-white/70">ยังไม่มีคำสั่งซื้อ</td></tr>
                        )}
                    </tbody>
                </table>
            </div>
        </main>
    );
}