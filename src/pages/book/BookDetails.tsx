import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Link, useParams } from "react-router";

// Dummy data for preview
const dummyBook = {
  id: "1",
  title: "Clean Code",
  author: "Robert C. Martin",
  genre: "Programming",
  isbn: "978-0132350884",
  description: "A Handbook of Agile Software Craftsmanship.",
  copies: 5,
  available: true,
};

const BookDetailsPage = () => {
  const { id } = useParams(); // can be used to fetch the book by ID
  console.log(id);
  const book = dummyBook; // Replace with fetched data via RTK Query

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-primary">{book.title}</CardTitle>
        </CardHeader>
        <Separator />
        <CardContent className="space-y-4">
          <p>
            <span className="font-semibold">Author:</span> {book.author}
          </p>
          <p>
            <span className="font-semibold">Genre:</span> {book.genre}
          </p>
          <p>
            <span className="font-semibold">ISBN:</span> {book.isbn}
          </p>
          <p>
            <span className="font-semibold">Description:</span>{" "}
            {book.description}
          </p>
          <p>
            <span className="font-semibold">Copies Available:</span>{" "}
            {book.copies}
          </p>
          <p>
            <span className="font-semibold">Status:</span>{" "}
            {book.available ? (
              <span className="text-green-600">Available</span>
            ) : (
              <span className="text-red-500">Unavailable</span>
            )}
          </p>

          <div className="flex gap-2 mt-4">
            <Link to={`/borrow/${book.id}`}>
              <Button variant="default" disabled={!book.available}>
                Borrow
              </Button>
            </Link>
            <Link to={`/edit-book/${book.id}`}>
              <Button variant="outline">Edit</Button>
            </Link>
            <Link to="/books">
              <Button variant="secondary">Back to List</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BookDetailsPage;
