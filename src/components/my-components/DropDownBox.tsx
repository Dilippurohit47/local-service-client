import { logout } from "@/lib/redux/reducers/UserReducer";
import { Separator } from "@radix-ui/react-separator";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "sonner";

const DropDownBox = () => {
  const dispatch = useDispatch();
  const logOut = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER}/api/v1/user/sign-out`,
        {
          method: "POST",
          credentials: "include",
        }
      );
      const data = await res.json();
      console.log(data);
      if (data && data.success) {
        console.log("in data");
        dispatch(logout());
        toast.success(data.message);
      }
    } catch (error) {
      toast.error("Internal server error");
    }
  };

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
      <div
        className="cursor-pointer hover:bg-red-500 px-1 mt-1 transition-all ease-out duration-300 rounded-md"
        onClick={logOut}
      >
        Logout
      </div>
    </div>
  );
};

export default DropDownBox;
