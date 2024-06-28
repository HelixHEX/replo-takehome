import DocumentName from "@/components/documentName";
import Editor from "@/components/editor";
import { DocumentProvider } from "@/lib/context/document";

export default function Document({ params }: { params: { id: string } }) {
  return (
    <div className="w-full h-screen p-4 md:p-32 flex flex-col">
      <DocumentProvider id={params.id}>
        <DocumentName />
        <Editor />
      </DocumentProvider>
    </div>
  );
}
