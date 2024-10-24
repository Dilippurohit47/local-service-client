"use client";
import AuthMiddleware from "@/app/middleware/AuthMiddleware";
import Link from "next/link";
import React, { useState } from "react";
import { FiUsers } from "react-icons/fi";
import { GrUserSettings } from "react-icons/gr";
const Page = () => {
  const [joinAs, setJoinAs] = useState<number>();

  return (
    <AuthMiddleware>
      <div className="flex h-screen w-full flex-col  gap-5 md:gap-10 items-center justify-center">
        <h1 className="text-2xl px-5 text-center font-[400] ">
          Join as a user or serviceman
        </h1>
        <div className=" h-2/4 w-[270px] sm:w-[300px] flex flex-col gap-5 md:flex-row   md:w-[600px] md:h-[150px]">
          <div
            className={`flex flex-col gap-5 px-4 py-4 w-full border-[3px] rounded-lg cursor-pointer ${
              joinAs === 1 && "border-blue-400  border-opacity-60"
            }`}
            onClick={() => setJoinAs(1)}
          >
            <div className="flex  justify-between">
              <div className="">
                <FiUsers size={25} />
              </div>
              <div
                className={`h-6 w-6 border-2 rounded-full ${
                  joinAs === 1 && "bg-blue-500  ring-1 ring-blue-500 "
                }`}
              ></div>
            </div>
            <h3 className="text-[1.4rem] w-full font-[500] ">
              Im a user, I want services
            </h3>
          </div>

          <div
            className={`flex flex-col gap-5 px-4 py-4 w-full border-[3px] rounded-lg cursor-pointer ${
              joinAs === 2 && "border-blue-400  border-opacity-60"
            }`}
            onClick={() => setJoinAs(2)}
          >
            <div className="flex  justify-between">
              <div className="">
                <GrUserSettings size={25} />
              </div>
              <div
                className={`h-6 w-6 border-2 rounded-full ${
                  joinAs === 2 && "bg-blue-500  ring-1 ring-blue-500 "
                }`}
              ></div>
            </div>
            <h3 className="text-[1.4rem] w-full font-[500] ">
              Im a serviceman, I want work
            </h3>
          </div>
        </div>
        <Link
          href={joinAs === 1 ? "/join/user/sign-up" : "join/serviceman/sign-up"}
        >
          <button className="bg-blue-600 text-[1.1rem]  py-2 min-w-[25vw] text-white font-medium  max-md:max-w-[90vw] max-md:w-[70vw] rounded-xl">
            {joinAs
              ? joinAs === 1
                ? "Join as user"
                : "Join as serviceman"
              : "Create Account"}
          </button>
        </Link>
        <h5>
          Already have an account?{" "}
          <Link className="text-blue-400" href={"/join/user/sign-in"}>
            LogIn
          </Link>
        </h5>
      </div>
    </AuthMiddleware>
  );
};

export default Page;
