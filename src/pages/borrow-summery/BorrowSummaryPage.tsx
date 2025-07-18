import BorrowSummaryTable from "@/components/BorrowSummaryTable";
import { Separator } from "@/components/ui/separator";

const BorrowSummaryPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-primary mb-4">Borrow Summary</h1>
      <Separator className="mb-6" />

      <BorrowSummaryTable />
    </div>
  );
};

export default BorrowSummaryPage;
