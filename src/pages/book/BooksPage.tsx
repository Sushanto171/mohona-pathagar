import BookTable from "@/components/BookTable";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link, Outlet } from "react-router";

const BooksPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-primary">All Books</h1>
        <Link to="/create-book">
          <Button>Add Book</Button>
        </Link>
      </div>

      <Separator className="mb-6" />

      <BookTable />
      <Outlet />
    </div>
  );
};

export default BooksPage;
