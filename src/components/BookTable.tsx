import {
  useCountBookNumQuery,
  useGetBooksQuery,
} from "@/redux/api/book/bookApi";
import {
  deleteBook,
  getBook,
  updateBook,
} from "@/redux/features/book/bookSlice";
import { createBorrow } from "@/redux/features/borrow/borrowSlice";
import { useAppDispatch } from "@/redux/hooks";
import type { Book } from "@/types/bookTypes";
import { getErrorMessage, toastMessage } from "@/utils/helper";
import { Eye, PencilIcon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import LoadingSkeleton from "./LoadingSkeleton";
import { PaginationB } from "./Pagination";
import { Button } from "./ui/button";

const BookTable = () => {
  const [page, setPage] = useState(1);
  const {
    data: totalBooks,
    isLoading: isCountLoading,
    isError: isCountError,
    error: countError,
  } = useCountBookNumQuery(undefined, {
    refetchOnMountOrArgChange: true,
    refetchOnFocus: true,
  });
  const dispatch = useAppDispatch();
  const {
    isError,
    isLoading,
    data: books,
    error,
  } = useGetBooksQuery(
    { page },
    {
      refetchOnMountOrArgChange: true,
      refetchOnFocus: true,
    }
  );
  if (isError || isCountError) {
    const err = getErrorMessage(error || countError);
    toastMessage("error", err);
  }
  if (isLoading || isCountLoading)
    return (
      <LoadingSkeleton
        title={[
          "Title",
          "Author",
          "Genre",
          "ISBN",
          "Copies",
          "Availability",
          "Actions",
        ]}
        numberOfRow={10}
      />
    );
  return (
    <>
      <div className="overflow-x-auto rounded-md shadow">
        <table className="min-w-full bg-white dark:bg-muted border border-gray-200 dark:border-gray-700">
          <thead className="bg-gray-100 dark:bg-gray-800">
            <tr>
              <th className="px-4 py-2 text-center border">Title</th>
              <th className="px-4 py-2 text-center border">Author</th>
              <th className="px-4 py-2 text-center border">Genre</th>
              <th className="px-4 py-2 text-center border">ISBN</th>
              <th className="px-4 py-2 text-center border">Copies</th>
              <th className="px-4 py-2 text-center border">Availability</th>
              <th className="px-4 py-2 text-center border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {!isLoading && (books as Book[]).length === 0 && (
              <tr>
                <td colSpan={3} className="text-center py-4">
                  No borrow book available.
                </td>
              </tr>
            )}
            {!isLoading &&
              !isError &&
              (books as Book[]).map((book) => (
                <tr key={book._id} className="border-t dark:border-gray-700">
                  <td className="px-4 py-2  max-w-56 truncate">{book.title}</td>
                  <td className="px-4 py-2 max-w-32 truncate">{book.author}</td>
                  <td className="px-4 py-2 max-w-44">{book.genre}</td>
                  <td className="px-4 py-2 truncate max-w-40">{book.isbn}</td>
                  <td className="px-4 py-2 text-center">{book.copies}</td>
                  <td className="px-4 py-2 text-center">
                    {book.available ? (
                      <span className="text-green-600">Available</span>
                    ) : (
                      <span className="text-red-500">Unavailable</span>
                    )}
                  </td>
                  <td className="px-4 py-2 text-center h-full  space-x-2 flex justify-center items-center">
                    <Link to={`/books/${book._id}`}>
                      <Button
                        onClick={() => dispatch(getBook({ _id: book._id }))}
                        size={"icon"}
                      >
                        <Eye />
                      </Button>
                    </Link>
                    <Link to={`/edit-book/${book._id}`}>
                      <Button
                        size={"icon"}
                        onClick={() => dispatch(updateBook(book))}
                      >
                        <PencilIcon />
                      </Button>
                    </Link>
                    <Link to={`/delete-book/${book._id}`}>
                      <Button
                        onClick={() => dispatch(deleteBook({ _id: book._id }))}
                      >
                        Delete
                      </Button>
                    </Link>
                    <Link
                      to={book.available ? `/borrow/${book._id}` : ""}
                      className={
                        book.available ? "cursor-pointer" : "cursor-not-allowed"
                      }
                    >
                      <Button
                        onClick={() =>
                          dispatch(
                            createBorrow({ _id: book._id, title: book.title })
                          )
                        }
                        disabled={!book.available}
                        variant="default"
                      >
                        Borrow
                      </Button>
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {totalBooks?.count && (
        <PaginationB
          page={page}
          onPage={setPage}
          showData={10}
          totalBook={totalBooks.count}
        />
      )}
    </>
  );
};

export default BookTable;
