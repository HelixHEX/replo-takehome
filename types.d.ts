import { ReactNode } from "react";

type Block = {
  id: string;
  type: string;
  props: Record<string, boolean | number | string>;
  content: InlineContent[] | TableContent | undefined;
  children: Block[];
};

type BlockNoteEditorOptions = {
  initialContent?: PartialBlock[];
  domAttributes?: Record<string, string>;
  defaultStyles?: boolean;
  uploadFile?: (file: File) => Promise<string>;
  collaboration?: CollaborationOptions;
  dictionary?: Dictionary;
  schema?: BlockNoteSchema;
  trailingBlock?: boolean;
};

export type BlockNoteViewProps = {
  editor: BlockNoteEditor;
  editable?: boolean;
  onSelectionChange?: () => void;
  onChange?: () => void;
  theme?:
    | "light"
    | "dark"
    | Theme
    | {
        light: Theme;
        dark: Theme;
      };
  formattingToolbar?: boolean;
  linkToolbar?: boolean;
  sideMenu?: boolean;
  slashMenu?: boolean;
  filePanel?: boolean;
  tableHandles?: boolean;
  children?: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

type BlockDocument = {
  id: string;
  title: string;
  userId: string;
  blocks: string;
};
