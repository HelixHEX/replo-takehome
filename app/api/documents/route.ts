import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
  const documents = await prisma.document.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return NextResponse.json({ documents });
}

export async function POST(request: Request) {
  const user = await currentUser();
  const { title } = await request.json();
  const document = await prisma.document.create({
    data: {
      title: title,
      userId: user!.id,
    },
  });

  return NextResponse.json(document);
}
