import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const academiaApi = createApi({
  reducerPath: "academiaApi",
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
    getDepartment: builder.query({
      query: (userId) => `department?id=${userId}`,
    }),
    getAllDepartments: builder.query({
      query: () => "/departments",
      onError: (error) => {
        console.error("Error fetching departments:", error);
      },
    }),
//
    addDepartment: builder.mutation({
      query: (data) => ({
        url: "/departments",
        method: "POST",
        body: data,
      }),
      onError: (error) => {
        console.error("Error adding departments:", error);
      },
    }),
    //!section api
    getSection: builder.query({
      query: (userId) => `section?id=${userId}`,
    }),
    getAllSections: builder.query({
      query: () => "/sections",
      onError: (error) => {
        console.error("Error fetching sections:", error);
      },
    }),

    addSection: builder.mutation({
      query: (data) => ({
        url: "/sections",
        method: "POST",
        body: data,
      }),
      onError: (error) => {
        console.error("Error adding sections:", error);
      },
    }),
    //!occupation api
    getOccupation: builder.query({
      query: (userId) => `streams?id=${userId}`,
    }),
    getAllOccupations: builder.query({
      query: () => "/streams",
      onError: (error) => {
        console.error("Error fetching Occupations:", error);
      },
    }),

    addOccupation: builder.mutation({
      query: (data) => ({
        url: "/streams",
        method: "POST",
        body: data,
      }),
      onError: (error) => {
        console.error("Error adding Occupations:", error);
      },
    }),
  }),
});

export const {
  useAddDepartmentMutation,
  useGetAllDepartmentsQuery,
  useGetDepartmentQuery,
  //!section
  useAddSectionMutation,
  useGetAllSectionsQuery,
  useGetSectionQuery,
  //! occupation
  useGetAllOccupationsQuery,
  useGetOccupationQuery,
  useAddOccupationMutation,
} = academiaApi;
