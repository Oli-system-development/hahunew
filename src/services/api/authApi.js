import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:9000" }),
  endpoints: (builder) => ({
    signinUser: builder.mutation({
      query: (body) => {
        return {
          url: "/user/signin",
          method: "post",
          body,
        };
      },
    }),
    signupUser: builder.mutation({
      query: (body) => {
        return {
          url: "/user/signup",
          method: "post",
          body,
        };
      },
    }),
    
  }),
});


export const {
  useSigninUserMutation,
  useSignupUserMutation,

} = authApi;