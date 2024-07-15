"use client";

import { DocumentContext } from "@/lib/context/document";
import { useContext, useState } from "react";
import { Input } from "./ui/input";
import { useUpdateDocumentTitle } from "@/lib/api/mutations";

export default function DocumentName() {
  const { document } = useContext(DocumentContext);
  const [mode, setMode] = useState<"text" | "edit">("text");
  const [title, setTitle] = useState<string>(document?.title || "");
  const { mutate } = useUpdateDocumentTitle(document?.id);
  return (
    <>
      {mode === "text" ? (
        <h1
          onClick={() => setMode("edit")}
          className="text-3xl font-bold text-gray-800"
        >
          {title}
        </h1>
      ) : (
        <Input
          placeholder="Document title..."
          className="text-3xl font-bold text-gray-800"
          onChange={(e) => {
            mutate({ id: document?.id, title: e.target.value });
            setTitle(e.target.value);
          }}
          value={title}
          onMouseLeave={() => setMode("text")}
        />
      )}
    </>
  );
}
