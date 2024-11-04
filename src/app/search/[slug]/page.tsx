"use client";
import { useParams } from "next/navigation";
import React from "react";

const page = () => {
  const { slug } = useParams();
  console.log(slug);
  return <div>dddddddddd</div>;
};

export default page;
