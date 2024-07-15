"use client";
import DocumentCard from "@/components/documentCard";
import NewDocument from "@/components/newDocument";
import { useDocuments } from "@/lib/api/queries";
import { SquarePlus } from "lucide-react";
import {  useState } from "react";

interface Props {
  sideNav?: boolean;
  style?: "horizontal" | "vertical";
}

export default function Documents({ sideNav, style = "horizontal" }: Props) {
  const { data, status } = useDocuments();
  const [open, setOpen] = useState<boolean>(true);
  if (status === "pending" || !data) {
    return null
  }

  return (
    <>
      {sideNav && (
        <div
          // onMouseEnter={() => setHover(true)}
          // onMouseLeave={() => setHover(false)}
          onClick={() => setOpen(!open)}
          className="w-full text-sm font-medium p-2 hover:bg-[#EFEFED] hover:text-[#5b5955] text-[#91918e] hover:cursor-pointer border-gray-300 rounded-md"
        >
          Private
        </div>
      )}
      {open && (
        <div
          className={`w-full  ${
            style === "vertical" ? "flex  overflow-x-scroll" : ""
          }`}
        >
          {data?.documents && data.documents.length > 0 ? (
            data?.documents.map((document, index) => {
              if (style === "vertical") {
                if (index < 4) {
                  return (
                    <>
                      <DocumentCard
                        key={document.id}
                        title={document.title}
                        id={document.id}
                        style={style}
                      />
                    </>
                  );
                } else return <></>;
              } else {
                return (
                  <>
                    <DocumentCard
                      key={document.id}
                      title={document.title}
                      id={document.id}
                      style={style}
                    />
                  </>
                );
              }
            })
          ) : (
            <></>
            // <p className="text-center text-gray-400">Start by creating a new document</p>
          )}
          {style === "vertical" && (
            <NewDocument>
              <div className="mr-4 rounded-md min-w-[130px] h-[140px] hover:cursor-pointer border-[0.1px] border-r-[0.1px] hover:border-gray-400 border-gray-300">
                <div className="w-full h-[50px] bg-[#F7F7F5]"></div>
                <div className="p-4 mt-[-28px]">
                  <SquarePlus width={22} height={22} />
                  <p className="mt-2 text-[#37352f] text-sm font-semibold">
                    New document
                  </p>
                </div>
              </div>
            </NewDocument>
          )}
        </div>
      )}
    </>
  );
}
