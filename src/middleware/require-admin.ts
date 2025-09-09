// placeholder
// src/middleware/require-admin.ts
"use server";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";


export async function requireAdmin() {
    const s = await getSession();
    if (!s) redirect("/login");
    if (s.role !== "ADMIN") redirect("/");
    return s;
}