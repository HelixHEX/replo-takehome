"use client";

import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Landing = () => {
	const router = useRouter();

	const [scrollY, setScrollY] = useState(0);

	useEffect(() => {
		const onScroll = () => {
			console.log(window.scrollY);
			setScrollY(window.scrollY);
		};

		onScroll();

		window.addEventListener("scroll", onScroll);

		return () => {
			window.removeEventListener("scroll", onScroll);
		};
	}, []);
	return (
		<>
			<Navbar scrollTop={scrollY} />
			<div
				className={
					"overflow-y-scroll pb-[400px] flex min-h-screen flex-col items-center px-4"
				}
			>
				<div className="mt-[120px] md:mt-[140px] font-semibold flex flex-row">
					<p className="text-landingHeading text-center text-5xl">
						Write, plan, organize, play{" "}
					</p>
				</div>
				<p className="text-landingHeading text-2xl mt-4 text-center font-medium md:w-[380px]">
					{"Turn ideas into action with Notion's AI-powered workspace."}
				</p>
				<div className="flex tracking-wide w-auto  p-2 justify-between flex-col sm:flex-row mt-4 ">
					<Button
						onClick={() => router.push("/sign-in")}
						className="self-center sm:self-start sm:mr-2 hover:bg-[#045ac4] bg-[#0881f2] w-36 text-md h-10"
					>
						Get Notion free
					</Button>
					<Button
						onClick={() => router.push("/sign-in")}
						variant="ghost"
						className="hover:bg-[#eaf2ff] mt-2 sm:mt-0 text-md hover:text-blue-400 text-blue-400 w-38 h-10"
					>
						Request a demo{" "}
						<ArrowRight width={20} height={20} className="ml-2" />
					</Button>
				</div>
				<video
					className="mt-4"
					width={800}
					height={480}
					muted
					autoPlay
					src="https://notion.so/front-static/pages/product/screen-v2.mp4"
				/>
			</div>
		</>
	);
};

export default Landing;
