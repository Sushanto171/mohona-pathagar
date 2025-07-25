import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useUpdateBookMutation } from "@/redux/api/book/bookApi";
import { updateBookSelector } from "@/redux/features/book/bookSlice";
import { useAppSelector } from "@/redux/hooks";
import { getErrorMessage, toastMessage } from "@/utils/helper";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";

const formSchema = z.object({
  _id: z.string(),
  title: z
    .string()
    .min(1, { message: "Title is required and cannot be empty" }),
  author: z
    .string()
    .min(1, { message: "Author is required and cannot be empty" }),
  available: z.boolean(),
  genre: z
    .enum(
      ["FICTION", "NON_FICTION", "SCIENCE", "HISTORY", "BIOGRAPHY", "FANTASY"],
      { message: "Genre is required" }
    )
    .nullable()
    .refine((value) => value !== null, { message: "Genre is required" }),
  isbn: z.string().min(1, { message: "ISBN is required and cannot be empty" }),
  description: z.string().optional(),
  copies: z.number().min(0, { message: "Copies must be at least 1" }),
});

export function UpdateBookModal() {
  const book = useAppSelector(updateBookSelector);
  const [updateBook, { isLoading }] = useUpdateBookMutation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      _id: book._id,
      title: book.title,
      author: book.author,
      genre: book.genre,
      isbn: book.isbn,
      available: book.available,
      copies: book.copies,
      description: book.description,
    },
  });

  const onSubmitHandler = async (data: z.infer<typeof formSchema>) => {
    try {
      const res = await updateBook(data).unwrap();
      toastMessage("success", res.message);
      if (open) return navigate("/");

      form.reset();
    } catch (error) {
      const err = getErrorMessage(error);
      toastMessage(err === "DuplicateKey" ? "warn" : "error", err);
    }
  };

  const handleModal = () => {
    setOpen(!open);
    if (open) return navigate("/");
  };

  return (
    <Dialog open={open} onOpenChange={handleModal}>
      <DialogContent className="sm:max-w-[425px] overflow-auto h-[90%]">
        <DialogHeader>
          <DialogTitle>Update Book</DialogTitle>
          <DialogDescription>
            Fill the form to update the book.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmitHandler)}
            className="space-y-4"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter book title" {...field} />
                  </FormControl>
                  <FormMessage className="text-red-500 text-xs" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="author"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Author</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter author's name" {...field} />
                  </FormControl>
                  <FormMessage className="text-red-500 text-xs" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="isbn"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ISBN</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter ISBN" {...field} />
                  </FormControl>
                  <FormMessage className="text-red-500 text-xs" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Description here..."
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-500 text-xs" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="copies"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Copies</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter number of copies"
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage className="text-red-500 text-xs" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="genre"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Genre</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value !== null ? field.value : ""}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a genre" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-muted">
                      <SelectGroup>
                        <SelectLabel>Select a genre</SelectLabel>
                        <SelectItem value="FICTION">Fiction</SelectItem>
                        <SelectItem value="NON_FICTION">Non-Fiction</SelectItem>
                        <SelectItem value="SCIENCE">Science</SelectItem>
                        <SelectItem value="HISTORY">History</SelectItem>
                        <SelectItem value="BIOGRAPHY">Biography</SelectItem>
                        <SelectItem value="FANTASY">Fantasy</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <FormMessage className="text-red-500 text-xs" />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full mt-4">
              Update Book {isLoading ? "..." : ""}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
