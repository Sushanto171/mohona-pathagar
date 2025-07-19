import { useGetBorrowQuery } from "@/redux/api/borrow/borrowApi";
import type { BorrowSummary } from "@/types/borrowTypes";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import LoadingSkeleton from "./LoadingSkeleton";
import { Button } from "./ui/button";

const BorrowSummaryTable = () => {
  const navigate = useNavigate();
  const { isLoading, data: summaries } = useGetBorrowQuery(undefined, {
    refetchOnMountOrArgChange: true,
    refetchOnFocus: true,
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (isLoading) return <LoadingSkeleton title={["Book Title", "ISBN", "Total Borrowed"]}numberOfRow={8} />

  return (
    <>
      <Button
        onClick={() => navigate(-1)}
        className="mb-4"
      >
        ← Back
      </Button>

      <div className="overflow-x-auto rounded-md shadow">
        <table className="min-w-full bg-white dark:bg-muted border border-gray-200 dark:border-gray-700">
          <thead className="bg-gray-100 dark:bg-gray-800">
            <tr className="grid grid-cols-3 justify-between">
              <th className="px-4 py-2 text-center">Book Title</th>
              <th className="px-4 py-2 text-center">ISBN</th>
              <th className="px-4 py-2 text-center">Total Borrowed</th>
            </tr>
          </thead>
          <tbody>
            {!isLoading && (summaries as BorrowSummary[]).length === 0 && (
              <tr>
                <td colSpan={3} className="text-center py-4">
                  No borrow summary available.
                </td>
              </tr>
            )}
            {!isLoading &&
              (summaries as BorrowSummary[]).map((summary, i) => (
                <tr key={i} className="border-t dark:border-gray-700">
                  <td className="px-4 py-2">{summary.book.title}</td>
                  <td className="px-4 py-2">{summary.book.isbn}</td>
                  <td className="px-4 py-2 text-center">
                    {summary.totalQuantity}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default BorrowSummaryTable;
