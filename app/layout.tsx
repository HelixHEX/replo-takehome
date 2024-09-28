import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/lib/providers";

export const metadata: Metadata = {
  title: "Notion",
  description: "Just another notion clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Providers>{children}</Providers>;
}
