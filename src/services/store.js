"use client";
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import { authApi } from "./api/authApi";
import { announcementApi } from "./api/announcementApi";
import { traineeApi } from "./api/traineeApi";
import { ucsApi } from "./api/ucs/ucsApi";
import { academiaApi } from "./api/academia/academiaApi";
export const store = configureStore({
  reducer: {
    user: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    [announcementApi.reducerPath]: announcementApi.reducer,
    [traineeApi.reducerPath]: traineeApi.reducer,
    [ucsApi.reducerPath]: ucsApi.reducer,
    [academiaApi.reducerPath]: academiaApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      announcementApi.middleware,
      traineeApi.middleware,
      ucsApi.middleware,
      academiaApi.middleware
    ),
});
