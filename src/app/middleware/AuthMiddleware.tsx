"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/lib/redux/hooks";
import Loader from "@/components/my-components/Loader";

const AuthMiddleware = ({ children }) => {
  const val = useAppSelector((state) => state.userReducer);
  console.log(val);
  const token = val?.userToken;
  const router = useRouter();

  useEffect(() => {
    if (token) {
      router.push("/");
    }
  }, [token, router]);

  if (token) {
    return <Loader />;
  }

  return <>{children}</>;
};

export default AuthMiddleware;
