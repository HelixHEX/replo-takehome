import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const documents = await prisma.document.findMany();

  return NextResponse.json({ documents });
}
