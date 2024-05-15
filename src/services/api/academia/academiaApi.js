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
      query: (deptId) => `department?id=${deptId}`,
    }),
    getAllDepartments: builder.query({
      query: () => "/departments",
      onError: (error) => {
        console.error("Error fetching departments:", error);
      },
    }),
    getAllIndustries: builder.query({
      query: () => "/industries",
      onError: (error) => {
        console.error("Error fetching industries:", error);
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
      query: (sectionId) => `section?id=${sectionId}`,
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
      query: (occId) => `streams?id=${occId}`,
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
    //!level api
    getLevel: builder.query({
      query: (classId) => `classes?id=${classId}`,
    }),
    getAllLevels: builder.query({
      query: () => "/classes",
      onError: (error) => {
        console.error("Error fetching Levels:", error);
      },
    }),

    addLevel: builder.mutation({
      query: (data) => ({
        url: "/classes",
        method: "POST",
        body: data,
      }),
      onError: (error) => {
        console.error("Error adding Levels:", error);
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
  //! level
  useGetAllLevelsQuery,
  useGetLevelQuery,
  useAddLevelMutation,
  //!industries 
  useGetAllIndustriesQuery
} = academiaApi;
