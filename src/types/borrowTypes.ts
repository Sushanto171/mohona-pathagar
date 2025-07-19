type IBook = {
  title: string;
  isbn: string;
};
export interface BorrowSummary {
  totalQuantity: number;
  book: IBook;
  _id: string
}

export interface BorrowInput {
  _id: string;
  title: string;
}
