import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const createDocument = async (document: any) => {
  const res = await axios.post("/api/documents", document);
  return res.data;
};

export const useCreateDocument = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["createDocument"],
    mutationFn: createDocument,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["documents"] });
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
