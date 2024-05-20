import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setUser } from "../authSlice";
import { useDispatch, useSelector } from "react-redux";
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://157.245.137.76:5005/",
    prepareHeaders: (headers, { getState }) => {
      headers.set(
        "Authorization",
        `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE3NDM0MjQ5MzYsImlkIjoiVEZBMDAwMTIwMjIifQ.IQ7nJF-3plYFqEx1NlC46HgYmr9CuT49ANiG41fHxs4`
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "auth/users",
    }),
    getMe: builder.query({
      query: (userId) => `users?id=${userId}`,
    }),
    getUsersByRole: builder.query({
      query: (role) => `users?type=${role}`,
    }),
    loginUser: builder.mutation({
      query: (body) => {
        return {
          url: "auth/login",
          method: "post",
          body,
        };
      },
    }),
    loginAdmin: builder.mutation({
      query: (body) => {
        console.warn("from redux api", body);
        return {
          url: "auth/login",
          method: "post",
          body,
        };
      },
    }),
    signUpUser: builder.mutation({
      query: (userData) => {
        return {
          url: "auth/register/student",
          method: "post",
          body: userData,
        };
      },
    }),
    sighUpAdmin: builder.mutation({
      query: (userData) => {
        return {
          url: "auth/login",
          method: "post",
          body: userData,
        };
      },
    }),
    //!role api
    getUsersByType: builder.mutation({
      query: (type) => {
        console.log("hhhhhhhhhhhhhhhhhhhhhhhhhh");
        console.log(`users?type=${type}`);
        return {
          url: `users?type=${type}`,
        };
      },
    }),
  }),
});

export const {
  useSignUpUserMutation,
  useLoginUserMutation,
  useLoginAdminMutation,
  useGetUsersQuery,
  useSighUpAdminMutation,
  useGetMeQuery,
  //!role api
  useGetUsersByRoleQuery,
} = authApi;
