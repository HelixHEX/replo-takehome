import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const createDocument = async (document: any) => {
  const res = await axios.post("/api/documents", document);
  return res.data;
};

export const useCreateDocument = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  return useMutation({
    mutationKey: ["createDocument"],
    mutationFn: createDocument,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["documents"] });
      router.push(`/${data.id}`)
    },
  });
};

const saveDocument = async ({ id, blocks }: { id: string; blocks: string }) => {
  const res = await axios.post(`/api/documents/${id}`, {
    id,
    blocks,
  });
  return res.data;
};

export const useSaveDocument = (id: string) => {
  return useMutation({
    mutationKey: ["saveDocument", id],
    mutationFn: saveDocument,
  });
};

const updateDocumentTitle = async ({
  id,
  title,
}: {
  id: string;
  title: string;
}) => {
  const res = await axios.put(`/api/documents/${id}`, {
    id,
    title,
  });
  return res.data;
};

export const useUpdateDocumentTitle = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["updateDocumentTitle", id],
    mutationFn: updateDocumentTitle,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["document", id] });
      queryClient.invalidateQueries({ queryKey: ["documents"] });
    },
  });
};
