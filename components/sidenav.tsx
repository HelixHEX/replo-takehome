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
      <div className="hidden bg-[#F7F7F5] md:flex fixed md:flex-col justify-between w-[250px] h-screen">
        <div className='h-10  w-full'></div>
        <div className=" w-full h-full overflow-y-scroll pt-0 p-2">
          {/* <User /> */}
          

          <Docuements sideNav={true} />
        </div>
        {/* <NewDocument /> */}
      </div>
      <MobileNav />
    </>
  );
}
