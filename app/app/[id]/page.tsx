import { getDocumentTitle } from "@/actions";
import AppNavbar from "@/components/app/navbar";
import DocumentName from "@/components/documentName";
import Editor from "@/components/editor";
import { DocumentProvider } from "@/lib/context/document";
import type { Metadata } from "next";

type Props = {
	params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const documentTitle = await getDocumentTitle(params.id);

	if (!documentTitle) {
		return {
			title: "Notion",
		};
	}

	return {
		title: documentTitle,
		description: "",
	};
}

export default function Document({ params }: { params: { id: string } }) {
	return (
		<DocumentProvider id={params.id}>
			<AppNavbar />
			<div className="w-full h-screen p-4 md:p-32 flex flex-col">
				<DocumentName />
				<Editor />
			</div>
		</DocumentProvider>
	);
}
