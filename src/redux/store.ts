import { configureStore } from "@reduxjs/toolkit";
import { bookApi } from "./api/book/bookApi";
import { borrowApi } from "./api/borrow/borrowApi";
import { bookSlice } from "./features/book/bookSlice";
import { borrowSlice } from "./features/borrow/borrowSlice";

export const store = configureStore({
  reducer: {
    book: bookSlice.reducer,
    borrow: borrowSlice.reducer,
    [bookApi.reducerPath]: bookApi.reducer,
    [borrowApi.reducerPath]: borrowApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(bookApi.middleware)
      .concat(borrowApi.middleware),
});
