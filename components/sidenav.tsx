"use client";
import Docuements from "@/app/data";
import { Button } from "./ui/button";
import NewDocument from "./newDocument";
import User from "./user";
import MobileNav from "./mobileNav";
import { usePathname, useRouter } from "next/navigation";
import { ChevronDown, ChevronsLeft, House, SquarePen } from "lucide-react";
import { Avatar } from "./ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { useState } from "react";

export default function Sidenav() {
  const [menuHover, setMenuHover] = useState<boolean>(false);
  const pathname = usePathname();
  const router = useRouter();
  if (pathname === "/sign-in" || pathname === "/sign-up") {
    return null;
  }

  return (
    <>
      <div
        onMouseEnter={() => setMenuHover(true)}
        onMouseLeave={() => setMenuHover(false)}
        className="hidden bg-[#F7F7F5] border-r-[1px] border-[#f2f2f0] md:flex fixed md:flex-col justify-between w-[240px] h-screen"
      >
        <div className="pt-[6px] p-2 truncate  w-full">
          <div className="hover:bg-[#f0f0ee] hover:cursor-pointer h-8 p-[2px] justify-between rounded-[6px] flex flex-row w-full">
            <div className="ml-[6px] flex flex-row items-center">
              <div className="text-[#777672] bg-[#e1e1df] rounded-[4px] font-medium text-sm w-[20px] h-[20px] flex items-center justify-center">
                P
              </div>
              <p className="w-24 text-heading ml-[10px]  text-sm truncate tracking-wide font-medium">
                Personal Workspace
              </p>

              <ChevronDown
              strokeWidth={1.5}
                className=" ml-[-3px]"
                width={18}
                color="#777672"
                height={18}
              />
            </div>
            <div className="flex">
              {menuHover && (
                <Button
                  variant="ghost"
                  className="mr-1 text-[#777672] hover:text-[#37352f]  hover:bg-[#eaeae8] rounded-[6px] flex items-center justify-center h-full w-[28px]  p-0"
                >
                  <ChevronsLeft  strokeWidth={1.5}  width={24} height={24} />
                </Button>
              )}
              <NewDocument>
                <Button
                  className="hover:bg-[#eaeae8] rounded-[6px] flex items-center justify-center h-full w-[28px]  p-0"
                  variant={"ghost"}
                >
                  <SquarePen
                    color="#37352f"
                    width={18}
                    height={18}
                    className=""
                  />
                </Button>
              </NewDocument>
            </div>
          </div>
        </div>
        <div className=" w-full h-full overflow-y-scroll pt-0 p-2">
          <div
            onClick={() => router.push("/app")}
            className="hover:bg-[#EFEFED] hover:text-[#5b5955] text-[#91918e] hover:cursor-pointer border-gray-300 rounded-md flex w-full h-10 p-2"
          >
            <House width={20} height={20} />
            <p className="ml-[10px] text-sm">Home</p>
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
