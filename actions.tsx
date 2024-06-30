"use server";

import prisma from "./lib/prisma";

export const getDocumentTitle = async (id: string) => {
  const document = await prisma.document.findUnique({
    where: {
      id: parseInt(id),
    },
    select: {
      title: true,
    },
  });

  if (!document) {
    return null;
  }

  return document?.title;
};
