import App from "@/App";
import { AddBookModal } from "@/components/AddBookModal";
import { BookDeleteModal } from "@/components/BookDeleteModal";
import { BorrowModal } from "@/components/BorrowModal";
import { UpdateBookModal } from "@/components/UpdateBookModal";
import BookPage from "@/pages/book/BooksPage";
import BorrowSummaryPage from "@/pages/borrow-summery/BorrowSummaryPage";
import { createBrowserRouter } from "react-router";

export const routes = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "/",
        Component: BookPage,
        children: [
          {
            path: "/delete-book/:id",
            Component: BookDeleteModal,
          },
          {
            path: "/create-book",
            Component: AddBookModal
          },
          {
            path: "/edit-book/:id",
            Component: UpdateBookModal
          },
          {
            path: "/borrow/:bookId",
            Component: BorrowModal
          },
        ],
      },
      {
        path: "/books",
        Component: BookPage,
      },
      {
        path: "/borrow-summary",
        Component: BorrowSummaryPage,
      },
    ],
  },
]);
