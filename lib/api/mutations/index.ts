import axios from "axios";
import { useMutation } from "@tanstack/react-query";

const createDocument = async (document: any) => {
  const res = await axios.post("/api/documents", document);
  return res.data;
};

export const useCreateDocument = () => {
  return useMutation({
    mutationFn: createDocument,
  });
};