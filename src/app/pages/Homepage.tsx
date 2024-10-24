"use client";
import ServicamanCard from "@/components/my-components/ServicamanCard";
import { login, saveUser } from "@/lib/redux/reducers/UserReducer";
import { useAppDispatch } from "@/lib/redux/hooks";
import { fetcher } from "@/lib/utils";
import { Star } from "lucide-react";
import { useEffect } from "react";
import useSWR from "swr";
const Homepage = () => {
  const dispatch = useAppDispatch();

  const { data } = useSWR(
    `${process.env.NEXT_PUBLIC_SERVER}/api/v1/user/cookie`,
    fetcher
  );
  useEffect(() => {
    if (data) {
      dispatch(login(data.token));
      dispatch(saveUser(data.user));
    }
  }, [data]);

  return (
    <div className="h-screen mt-16 bg-[#FAFAFA] w-[95vw] overflow-hidden  max-md:w-screen z-10    ">
      <h1 className="font-semibold ml-4 md:text-3xl text-xl flex items-center gap-2  ">
        Best Service Providers{" "}
        <Star
          className="text-yellow-400 md:translate-y-1 fill-yellow-400"
          size={18}
        />
      </h1>
      <div className="md:px-4 py-2 overflow-x-auto no-scrollbar flex gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5   w-full max-md:gap-4 items-center">
        <ServicamanCard />
        <ServicamanCard />
        <ServicamanCard />
        <ServicamanCard />
        <ServicamanCard />
        <ServicamanCard />
      </div>
    </div>
  );
};

export default Homepage;
