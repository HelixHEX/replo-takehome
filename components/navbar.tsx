"use client";
import { useScrollTop } from "@/lib/utils";
import { Button } from "./ui/button";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Logo from "./logo";
import Menu from "./menu";

export default function Navbar({ scrollTop }: { scrollTop: number }) {
	const router = useRouter();

	return (
		<div className="w-full  h-[79px] fixed top-0 border-t-4 border-white p-4 pt-0 pb-0">
			<div className=" w-full h-full p-[13px] pt-0 px-4">
				<div
					className={` bg-[#FCFCFC] flex h-full  ${
						scrollTop > 0 ? "border-b-[0.1px] border-[#ccc]" : ""
					} justify-between items-center`}
				>
					<div className="flex flex-row justify-between  h-full">
						<Logo />
						{/* <Menu /> */}
					</div>
					{/* <h1 className="text-lg font-semibold text-landingHeadin">Notion</h1> */}
					<div className="">
						<SignedIn>
							<UserButton afterSignOutUrl="/" />
						</SignedIn>
						<SignedOut>
							<Button
								onClick={() => router.push("/sign-in?redirect_url=/app")}
								className="hover:bg-[#f6f6f6] h-[30px] mr-2 hover:text-[#202020] text-[#202020]"
								variant="ghost"
							>
								<p className="tracking-wide font-medium">Log in</p>
							</Button>
							<Button
								onClick={() => router.push("/sign-up?redirect_url=/app")}
								className="bg-[#121212] hover:bg-[#333333]  w-32 p-0 h-[30px]  rounded-sm"
							>
								<p className="tracking-wide font-normal">Get Notion free</p>
							</Button>
						</SignedOut>
					</div>
				</div>
			</div>
		</div>
	);
}
