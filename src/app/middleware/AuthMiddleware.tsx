"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/lib/redux/hooks";
import Loader from "@/components/my-components/Loader";

const AuthMiddleware = ({ children }: { children: React.ReactNode }) => {
  const val = useAppSelector((state) => state.userReducer);
  const token = val?.userToken;
  const router = useRouter();

  if (token) {
    router.push("/");
    return <Loader />;
  }

  return <>{children}</>;
};

export default AuthMiddleware;
