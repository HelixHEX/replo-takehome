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
      className="mb-4 flex flex-col  justify-center  p-2 hover:bg-gray-100 hover:cursor-pointer border-gray-300 rounded-md"
    >
      <h1 className="text-sm font-semibold text-gray-800">{title}</h1>
    </div>
  );
}
