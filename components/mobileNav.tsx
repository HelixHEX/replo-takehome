"use client";

import { Button } from "./ui/button";
import {
  Dialog,
  DialogHeader,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { useCreateDocument } from "@/lib/api/mutations";
import { useQueryClient } from "@tanstack/react-query";
import Docuements from "@/app/data";
import { AlignJustify } from "lucide-react";

export default function MobileNav() {
  return (
    <div className="md:hidden ">
      <Dialog>
        <DialogTrigger asChild className="p-4">
          <Button className="mt-4 ml-4"><AlignJustify width={12} height={12} /></Button>
        </DialogTrigger>
        
        <DialogContent className='h-screen'>
          <DialogHeader>
            <DialogTitle>Menu</DialogTitle>
            <Docuements />
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
