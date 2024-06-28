"use client";
import DocumentCard from "@/components/documentCard";
import { Button } from "@/components/ui/button";
import { useDocuments } from "@/lib/api/queries";

export default function Docuements() {
  const { data, status } = useDocuments();

  if (status === "pending" || !data) {
    return <div className="w-full h-screen p-4 ">Loading...</div>;
  }

  return (
    <div className="w-full h-full">
      {data?.documents && data.documents.length > 0 ? (
        data?.documents.map((document) => (
          <DocumentCard
            key={document.id}
            title={document.title}
            id={document.id}
          />
        ))
      ) : (
        <></>
        // <p className="text-center text-gray-400">Start by creating a new document</p>
      )}
    </div>
  );
}
