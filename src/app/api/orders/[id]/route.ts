// placeholder
// src/app/api/orders/[id]/route.ts
import { NextResponse } from "next/server";


export async function GET(_: any, ctx: { params: { id: string } }) { return NextResponse.json({ id: ctx.params.id }); }
export async function PATCH() { return NextResponse.json({ ok: true }); }