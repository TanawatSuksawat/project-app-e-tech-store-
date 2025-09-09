// placeholder
// src/app/api/auth/register/route.ts
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
    const body = await req.json();
    // TODO: hash password, save user
    return NextResponse.json({ ok: true, body });
}