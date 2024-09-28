"use client";

import { DocumentContext } from "@/lib/context/document";
import { useContext, useState } from "react";
import { Input } from "./ui/input";
import { useUpdateDocumentTitle } from "@/lib/api/mutations";

export default function DocumentName() {
	const { document } = useContext(DocumentContext);
	const [title, setTitle] = useState<string>(document?.title || "");
	const { mutate } = useUpdateDocumentTitle(document?.id);
	return (
		<>
			<Input
				placeholder="Document title..."
				className="text-3xl bg-[#fcfcfc] focus:border-none hover:bg-none  p-2 border-none font-bold text-gray-800"
				onChange={(e) => {
					mutate({ id: document?.id, title: e.target.value });
					setTitle(e.target.value);
				}}
				value={title}
			/>
		</>
	);
}
