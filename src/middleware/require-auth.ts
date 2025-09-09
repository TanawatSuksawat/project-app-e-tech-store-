// placeholder
// src/middleware/require-auth.ts
"use server";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";


export async function requireAuth() {
    const session = await getSession();
    if (!session) redirect("/login");
    return session;
}