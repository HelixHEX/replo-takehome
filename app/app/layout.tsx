import AppNavbar from "@/components/app/navbar";
import Sidenav from "../../components/sidenav";

export const metadata = {
  title: "Personal Worksp... - Home",
  description: "",
};

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Sidenav />
      <div className="md:ml-[240px] bg-[#FCFCFC]">
        
        {children}
      </div>
    </div>
  );
}
