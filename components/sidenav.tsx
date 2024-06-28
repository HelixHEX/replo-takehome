"use client";
import Docuements from "@/app/data";
import { Button } from "./ui/button";
import NewDocument from "./newDocument";
import User from "./user";
import MobileNav from "./mobileNav";
import { usePathname } from "next/navigation";

export default function Sidenav() {
  const pathname = usePathname();

  if (pathname === "/sign-in" || pathname === "/sign-up") {
    return null;
  }

  return (
    <>
      <div className="hidden bg-[#F7F7F5] md:flex fixed md:flex-col justify-between w-[250px] border-r-[0.1px]  border-gray-300 h-screen  p-2">
        <div className="w-full h-full overflow-y-scroll">
          <User />

          <Docuements sideNav={true} />
        </div>
        <NewDocument />
      </div>
      <MobileNav />
    </>
  );
}
