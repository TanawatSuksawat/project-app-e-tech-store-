// placeholder
// src/app/api/auth/login/route.ts
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
    const { email } = await req.json();
    // Demo: accept any email/password and set a dummy cookie via client action
    return NextResponse.json({ ok: true, email });
}