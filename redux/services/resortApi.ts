import {
  BookingResortProps,
  CancelledBookigResortProps,
} from "@/components/@types/resortapi";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const resortApi = createApi({
  reducerPath: "resortApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.APIENDPOINT }),
  tagTypes: ["allResorts", "booking", "totalDay"],
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

    // Get Rooms by resorts
    getRoomsByResorts: builder.query({
      query: ({
        token,
        id,
        end,
        start,
      }: {
        token: string;
        id: string;
        start: string;
        end: string;
      }) => ({
        url: `/getRoomsByResort/${id}?start=${start}&end=${end}`,
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }),
    }),

    // Get Remaining Day
    getRemainingDay: builder.query({
      query: ({ token }: { token: string }) => ({
        url: `/getRemainingDays`,
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["totalDay"],
    }),

    // Book resort
    bookResortRoom: builder.mutation({
      query: ({ bookings, resortId, token }: BookingResortProps) => ({
        url: `/booking`,
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ resortId, bookings }),
      }),
      invalidatesTags: ["booking", "totalDay"],
    }),

    // Cancel booked Resort
    cancelledBookedResort: builder.mutation({
      query: ({ bookingId, token }: CancelledBookigResortProps) => ({
        url: `/cancelBooking`,
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ bookingId }),
      }),
      invalidatesTags: ["booking"],
    }),

    // get all bookings
    getAllBookings: builder.query({
      query: ({ token }: { token: string }) => ({
        url: `/getBookingList`,
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["booking"],
    }),

    // get Single Booking by id
    getSingleBookingById: builder.query({
      query: ({ id, token }: { id: string; token: string }) => ({
        url: `/getBooking/${id}`,
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

export const {
  useGetAllResortsQuery,
  useLazyGetSingleResortQuery,
  useLazyGetRoomsByResortsQuery,
  useBookResortRoomMutation,
  useGetAllBookingsQuery,
  useGetSingleBookingByIdQuery,
  useCancelledBookedResortMutation,
  useGetRemainingDayQuery,
} = resortApi;
