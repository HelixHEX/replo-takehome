import Navbar from "@/components/navbar";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <>
      <Navbar />
      <div className=" w-full h-screen flex items-center justify-center">
        <SignIn />
      </div>
    </>
  );
}
