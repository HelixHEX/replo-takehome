import axios from "axios";
import prisma from "@/lib/prisma";
import { useQuery } from "@tanstack/react-query";
import { GetDocumentsResponse } from "./types";

const getDocuments = async () => {
  const res = await axios.get("/api/documents");
  return res.data;
};

export const useDocuments = () => {
  return useQuery<GetDocumentsResponse>({
    queryKey: ["documents"],
    queryFn: () => getDocuments(),
  });
};

const getDocument = async (id: string) => {
  const res = await axios.get(`/api/documents/${id}`);
  return res.data;
};

export const useGetDocument = (id: string) => {
  return useQuery({
    queryKey: ["document", id],
    queryFn: () => getDocument(id),
  });
};
