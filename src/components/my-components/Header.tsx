"use client";
import React from "react";
import { IoMoonOutline } from "react-icons/io5";
import { useSidebar } from "@/components/ui/sidebar";
import { Separator } from "@radix-ui/react-separator";
import { CgProfile } from "react-icons/cg";
import { IoIosNotificationsOutline } from "react-icons/io";
const Header = () => {
  const { open } = useSidebar();
  return (
    <nav
      className={`bg-[#FAFAFA] fixed   top-0 right-0  flex justify-between items-center border-b border-opacity-50 pr-10 pl-5 py-2 transition-all duration-200 ${
        open ? "w-[calc(100%-220px)]" : "w-[89.1rem]  "
      }`}
      style={{ transition: "width 0.2s ease" }}
    >
      <h2 className="text-black font-normal">Serviceman</h2>

      <div className="flex gap-4 items-center  ">
        <div className="flex items-center gap-4  ">
          <IoMoonOutline size={22} className="cursor-pointer" />
          <div className="relative">
            <IoIosNotificationsOutline size={22} className="cursor-pointer " />
            <span className="bg-red-500 h-4 w-4   -top-1 -right-1 text-[10px] text-center text-white rounded-full  absolute">
              4
            </span>
          </div>
        </div>
        <Separator className="h-6 w-[1px] bg-gray-400" orientation="vertical" />
        <div className="flex gap-3 items-center">
          <CgProfile size={22} />
          <span className="text-[1rem] font-normal"> Dilip</span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
