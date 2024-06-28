"use client";
import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Documents from "./data";
import AppNavbar from "@/components/app/navbar";
export default function Home({ params }: { params: { id: string } }) {
  const router = useRouter();
  const { user } = useUser();
  return (
    <>
      <SignedIn>
        <AppNavbar />
        <div className="w-full h-screen pt-14 p-4 md:pt-14   md:p-64 flex flex-col">
          <h1 className="text-center font-semibold text-3xl text-[#37352f]">
            Good Morning, {user?.fullName}
          </h1>
          <div className="h-auto pb-4 overflow-y-hidden mt-10 w-full">
            <div className="p-2 text-[#787774] text-sm">Recently visited</div>
            <div className="w-full h-full overflow-x-scroll">
            <Documents style="vertical" />
            </div>
          </div>
        </div>
      </SignedIn>
    </>
  );
}
