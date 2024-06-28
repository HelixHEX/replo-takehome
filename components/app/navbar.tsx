"use client";

import { DocumentContext } from "@/lib/context/document";
import { UserButton } from "@clerk/nextjs";
import { useContext } from "react";

export default function AppNavbar() {
  const { document } = useContext(DocumentContext);
  return (
    <div className="w-full h-10 p-2 pl-4 flex justify-between">
      <p className="text-sm">{document?.title}</p>
      <UserButton />
    </div>
  );
}
