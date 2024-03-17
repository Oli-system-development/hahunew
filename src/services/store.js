"use client";
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import {authApi} from "./api/authApi";
export const store = configureStore({
  reducer: {
    user: authReducer,
    [authApi.reducerPath]: authApi.reducer,

  },
});
