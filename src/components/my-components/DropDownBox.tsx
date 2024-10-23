import { Separator } from "@radix-ui/react-separator";
import Link from "next/link";
import React from "react";

const DropDownBox = () => {


  return (
    <div className="absolute top-10 right-6 rounded-lg px-1 py-2 bg-[#09090B] text-white  w-36">
      <div className="flex flex-col mb-2 text-[1.1rem] ">
        <Link
          href="/profile"
          className="hover:bg-gray-500 px-1 transition-all ease-out duration-300 rounded-md"
        >
          Profile
        </Link>
        <Link
          href="/profile"
          className="hover:bg-gray-500 px-1 transition-all ease-out duration-300 rounded-md"
        >
          Setting
        </Link>
      </div>
      <Separator className="h-[1px] bg-gray-400" orientation="horizontal" />
      <div className="cursor-pointer hover:bg-red-500 px-1 mt-1 transition-all ease-out duration-300 rounded-md" >
        Logout
      </div>
    </div>
  );
};

export default DropDownBox;
