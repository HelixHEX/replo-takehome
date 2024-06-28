import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const document = await prisma.document.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!document) {
    return NextResponse.json(
      { message: "Document not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(document);
}

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { blocks } = await request.json();

  const document = await prisma.document.update({
    where: { id: parseInt(params.id) },
    data: {
      blocks
    },
  });

  return NextResponse.json(document);
}
