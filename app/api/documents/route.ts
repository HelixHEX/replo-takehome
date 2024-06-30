import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
  // const user = await currentUser();
  const documents = await prisma.document.findMany({
    where: {
      userId: 'user_2iTpLYC75VJFtQQsX4kwI5YTUCn',
    },
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
      userId: 'user_2iTpLYC75VJFtQQsX4kwI5YTUCn',
    },
  });

  return NextResponse.json(document);
}
