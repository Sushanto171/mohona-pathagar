import type { BorrowSummary } from "@/types/borrowTypes";

const dummyBorrowSummary: BorrowSummary[] = [
  {
    id: "1",
    title: "Clean Code",
    isbn: "978-0132350884",
    totalBorrowed: 10,
  },
  {
    id: "2",
    title: "Atomic Habits",
    isbn: "978-0735211292",
    totalBorrowed: 7,
  },
];

const BorrowSummaryTable = () => {
  return (
    <div className="overflow-x-auto rounded-md shadow">
      <table className="min-w-full bg-white dark:bg-muted border border-gray-200 dark:border-gray-700">
        <thead className="bg-gray-100 dark:bg-gray-800">
          <tr>
            <th className="px-4 py-2 text-left">Book Title</th>
            <th className="px-4 py-2 text-left">ISBN</th>
            <th className="px-4 py-2 text-center">Total Borrowed</th>
          </tr>
        </thead>
        <tbody>
          {dummyBorrowSummary.map((summary) => (
            <tr key={summary.id} className="border-t dark:border-gray-700">
              <td className="px-4 py-2">{summary.title}</td>
              <td className="px-4 py-2">{summary.isbn}</td>
              <td className="px-4 py-2 text-center">{summary.totalBorrowed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BorrowSummaryTable;
