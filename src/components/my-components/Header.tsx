"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSidebar } from "@/components/ui/sidebar";
import { useAppSelector } from "@/lib/hooks";
import { Separator } from "@radix-ui/react-separator";
import { useEffect, useRef, useState } from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoMoonOutline } from "react-icons/io5";
import { MdOutlineMenu } from "react-icons/md";
import DropDownBox from "./DropDownBox";
import SearchBar from "./SearchBar";
import { Button } from "../ui/button";
import Link from "next/link";

const Header = () => {
  const { open, toggleSidebar } = useSidebar();
  const [showBox, setShowBox] = useState<boolean>(false);
  const user = useAppSelector((state) => state.userReducer.User);
  const boxref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const clickOutside = (event: Event) => {
      if (boxref.current && !boxref.current.contains(event?.target as Node)) {
        setShowBox(false);
      }
    };

    document.addEventListener("click", clickOutside);

    return () => {
      document.removeEventListener("click", clickOutside);
    };
  }, []);

  return (
    <nav
      className={`bg-[#FAFAFA]  fixed top-0 right-0   flex md:justify-between items-center border-b border-opacity-50 md:pr-10 md:pl-5 px-2  py-2 transition-all duration-200 ${
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
      </div>

      <div className="md:flex gap-4 items-center hidden  ">
        <div className="flex items-center gap-4  ">
          <IoMoonOutline size={22} className="cursor-pointer" />
          <div className="relative">
            <IoIosNotificationsOutline size={22} className="cursor-pointer " />
            <span className="h-4 w-4 bg-red-400  -top-1 -right-1 text-[10px] text-center text-white rounded-full  absolute">
              4
            </span>
          </div>
        </div>
        <Separator
          className="h-6  w-[1px] bg-gray-400"
          orientation="vertical"
        />
        {user ? (
          <div className="flex relative gap-3 items-center">
            <Avatar
              ref={boxref}
              className="h-7 w-7 cursor-pointer"
              onClick={() => setShowBox(!showBox)}
            >
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span className="text-[1rem] font-medium">{user.name}</span>
            {showBox && <DropDownBox />}
          </div>
        ) : (
          <Link href={"/join"}>
            <Button className="bg-blue-500 hover:bg-blue-600">Login</Button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Header;
