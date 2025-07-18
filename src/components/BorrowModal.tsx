import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { createBorrowSelector } from "@/redux/features/borrow/borrowSlice";
import { useAppSelector } from "@/redux/hooks";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { z } from "zod";
import { Calendar } from "./ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

const formSchema = z.object({
  title: z
    .string()
    .min(1, { message: "Title is required and cannot be empty" }),
  quantity: z
    .number()
    .min(1, { message: "Quantity is required and cannot be 0 or empty" }),
  dueDate: z
    .date()
    .nullable()
    .refine((value) => value !== null, { message: "Select valid date" }),
  // z.date({error:issue=> issue.input === undefined? "Required": "Invalid date"}).safeParse(new Date()),
  // .min(1, { message: "Quantity is required and cannot be 0 or empty" }),
  bookId: z.string(),
});

export function BorrowModal() {
  const book = useAppSelector(createBorrowSelector);
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: book.title,
      quantity: 0,
      dueDate: null,
      bookId: book._id,
    },
  });

  const onSubmitHandler = (data: z.infer<typeof formSchema>) => {
    console.log("Submitted Data:", data);

    form.reset();
    setOpen(false);
    navigate("/");
  };

  const handleModal = () => {
    setOpen(!open);
    navigate("/");
  };
  return (
    <Dialog open={open} onOpenChange={handleModal}>
      <DialogContent className="sm:max-w-[425px] overflow-auto">
        <DialogHeader>
          <DialogTitle>Borrow A Book</DialogTitle>
          <DialogDescription>
            Fill the form to add a new borrow.
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
                    <Input disabled placeholder="Enter book title" {...field} />
                  </FormControl>
                  <FormMessage className="text-red-500 text-xs" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="quantity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quantity</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter number of quantity"
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
              name="dueDate"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Date of birth</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            " pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent
                      className="w-auto p-0 bg-muted"
                      align="start"
                    >
                      <Calendar
                        mode="single"
                        selected={field.value ? field.value : undefined}
                        onSelect={field.onChange}
                        disabled={(date) => date < new Date()}
                        captionLayout="dropdown"
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage className="text-red-500 text-xs" />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full mt-4">
              Borrow Book
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
