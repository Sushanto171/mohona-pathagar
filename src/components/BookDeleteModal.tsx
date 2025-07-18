import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useDeleteBookMutation } from "@/redux/api/book/bookApi";
import { deleteBookSelector } from "@/redux/features/book/bookSlice";
import { useAppSelector } from "@/redux/hooks";
import { getErrorMessage, toastMessage } from "@/utils/helper";
import { useState } from "react";
import { useNavigate } from "react-router";

export function BookDeleteModal() {
  const book = useAppSelector(deleteBookSelector);
  const [deleteBook, { isLoading }] = useDeleteBookMutation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const deleteHandler = async () => {
    try {
      const res = await deleteBook(book).unwrap();
      toastMessage("success", res.message);
      navigate("/");
      setOpen(false);
    } catch (error) {
      const err = getErrorMessage(error);
      toastMessage("error", err);
    }
    console.log(book);
  };
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-primary">
            Are you absolutely sure?
          </AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => [setOpen(false), navigate("/")]}>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction onClick={() => deleteHandler()}>
            Continue {isLoading ? "..." : ""}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
