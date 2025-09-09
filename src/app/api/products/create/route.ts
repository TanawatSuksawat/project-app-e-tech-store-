// placeholder
// src/app/api/products/create/route.ts
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
    const body = await req.json();
    // TODO: validate & save via Prisma
    return NextResponse.json({ ok: true, body });
}
