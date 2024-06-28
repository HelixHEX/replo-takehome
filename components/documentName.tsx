'use client';

import { DocumentContext } from "@/lib/context/document";
import { useContext } from "react";

export default function DocumentName() {
  const { document } = useContext(DocumentContext);  

  return <h1 className="text-3xl font-bold text-gray-800">{document?.title}</h1>;
}