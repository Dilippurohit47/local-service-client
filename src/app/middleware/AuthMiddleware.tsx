"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/lib/hooks";

const AuthMiddleware = ({ children }) => {
  const val = useAppSelector((state) => state.userReducer);
  const token = val.userToken;
  const router = useRouter();

  useEffect(() => {
    if (token) {
      router.push("/");
    }
  }, [token, router]);

  if (token) {
    return null;
  }

  return <>{children}</>;
};

export default AuthMiddleware;
