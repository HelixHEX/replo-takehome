import AppNavbar from "@/components/app/navbar";
import Sidenav from "../../components/sidenav";
import { SignedIn } from "@clerk/nextjs";

export const metadata = {
  title: "Personal Worksp... - Home",
  description: "",
};

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <SignedIn>
      <Sidenav />
      <div className="md:ml-[240px] bg-[#FCFCFC]">
        {children}
      </div>
    </SignedIn>
  );
}
