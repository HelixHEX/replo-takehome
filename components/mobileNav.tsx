"use client";

import { Button } from "./ui/button";
import {
  Dialog,
  DialogHeader,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

import Docuements from "@/app/data";
import { AlignJustify } from "lucide-react";

export default function MobileNav() {
  return (
    <div className="md:hidden ">
      <Dialog>
        <DialogTrigger asChild className="p-4">
          <Button className="mt-4 ml-4 p-3">
            <AlignJustify width={18} height={18} />
          </Button>
        </DialogTrigger>

        <DialogContent className="h-screen">
          <DialogHeader>
            <DialogTitle>Menu</DialogTitle>
            <Docuements />
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
