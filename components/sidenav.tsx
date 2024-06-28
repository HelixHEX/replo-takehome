"use client";
import Docuements from "@/app/data";
import { Button } from "./ui/button";
import NewDocument from "./newDocument";
import User from "./user";
import MobileNav from "./mobileNav";
import { usePathname, useRouter } from "next/navigation";
import { House, SquarePen } from "lucide-react";
import { Avatar } from "./ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";

export default function Sidenav() {
  const pathname = usePathname();
  const router = useRouter();
  if (pathname === "/sign-in" || pathname === "/sign-up") {
    return null;
  }

  return (
    <>
      <div className="hidden bg-[#F7F7F5] md:flex fixed md:flex-col justify-between w-[250px] h-screen">
        <div className="pt-[6px] p-2 truncate h-10  w-full">
          <div className="hover:bg-[#f0f0ee] pl-2 p-[2px] justify-between rounded-[2px] flex flex-row h-full w-full">
            <div className=" flex flex-row items-center">
              <div className="text-[#777672] bg-[#e1e1df] rounded-[2px] font-medium text-sm w-[18px] h-[18px] flex items-center justify-center">
                P
              </div>
              <div className="ml-4 text-heading">
                <p className="text-sm tracking-wide font-medium">
                  Personal Workspace
                </p>
              </div>
            </div>
            <Button
              className="hover:bg-[#eaeae8] flex items-center justify-center h-full w-6 rounded-[2px] p-0"
              variant={"ghost"}
            >
              <SquarePen color="#37352f" width={14} height={14} className="" />
            </Button>
          </div>
        </div>
        <div className=" w-full h-full overflow-y-scroll pt-0 p-2">
          <div
            onClick={() => router.push("/app")}
            className="hover:bg-[#EFEFED] hover:text-[#5b5955] text-[#91918e] hover:cursor-pointer border-gray-300 rounded-md flex w-full h-10 p-2"
          >
            <House width={20} height={20} />
            <p className="ml-4 text-sm">Home</p>
          </div>
          {/* <User /> */}

          <Docuements sideNav={true} />
        </div>
        {/* <NewDocument /> */}
      </div>
      <MobileNav />
    </>
  );
}
