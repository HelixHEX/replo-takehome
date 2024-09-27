"use client";
import Navbar from "@/components/navbar";
import { SignIn } from "@clerk/nextjs";
import { useEffect, useState } from "react";

export default function Page() {
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
			<div className=" w-full h-screen flex items-center justify-center">
				<SignIn />
			</div>
		</>
	);
}
