"use client";
import React, { useState } from "react";
import { IoEyeOffSharp } from "react-icons/io5";
import { FaRegEye } from "react-icons/fa";
import Link from "next/link";
import { Signup } from "@/app/actions/serverActions";
import AuthMiddleware from "@/app/middleware/AuthMiddleware";

const Page = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <AuthMiddleware>
      <div className="w-full h-screen flex justify-center items-center bg-[#F8F8F8] ">
        <div className="max-w-lg w-full relative flex flex-col p-4 rounded-md text-black bg-white">
          <div className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">
            Welcome to <span className="text-[#7747ff]">ServiceMan</span>
          </div>
          <div className="text-sm font-normal mb-4 text-center text-[#1e0e4b]">
            Create new account
          </div>
          <form className="flex flex-col w-full gap-3" action={Signup}>
            <div className="flex flex-row w-full gap-6 justify-center items-center ">
              <div className="flex w-full flex-col gap-2">
                <div className="block relative">
                  <label className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">
                    Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
                  />
                </div>
                <div className="block relative">
                  <label className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">
                    Phone no
                  </label>
                  <input
                    name="phoneNo"
                    type="text"
                    className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
                  />
                </div>
                <div className="block relative">
                  <label className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">
                    Email
                  </label>
                  <input
                    name="email"
                    type="text"
                    className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
                  />
                </div>
                <div className="block relative">
                  <label
                    htmlFor="password"
                    className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
                  >
                    Password
                  </label>
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    className="rounded border relative border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
                  />
                  <div
                    className="absolute top-11 right-2 cursor-pointer "
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaRegEye /> : <IoEyeOffSharp />}
                  </div>
                </div>
              </div>
              {/* Address */}
              <div className="flex   w-full flex-col gap-2">
                <div className="block relative">
                  <label className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">
                    Country
                  </label>
                  <input
                    name="country"
                    type="text"
                    className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
                  />
                </div>
                <div className="block relative">
                  <label className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">
                    State
                  </label>
                  <input
                    name="state"
                    type="text"
                    className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
                  />
                </div>
                <div className="block relative">
                  <label className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">
                    City
                  </label>
                  <input
                    name="city"
                    type="text"
                    className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
                  />
                </div>
                <div className="block relative">
                  <label className="block text-gray-600 cursor-text texwt-sm leading-[140%] font-normal mb-2">
               residental address
                  </label>
                  <input
                    name="pincode"
                    type="text"
                    className="rounded border  border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
                  />
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="bg-[#7747ff] w-full  m-auto px-6 py-2 rounded text-white text-sm font-normal"
            >
              Submit
            </button>
          </form>
          <div className="text-sm text-center mt-[1.6rem]">
            Already have an account?{" "}
            <Link className="text-sm text-[#7747ff]" href="/join/user/sign-in">
              Login!
            </Link>
          </div>
        </div>
      </div>
    </AuthMiddleware>
  );
};

export default Page;
