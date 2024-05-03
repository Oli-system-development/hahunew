"use client";
import { Provider } from "react-redux";
import { store } from "./store";
import React from "react";
import { useRouter } from "next/navigation";
export default function StoreProviders({ children }) {
  const router = useRouter()
  // const user = localStorage.getItem("userId");
  // if (!user) {
  //   router.push('/auth/login')
  // }
  
  return (
    <Provider store={store} key='3'>
      {children}
    </Provider>
  );
}
