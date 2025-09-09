// placeholder
// src/app/api/cart/route.ts
import { NextResponse } from "next/server";


export async function GET() { return NextResponse.json({ items: [] }); }
export async function PATCH() { return NextResponse.json({ ok: true }); }