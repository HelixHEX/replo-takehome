"use client";

import { useRouter } from "next/navigation";

interface DocumentCardProps {
  title: string;
  id: string;
}

export default function DocumentCard({ title, id }: DocumentCardProps) {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/documents/${id}`)}
      className="mb-4  flex flex-col  justify-center  p-2 hover:bg-[#EEEEEE] hover:cursor-pointer border-gray-300 rounded-md"
    >
      <h1 className=" font-semibold text-primaryText">{title}</h1>
    </div>
  );
}
