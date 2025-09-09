// placeholder
// src/app/(shop)/checkout/ui.tsx
"use client";
import { useState } from "react";
import { CreditCard } from "lucide-react";


export default function CheckoutUI(){
const [loading,setLoading] = useState(false);
async function pay(e:React.FormEvent){
e.preventDefault(); setLoading(true);
const form = e.currentTarget as HTMLFormElement;
const data = Object.fromEntries(new FormData(form).entries());
await fetch("/api/checkout",{method:"POST",body:JSON.stringify(data)});
location.href = "/orders";
}
return (
<main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-2 gap-8">
<div className="glass rounded-2xl p-6">
<p className="font-semibold">ที่อยู่จัดส่ง</p>
<form onSubmit={pay} className="mt-4 space-y-4">
<textarea name="address" required className="w-full min-h-32 rounded-xl bg-white/5 border border-white/10 p-3"/>
<p className="font-semibold">การชำระเงิน</p>
<input name="token" placeholder="Card token (mock)" required className="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2"/>
<button disabled={loading} className="btn-primary w-full flex items-center gap-2"><CreditCard className="size-4"/>{loading?"กำลังชำระเงิน...":"ชำระเงิน"}</button>
</form>
</div>
<aside className="glass rounded-2xl p-6 h-fit">
<p className="font-semibold">สรุป</p>
<p className="mt-2 text-2xl font-bold">฿9,990.00</p>
<p className="text-white/70">(ตัวอย่าง)</p>
</aside>
</main>
);
}