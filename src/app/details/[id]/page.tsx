"use client"
import { useParams } from "next/navigation";
import React from "react";

const page = () => {
  const { id } = useParams();

  return <div className="mt-14 bg-red-500 w-screen h-screen">
    wew
  </div>;
};

export default page;
