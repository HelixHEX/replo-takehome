"use client";

import { useGetDocument } from "@/lib/api/queries";
import { Block } from "@/types";
import React, { createContext, useEffect, useState } from "react";

type BlockDocument = {
  id: string;
  title: string;
  userId: string;
  blocks: string;
};

interface DocumentContextProps {
  status: string;
  setStatus: React.Dispatch<React.SetStateAction<string>>;
  document: any | null;
  setDocument: React.Dispatch<React.SetStateAction<BlockDocument | null>>;
}

export const DocumentContext = createContext<DocumentContextProps>({
  status: "loading",
  setStatus: () => {},
  document: null,
  setDocument: () => {},
});

export const DocumentProvider = ({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) => {
  const [document, setDocument] = useState<any | null>(null);
  const { data: documentData, status: documentStatus } = useGetDocument(id);
  const [status, setStatus] = useState<string>("loading");

  useEffect(() => {
    if (documentStatus === "success" && documentData) {
      setDocument(documentData);
      setStatus("done");
    }
  }, [documentData, documentStatus]);

  return (
    <DocumentContext.Provider
      value={{ status, setStatus, document, setDocument }}
    >
      {children}
    </DocumentContext.Provider>
  );
};
