import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET({ params }: { params: { id: string } }) {
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

export async function POST(request: Request) {
  const user = await currentUser();
  const { title } = await request.json();
  const document = await prisma.document.create({
    data: {
      title: title,
      userId: user!.id,
      blocks: JSON.stringify([]),
    },
  });

  return NextResponse.json(document);
}
