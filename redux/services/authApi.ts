import { LoginGatewayPorps } from "@/components/@types/authapi";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "queryApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.APIENDPOINT }),
  tagTypes: ["booking"],
  endpoints: (builder) => ({
    // login
    loginGateWay: builder.mutation({
      query: ({ email, password }: LoginGatewayPorps) => ({
        url: "/login",
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }),
    }),

    // Verify Token
    verifyUserToken: builder.query({
      query: ({ token }: { token: string }) => ({
        url: `/verifyUser?token=${token}`,
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});

export const { useLoginGateWayMutation, useLazyVerifyUserTokenQuery } = authApi;
