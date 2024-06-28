import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="ml-[-125px] w-full h-screen flex items-center justify-center">
      <SignIn />
    </div>
  );
}
