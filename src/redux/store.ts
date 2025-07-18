import { configureStore } from "@reduxjs/toolkit";
import { bookSlice } from "./features/book/bookSlice";
import { borrowSlice } from "./features/borrow/borrowSlice";

export const store = configureStore({
  reducer: {
    book: bookSlice.reducer,
    borrow: borrowSlice.reducer,
  },
});
