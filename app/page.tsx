"use client";
import Editor from "@/components/editor";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  return (
    <>
      <SignedIn>
        <div className="w-full h-screen p-4 ">
          <UserButton />
          <Editor />
        </div>
      </SignedIn>
      <SignedOut>
        <Button onClick={() => router.push("/sign-in")}>Sign In</Button>
      </SignedOut>
    </>
  );
}
