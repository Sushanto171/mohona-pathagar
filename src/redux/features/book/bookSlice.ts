import type { RootSate } from "@/main";
import type { Book } from "@/types/bookTypes";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type UpdateBook = Book;
type DeleteBook = { _id: string };
type GetBook = DeleteBook;

interface InitialState {
  updateBook: UpdateBook;
  deleteBook: DeleteBook;
  getBook: GetBook;
}

const initialState: InitialState = {
  updateBook: {
    _id: "",
    author: "",
    available: true,
    copies: 1,
    description: "",
    genre: "SCIENCE",
    isbn: "",
    title: "",
  },
  deleteBook: {
    _id: "",
  },
  getBook: {
    _id: "",
  },
};

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    updateBook: (state, action: PayloadAction<UpdateBook>) => {
      state.updateBook = action.payload;
    },
    deleteBook: (state, action: PayloadAction<DeleteBook>) => {
      state.deleteBook = action.payload;
    },
    getBook: (state, action: PayloadAction<GetBook>) => {
      state.getBook = action.payload;
    },
  },
});

export const { deleteBook, updateBook, getBook } = bookSlice.actions;
export const updateBookSelector = (state: RootSate) => state.book.updateBook;
export const deleteBookSelector = (state: RootSate) => state.book.deleteBook;
export const getBookSelector = (state: RootSate) => state.book.getBook;
