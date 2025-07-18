import App from "@/App";
import BookPage from "@/pages/book/BooksPage";
import BorrowSummaryPage from "@/pages/borrow-summery/BorrowSummaryPage";
import { createBrowserRouter } from "react-router";

export const routes = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: BookPage,
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
