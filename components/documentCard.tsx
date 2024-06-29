"use client";

import { FileText } from "lucide-react";
import { useRouter } from "next/navigation";

interface DocumentCardProps {
  title: string;
  id: string;
  style?: "horizontal" | "vertical";
}

export default function DocumentCard({
  title,
  id,
  style = "horizontal",
}: DocumentCardProps) {
  const router = useRouter();
  return (
    <>
      {style === "horizontal" ? (
        <div
          onClick={() => router.push(`/app/${id}`)}
          className="flex flex-col  justify-center h-10  p-2 hover:bg-[#EFEFED] hover:cursor-pointer border-gray-300 rounded-md"
        >
          <h1 className=" font-medium text-sm text-primaryText">{title}</h1>
        </div>
      ) : (
        <div
          onClick={() => router.push(`/app/${id}`)}
          className="mr-4 rounded-md min-w-[130px] h-[140px] hover:cursor-pointer border-[1px] hover:border-gray-400 border-gray-300"
        >
          <div className="w-full rounded-t-md border-b-0 h-[50px] bg-[#F7F7F5]"></div>
          <div className="p-4 mt-[-28px]">
            <FileText width={22} height={22} />
            <p className="mt-2 line-clamp-1 truncate text-[#37352f] text-sm font-medium">
              {title}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
