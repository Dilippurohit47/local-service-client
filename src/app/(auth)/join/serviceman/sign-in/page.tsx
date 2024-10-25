"use client";
import React, { useState } from "react";
import { IoEyeOffSharp } from "react-icons/io5";
import { FaRegEye } from "react-icons/fa";
import Link from "next/link";
import AuthMiddleware from "@/app/middleware/AuthMiddleware";
import { serviceManSignIn } from "@/app/actions/serverActions";

const Page = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  console.log(showPassword);
  return (
    <AuthMiddleware>
      <div className="w-full h-screen flex justify-center items-center bg-[#F8F8F8]">
        <div className="max-w-md relative flex flex-col p-4 rounded-md text-black bg-white">
          <div className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">
            Welcome back to <span className="text-[#7747ff]">ServiceMan</span>
          </div>
          <div className="text-sm font-normal mb-4 text-center text-[#1e0e4b]">
            Log in to your account as a serviceman
          </div>
          <form className="flex flex-col gap-3" action={serviceManSignIn}>
            <div className="block relative">
              <label
                htmlFor="password"
                className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
              >
                Email
              </label>
              <input
                name="email"
                type="text"
                id="email"
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
                id="password"
                className="rounded border relative border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
              />
              <div
                className="absolute top-11 right-2 cursor-pointer "
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaRegEye /> : <IoEyeOffSharp />}
              </div>
            </div>

            <div>
              <a className="text-sm text-[#7747ff]" href="#">
                Forgot your password?
              </a>
            </div>
            <button
              type="submit"
              className="bg-[#7747ff] w-full  m-auto px-6 py-2 rounded text-white text-sm font-normal"
            >
              Submit
            </button>
          </form>
          <div className="text-sm text-center mt-[1.6rem]">
            Don't have an account yet?{" "}
            <Link
              className="text-sm text-[#7747ff]"
              href="/join/serviceman/sign-up"
            >
              sign-up!
            </Link>
          </div>
        </div>
      </div>
    </AuthMiddleware>
  );
};

export default Page;
