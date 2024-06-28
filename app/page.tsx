"use client";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Docuements from "./data";
export default function Home({ params }: { params: { id: string } }) {
  const router = useRouter();
  return (
    <>
      <SignedIn>
        <div className="w-full h-screen p-4 flex flex-col">
          {/* <Docuements /> */}
        </div>
        {/* <div className="w-full h-screen p-4 ">
            <UserButton />
            <Editor />
          </div> */}
      </SignedIn>
      <SignedOut>
        <Button onClick={() => router.push("/sign-in")}>Sign In</Button>
      </SignedOut>
    </>
  );
}
