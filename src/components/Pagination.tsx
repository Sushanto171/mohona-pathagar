import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import {
  ChevronFirst,
  ChevronLast,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useEffect } from "react";
import { Button } from "./ui/button";

type IProps = {
  page: number;
  onPage: (page: number) => void;
  totalBook: number,
  showData: number
};

export function PaginationB({ page, onPage,  totalBook, showData }: IProps) {
  const totalPage = Math.ceil(totalBook / showData);
  const pages = Array.from({ length: totalPage }, (_, i) => i + 1);

  const goToFirst = () => onPage(1);
  const goToLast = () => onPage(totalPage);
  const goToPrev = () => onPage(page > 1 ? page - 1 : 1);
  const goToNext = () => onPage(page < totalPage ? page + 1 : totalPage);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }, [page]);
  return (
    <Pagination className="mt-4">
      <PaginationContent>
        <PaginationItem>
          <Button
            size="icon"
            variant="ghost"
            onClick={goToFirst}
            disabled={page === 1}
          >
            <ChevronFirst size={16} />
          </Button>
        </PaginationItem>

        <PaginationItem>
          <Button
            size="icon"
            variant="ghost"
            onClick={goToPrev}
            disabled={page === 1}
          >
            <ChevronLeft size={16} />
          </Button>
        </PaginationItem>

        {pages
          .filter((p) => Math.abs(page - p) <= 1)
          .map((p) => (
            <PaginationItem key={p}>
              <PaginationLink isActive={page === p} onClick={() => onPage(p)}>
                {p}
              </PaginationLink>
            </PaginationItem>
          ))}

        {page < totalPage - 1 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        <PaginationItem>
          <Button
            size="icon"
            variant="ghost"
            onClick={goToNext}
            disabled={page === totalPage}
          >
            <ChevronRight size={16} />
          </Button>
        </PaginationItem>

        <PaginationItem>
          <Button
            size="icon"
            variant="ghost"
            onClick={goToLast}
            disabled={page === totalPage}
          >
            <ChevronLast size={16} />
          </Button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
