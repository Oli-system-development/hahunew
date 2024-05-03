import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const traineeApi = createApi({
  reducerPath: "traineeApi",
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
    getTrainee: builder.query({
      query: (userId) => `auth/students?id=${userId}`,
    }),
    getAllTrainee: builder.query({
      query: () => "/auth/students",
      onError: (error) => {
        console.error("Error fetching students:", error);
      },
    }),
    //tag provide
    // invalidate
    addTrainee: builder.mutation({
      query: (data) => ({
        url: "/auth/trainee",
        method: "POST",
        body: data,
      }),
      onError: (error) => {
        console.error("Error adding announcement:", error);
      },
    }),
  }),
});

export const {
  useGetAllTraineeQuery,
  useAddTraineeMutation,
  useGetTraineeQuery,
} = traineeApi;
