import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const announcementApi = createApi({
  reducerPath: "announcementApi",
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
    getAnnouncement: builder.query({
      query: () => "/announcements",
      onError: (error) => {
        console.error("Error fetching announcements:", error);
      },
    }),
    addAnnouncement: builder.mutation({
      query: (data) => ({
        url: "/announcements",
        method: "POST",
        body: data,
      }),
      onError: (error) => {
        console.error("Error adding announcement:", error);
      },
    }),
  }),
});

export const { useAddAnnouncementMutation, useGetAnnouncementQuery } =
  announcementApi;
