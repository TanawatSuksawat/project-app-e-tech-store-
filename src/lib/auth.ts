// src/lib/auth.ts
"use server";
import { cookies } from "next/headers";
import bcrypt from "bcryptjs";
import { prisma } from "./db";


type Session = { id: string; name: string; email: string; role: "ADMIN" | "CUSTOMER" };


export async function hashPassword(raw: string) {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(raw, salt);
}


export async function verifyPassword(raw: string, hash: string) {
    return bcrypt.compare(raw, hash);
}


const COOKIE_NAME = "et_session";


export async function createSession(user: Session) {
    cookies().set(COOKIE_NAME, JSON.stringify(user), {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 * 7,
    });
}


export async function getSession(): Promise<Session | null> {
    const v = cookies().get(COOKIE_NAME)?.value;
    if (!v) return null;
    try { return JSON.parse(v) as Session; } catch { return null; }
}


export async function destroySession() {
    cookies().delete(COOKIE_NAME);
}