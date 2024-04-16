import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://157.245.137.76:5005/auth", prepareHeaders: (headers, { getState }) => {
      headers.set("Authorization", `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE3NDM0MjQ5MzYsImlkIjoiVEZBMDAwMTIwMjIifQ.IQ7nJF-3plYFqEx1NlC46HgYmr9CuT49ANiG41fHxs4`)
      return headers;
  }}),
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => "/students",
      
      // {

      // return {
      //   url: "/user/getUser",
      //   method: "get",
      //   body,
      // };
      // },
    }),
    signUser: builder.mutation({
      query: (body) => {
        return {
          url: "/register",
          method: "post",
          body,
        };
      },
    }),
    signUpUser: builder.mutation({
      query: (userData) => {
        return {
          url: "/register/student",
          method: "post",
          body: userData,
        };
      },
    }),
  }),
});

  // reducerPath: "authApi",
  // baseQuery: fetchBaseQuery({ 
  //   baseUrl: "http://157.245.137.76:5005/auth/",
  //   prepareHeaders: (headers, { getState }) => {
  //       headers.set('Authorization', `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE3NDM0MjQ5MzYsImlkIjoiVEZBMDAwMTIwMjIifQ.IQ7nJF-3plYFqEx1NlC46HgYmr9CuT49ANiG41fHxs4`);
      
  //     return headers;
  //   },
  // }),
export const {
  useSignUserMutation,
  useSignUpUserMutation,
  useGetUserQuery

} = authApi;