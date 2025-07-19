import type { BorrowSummary } from "@/types/borrowTypes";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const borrowApi = createApi({
  reducerPath: "borrowApi",
  tagTypes: ["Borrow"],
  baseQuery: fetchBaseQuery({
    // baseUrl: "https://mohona-pathagar-server.vercel.app/api",
    baseUrl: "http://localhost:5000/api",
  }),
  endpoints: (builder) => ({
    getBorrow: builder.query({
      query: () => "/borrow",
      transformResponse: (res: { data: BorrowSummary[] }) => res.data,
    }),
    createBorrow: builder.mutation({
      query: (body ) => ({
        url: "/borrow",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Borrow"],
    }),
  }),
});

export const { useGetBorrowQuery, useCreateBorrowMutation } = borrowApi;
