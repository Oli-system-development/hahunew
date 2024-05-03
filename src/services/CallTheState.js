"use client";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useGetMeQuery } from "./api/authApi";
import { setUser } from "./authSlice";
import { useRouter } from "next/navigation";

export default function CallTheState({ children }) {
  const router = useRouter();
  const dispatch = useDispatch();
  
  const userId = localStorage.getItem("userId") || null;
  const { data: currentUser } = useGetMeQuery(userId);
  useEffect(() => {
    if (!userId) {
      router.push("/auth/login");
      return;
    }

    const fetchCurrentUser = async () => {
      try {
        if (currentUser) {
          const userData = await currentUser;
          dispatch(setUser(userData));
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchCurrentUser();
  }, [currentUser, dispatch, router, userId]);

  return <div className=''>{children}</div>;
}
