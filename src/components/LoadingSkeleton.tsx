type TitleType =
  | "Book Title"
  | "ISBN"
  | "Total Borrowed"
  | "Borrower Name"
  | "Title"
  | "Author"
  | "Genre"
  | "Copies"
  | "Availability"
  | "Actions";

type IProps = {
  title: TitleType[];
  numberOfRow: number;
};
const LoadingSkeleton = ({ title, numberOfRow }: IProps) => {
  const SkeletonRow = () => (
    <tr className="animate-pulse border-t dark:border-gray-700">
      {title.map((_, i) => (
        <td key={i} className="px-4 py-5">
          <div className="h-4 bg-gray-300 rounded dark:bg-gray-600"></div>
        </td>
      ))}
    </tr>
  );
  return (
    <>
      <div className="overflow-x-auto rounded-md shadow">
        <table className="min-w-full bg-white dark:bg-muted border border-gray-200 dark:border-gray-700">
          <thead className="bg-gray-100 dark:bg-gray-800">
            <tr className={""}>
              {title.map((item, i) => (
                <th key={i} className="px-4 py-2 text-center">
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[...Array(numberOfRow)].map((_, i) => (
              <SkeletonRow key={i} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default LoadingSkeleton;
