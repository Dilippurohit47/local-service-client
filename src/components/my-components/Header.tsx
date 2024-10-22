"use client";
import { useSidebar } from "@/components/ui/sidebar";
import { Separator } from "@radix-ui/react-separator";
import { Settings } from "lucide-react";
import { CgProfile } from "react-icons/cg";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoMoonOutline } from "react-icons/io5";
import { MdOutlineMenu } from "react-icons/md";
import SearchBar from "./SearchBar";
const Header = () => {
  const { open, toggleSidebar } = useSidebar();
  return (
    <nav
      className={`bg-[#FAFAFA]  fixed top-0 right-0  overflow-hidden flex md:justify-between items-center border-b border-opacity-50 md:pr-10 md:pl-5 px-2  py-2 transition-all duration-200 ${
        open ? "w-full  lg:w-[calc(100%-180px)]" : "w-full lg:w-[92.1rem]  "
      }`}
    >




      <div className="flex gap-5   items-center ">
        <MdOutlineMenu
          size={22}
          className="cursor-pointer"
          onClick={() => toggleSidebar()}
        />
        <SearchBar />
        <div className="hidden max-md:block">
          <Settings size={20} />
        </div>
      </div>

      <div className="md:flex gap-4 items-center hidden  ">
        <div className="flex items-center gap-4  ">
          <IoMoonOutline size={22} className="cursor-pointer" />
          <div className="relative">
            <IoIosNotificationsOutline size={22} className="cursor-pointer " />
            <span className="h-4 w-4   -top-1 -right-1 text-[10px] text-center text-white rounded-full  absolute">
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
