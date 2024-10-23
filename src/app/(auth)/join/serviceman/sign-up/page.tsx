"use client";
import React, { ChangeEvent, useState } from "react";
import { IoEyeOffSharp } from "react-icons/io5";
import { FaRegEye } from "react-icons/fa";
import Link from "next/link";
import { Plus } from "lucide-react";
import { RxCross2 } from "react-icons/rx";
import AuthMiddleware from "@/app/middleware/AuthMiddleware";
const Page = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const [image, setImage] = useState<string | null>();

  const uploadImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const image = e.target.files[0];
      const imageUrl = URL.createObjectURL(image);
      setImage(imageUrl);
    }
  };

  const removeImg = () => {
    setImage(null);
  };
  return (
    <AuthMiddleware>
      <div className="w-full min-h-screen flex justify-center items-center bg-[#F8F8F8] ">
        <div className=" max-w-[40rem] md:w-full sm:w-[25rem]  relative flex flex-col p-4 rounded-md text-black bg-white">
          <div className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">
            Welcome to <span className="text-[#7747ff]">ServiceMan</span>
          </div>
          <div className="text-sm font-normal mb-4 text-center text-[#1e0e4b]">
            Create new account as a service man
          </div>
          <form className="flex flex-col gap-3">
            <div className="flex w-full items-center justify-center">
              <input
                type="file"
                className="hidden"
                id="upload_image"
                onChange={(e) => uploadImage(e)}
              />

              {image ? (
                <>
                  <div className="relative">
                    <img
                      src={image}
                      alt=""
                      className="h-36  w-36 object-cover rounded-lg"
                    />
                    <div
                      className="absolute top-2 right-2 text-white cursor-pointer"
                      onClick={removeImg}
                    >
                      <RxCross2 size={22} />
                    </div>
                  </div>
                </>
              ) : (
                <label
                  htmlFor="upload_image"
                  className="  flex  bg-blue-100 h-36 rounded-tr-xl rounded-bl-xl w-36 items-center justify-center"
                >
                  <Plus size={44} className="text-white" />
                </label>
              )}
            </div>

            <div className="flex max-md:flex-col gap-5 w-full ">
              <div className="block relative w-full">
                <label
                  htmlFor="email"
                  className="block  text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="email"
                  className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
                />
              </div>
              <div className="block relative  w-full">
                <label
                  htmlFor="password"
                  className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
                >
                  Phone no
                </label>
                <input
                  type="text"
                  id="password"
                  className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
                />
              </div>
            </div>

            <div className="flex gap-5 max-md:flex-col w-full">
              <div className="block relative w-full">
                <label
                  htmlFor="password"
                  className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="password"
                  className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
                />
              </div>
              <div className="block relative w-full">
                <label
                  htmlFor="password"
                  className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
                >
                  Password
                </label>
                <input
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
            </div>
            {/* services */}

            <div className="flex gap-5 max-md:flex-col w-full">
              <div className="block relative w-full">
                <label
                  htmlFor="password"
                  className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
                >
                  Services
                </label>
                <input
                  type="text"
                  id="password"
                  placeholder="what services do you provide?"
                  className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
                />
              </div>
              <div className="block relative w-full">
                <label
                  htmlFor="password"
                  className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
                >
                  Working phone no
                </label>
                <input
                  type="text"
                  id="password"
                  placeholder="Phone number for clients."
                  className="rounded border relative border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
                />
              </div>
            </div>

            <div className="flex gap-5 max-md:flex-col mt-5">
              <button
                type="submit"
                className="bg-[#7747ff] w-full  m-auto px-6 py-2 rounded text-white text-sm font-normal"
              >
                Submit
              </button>
            </div>
          </form>
          <div className="text-sm text-center mt-[1.6rem]">
            Already have an account?{" "}
            <Link
              className="text-sm text-[#7747ff]"
              href="/join/serviceman/sign-in"
            >
              Login!
            </Link>
          </div>
        </div>
      </div>
    </AuthMiddleware>
  );
};

export default Page;
