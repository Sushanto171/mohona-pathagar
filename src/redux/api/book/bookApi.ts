import type { Book } from "@/types/bookTypes";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bookApi = createApi({
  reducerPath: "bookApi",
  tagTypes: ["Post", "Book"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://mohona-pathagar-server.vercel.app/api",
    // baseUrl: "http://localhost:5000/api",
  }),
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: ({ page }) => `/books?page=${page}`,
      transformResponse: (response: { data: Book[] }) => response.data,
      transformErrorResponse: (response: { status: string | number }) =>
        response.status,
      providesTags: (result) =>
        result
          ? result.map((book) => ({ type: "Book", id: book._id }))
          : [{ type: "Book", id: "" }],
    }),
    countBookNum: builder.query({
      query: () => "/books/countBook",
    }),
    updateBook: builder.mutation({
      query: ({ _id, ...book }) => ({
        url: `/books/${_id}`,
        method: "PUT",
        body: book,
      }),
      invalidatesTags: (_result, _error, { _id }) => [
        { type: "Book", id: _id },
      ],
    }),
    createBook: builder.mutation({
      query: ({ ...book }) => ({
        url: "/books",
        method: "POST",
        body: book,
      }),
      invalidatesTags: ["Book"],
    }),
    deleteBook: builder.mutation({
      query: ({ _id }) => ({
        url: `/books/${_id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Book"],
    }),
    getBookById: builder.query({
      query: (id) => ({
        url: `/books/${id}`,
      }),
      transformResponse: (res: { data: Book }) => res.data,
    }),
  }),
});

export const {
  useGetBooksQuery,
  useUpdateBookMutation,
  useCreateBookMutation,
  useDeleteBookMutation,
  useGetBookByIdQuery,
  useCountBookNumQuery,
} = bookApi;
