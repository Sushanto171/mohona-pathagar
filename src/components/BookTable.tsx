import type { Book } from "@/types/bookTypes";
import { PencilIcon } from "lucide-react";
import { Link } from "react-router";
import { Button } from "./ui/button";

const dummyBooks: Book[] = [
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    genre: "BIOGRAPHY",
    isbn: "978-0132350884",
    copies: 5,
    available: true,
    description: "",
    _id: "s",
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    genre: "FANTASY",
    isbn: "978-0735211292",
    copies: 0,
    available: false,
    description: "",
    _id: "s",
  },
];

const BookTable = () => {
  return (
    <div className="overflow-x-auto rounded-md shadow">
      <table className="min-w-full bg-white dark:bg-muted border border-gray-200 dark:border-gray-700">
        <thead className="bg-gray-100 dark:bg-gray-800">
          <tr>
            <th className="px-4 py-2 text-left">Title</th>
            <th className="px-4 py-2 text-left">Author</th>
            <th className="px-4 py-2 text-left">Genre</th>
            <th className="px-4 py-2 text-left">ISBN</th>
            <th className="px-4 py-2 text-center">Copies</th>
            <th className="px-4 py-2 text-center">Availability</th>
            <th className="px-4 py-2 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {dummyBooks.map((book) => (
            <tr key={book._id} className="border-t dark:border-gray-700">
              <td className="px-4 py-2">{book.title}</td>
              <td className="px-4 py-2">{book.author}</td>
              <td className="px-4 py-2">{book.genre}</td>
              <td className="px-4 py-2">{book.isbn}</td>
              <td className="px-4 py-2 text-center">{book.copies}</td>
              <td className="px-4 py-2 text-center">
                {book.available ? (
                  <span className="text-green-600">Available</span>
                ) : (
                  <span className="text-red-500">Unavailable</span>
                )}
              </td>
              <td className="px-4 py-2 text-center space-x-2">
                <Link to={`/edit-book/${book._id}`}>
                  <Button>
                    <PencilIcon />
                  </Button>
                </Link>
                <Link to={`/delete-book/${book._id}`}>
                  <Button>Delete</Button>
                </Link>
                <Link to={`/borrow/${book._id}`}>
                  <Button disabled={!book.available} variant="default">
                    Borrow
                  </Button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookTable;
