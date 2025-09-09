// placeholder
// src/lib/payments.ts
// Mock payment provider for demo
export async function charge({ amount, token }: { amount: number; token: string }) {
    await new Promise(r => setTimeout(r, 1200));
    if (!token) throw new Error("Payment token missing");
    return { id: `pay_${Math.random().toString(36).slice(2)}`, status: "succeeded", amount };
}