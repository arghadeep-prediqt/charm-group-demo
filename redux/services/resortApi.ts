import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const resortApi = createApi({
  reducerPath: "resortApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.APIENDPOINT }),
  tagTypes: ["allResorts"],
  endpoints: (builder) => ({
    // Get all Resort
    getAllResorts: builder.query({
      query: ({ token }: { token: string }) => ({
        url: `/allResorts`,
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["allResorts"],
    }),

    // Get Single Resort
    getSingleResort: builder.query({
      query: ({ token, id }: { token: string; id: string }) => ({
        url: `/getResortById/${id}`,
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});

export const { useGetAllResortsQuery, useGetSingleResortQuery } = resortApi;
