// placeholder
// src/lib/utils.ts
export const formatPrice = (cents: number) =>
new Intl.NumberFormat("th-TH", { style: "currency", currency: "THB" }).format(cents / 100);


export function cn(...classes: Array<string | false | null | undefined>) {
return classes.filter(Boolean).join(" ");
}