import type { RootSate } from "@/main";
import type { Book } from "@/types/bookTypes";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type UpdateBook = Book;
type DeleteBook = { _id: string };

interface InitialState {
  updateBook: UpdateBook;
  deleteBook: DeleteBook;
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
  },
});

export const { deleteBook, updateBook } = bookSlice.actions;
export const updateBookSelector = (state: RootSate) => state.book.updateBook;
export const deleteBookSelector = (state: RootSate) => state.book.deleteBook;
