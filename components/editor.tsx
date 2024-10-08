"use client";

import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView, type Theme } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useContext, useMemo } from "react";
import { DocumentContext } from "@/lib/context/document";
import { BlockNoteEditor } from "@blocknote/core";
import { useSaveDocument } from "@/lib/api/mutations";
import type { Block } from "@/types";

const lightTheme = {
	colors: {
		editor: {
			background: "#FCFCFC",
		},
	},
} satisfies Theme;

const theme = {
	light: lightTheme,
	dark: lightTheme,
};

export default function Editor() {
	const { document, status } = useContext(DocumentContext);
	const { mutate } = useSaveDocument(document?.id);

	const save = (blocks: Block[]) => {
		mutate({ id: document?.id, blocks: JSON.stringify(blocks) });
	};

	// Creates a new editor instance.
	const editor = useMemo(() => {
		if (status === "loading") {
			return undefined;
		}
		console.log(document.blocks);

		return BlockNoteEditor.create({
			initialContent: document.blocks ? JSON.parse(document.blocks) : "",
		});
	}, [document.blocks, status]);

	if (status === "loading" || !document) {
		return null;
	}
	if (!editor) {
		return null;
	}

	// Renders the editor instance using a React component.
	return (
		<BlockNoteView
			onChange={() => save(editor.document)}
			theme={theme}
			className="mt-8"
			editor={editor}
		/>
	);
}
