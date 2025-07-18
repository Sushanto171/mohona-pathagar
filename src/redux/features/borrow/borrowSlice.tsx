import type { RootSate } from "@/main";
import type { BorrowInput } from "@/types/borrowTypes";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  borrowBook: BorrowInput;
}

const initialState: InitialState = {
  borrowBook: {
    _id: "",
    title: "",
  },
};
export const borrowSlice = createSlice({
  name: "borrow",
  initialState,
  reducers: {
    createBorrow: (state, action: PayloadAction<BorrowInput>) => {
      state.borrowBook = action.payload;
    },
  },
});

export const { createBorrow } = borrowSlice.actions;
export const createBorrowSelector = (state: RootSate) =>
  state.borrow.borrowBook;
