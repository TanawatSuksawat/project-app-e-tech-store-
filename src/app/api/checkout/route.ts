// placeholder
// src/app/api/checkout/route.ts
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
    const body = await req.json();
    // TODO: charge via payments.ts and create Order
    return NextResponse.json({ ok: true, body });
}