export interface BorrowSummary {
  _id: string;
  title: string;
  isbn: string;
  totalBorrowed: number;
}

export interface BorrowInput{
  _id: string,
  title: string,
}