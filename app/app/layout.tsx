import AppNavbar from "@/components/app/navbar";
import Sidenav from "../../components/sidenav";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Sidenav />
      <div className="md:ml-[250px] bg-[#FCFCFC]">
        
        {children}
      </div>
    </div>
  );
}
