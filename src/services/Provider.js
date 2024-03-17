"use client";
import { Provider } from "react-redux";
import { store } from "./store";
import React from "react";

export default function StoreProviders({ children }) {
  return (
    <Provider store={store} key='3'>
      {children}
    </Provider>
  );
}
