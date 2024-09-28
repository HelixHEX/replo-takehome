"use client";
import { SignedIn, useUser } from "@clerk/nextjs";
import Documents from "./data";
import AppNavbar from "@/components/app/navbar";
import { Clock3 } from "lucide-react";
export default function Home({ params }: { params: { id: string } }) {
  const { user } = useUser();
  return (
    <>
      <SignedIn>
        <AppNavbar />
        <div className="w-full h-screen pt-14 p-4 md:pt-6 md:px-36   md:p-32 flex flex-col">
          <h1 className="text-center font-semibold text-3xl text-[#37352f]">
            Hello, {user?.fullName}
          </h1>
          <div className=" h-auto pb-4 overflow-y-hidden mt-10 w-auto">
            <div className="p-2 flex">
              <Clock3
                width={14}
                className="self-center text-[#a6a299]"
                height={14}
              />
              <div className="self-center ml-2 text-[#787774] text-sm">
                Recently visited
              </div>
            </div>
            <div className="w-auto h-full">
              <Documents style="vertical" />
            </div>
          </div>
        </div>
      </SignedIn>
    </>
  );
}
