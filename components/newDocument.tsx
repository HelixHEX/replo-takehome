"use client";

import { Button } from "./ui/button";
import {
  Dialog,
  DialogHeader,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogClose,
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
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const formSchema = z.object({ title: z.string().min(1).max(255) });

interface Props {
  children?: React.ReactNode;
}
export default function NewDocument({ children }: Props) {
  const queryClient = useQueryClient();
  const { mutate: createDocument, data, status } = useCreateDocument();
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    },
  });

  useEffect(() => {
    if (status === "success" && data) {
      router.push("/app/" + data.id);
    }
  }, [status, router, data]);

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    createDocument(values);
  };

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          {children ? (
            children
          ) : (
            <Button className="w-full ">New Document</Button>
          )}
          {/* <Button className="w-full ">New Document</Button> */}
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>New Document</DialogTitle>
            <Form {...form}>
              <form
                noValidate
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input placeholder="Document title..." {...field} />
                      </FormControl>
                      <FormDescription></FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <DialogClose asChild>
                  <Button type="submit">Create</Button>
                </DialogClose>
              </form>
            </Form>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}
