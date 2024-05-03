import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ucsApi = createApi({
  reducerPath: "ucsApi",
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
    getCourse: builder.query({
      query: (userId) => `auth/courses?id=${userId}`,
    }),
    getAllCourses: builder.query({
      query: () => "/courses",
      onError: (error) => {
        console.error("Error fetching students:", error);
      },
    }),
    //tag provide
    // invalidate
    addCourses: builder.mutation({
      query: (data) => ({
        url: "/courses",
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
  useGetAllCoursesQuery,
  useGetCourseQuery,
  useAddCoursesMutation,
} = ucsApi;
