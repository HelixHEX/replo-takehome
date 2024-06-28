import Navbar from "@/components/navbar";
import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <>
      <Navbar />
      <div className=" w-full h-screen flex items-center justify-center">
        <SignUp />
      </div>
    </>
  );
}
