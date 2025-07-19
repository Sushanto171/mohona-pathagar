import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useGetBookByIdQuery } from "@/redux/api/book/bookApi";
import { getBookSelector, updateBook } from "@/redux/features/book/bookSlice";
import { createBorrow } from "@/redux/features/borrow/borrowSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Link, useParams } from "react-router";

const BookDetailsPage = () => {
  const { _id } = useAppSelector(getBookSelector);
  const { id } = useParams();
  const { isLoading, data: book } = useGetBookByIdQuery(id || _id);
  const dispatch = useAppDispatch();
  if (isLoading)
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-primary">{book!.title}</CardTitle>
        </CardHeader>
        <Separator />
        <CardContent className="space-y-4">
          <p>
            <span className="font-semibold">Author:</span> {book!.author}
          </p>
          <p>
            <span className="font-semibold">Genre:</span> {book!.genre}
          </p>
          <p>
            <span className="font-semibold">ISBN:</span> {book!.isbn}
          </p>
          <p>
            <span className="font-semibold">Description:</span>{" "}
            {book!.description}
          </p>
          <p>
            <span className="font-semibold">Copies Available:</span>{" "}
            {book!.copies}
          </p>
          <p>
            <span className="font-semibold">Status:</span>{" "}
            {book!.available ? (
              <span className="text-green-600">Available</span>
            ) : (
              <span className="text-red-500">Unavailable</span>
            )}
          </p>

          <div className="flex gap-2 mt-4">
            <Link
              to={book!.available ? `/borrow/${book!._id}` : ""}
              className={
                book!.available ? "cursor-pointer" : "cursor-not-allowed"
              }
            >
              <Button
                onClick={() =>
                  dispatch(createBorrow({ _id: book!._id, title: book!.title }))
                }
                disabled={!book!.available}
                variant="default"
              >
                Borrow
              </Button>
            </Link>
            <Link to={`/edit-book/${book!._id}`}>
              <Button
                onClick={() => dispatch(updateBook(book!))}
                variant="outline"
              >
                Edit
              </Button>
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
