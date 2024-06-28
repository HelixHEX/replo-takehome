"use client";
import { useUser } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { user } = useUser();
  const router = useRouter();
  return (
    <div className="w-full h-[79px]  fixed top-0 pt-0 border-t-4 border-white p-4">
      <div className="flex h-full bg-white border-b-[0.1px] border-gray-200 justify-between items-center">
        <h1 className="text-lg font-semibold text-landingHeadin">Notion</h1>
        <div>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <Button
              onClick={() => router.push("/sign-in")}
              className="hover:bg-[#f6f6f6] h-[30px] mr-2 hover:text-[#202020] text-[#202020]"
              variant="ghost"
            >
              <p className="tracking-wide font-medium">Log in</p>
            </Button>
            <Button
              onClick={() => router.push("/sign-up")}
              className="bg-[#121212] hover:bg-[#333333]  w-32 p-0 h-[30px]  rounded-sm"
            >
              <p className="tracking-wide font-normal">Get Notion free</p>
            </Button>
          </SignedOut>
        </div>
      </div>
    </div>
  );
}
