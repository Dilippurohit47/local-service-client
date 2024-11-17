"use client";
import ServicamanCard from "@/components/my-components/ServicamanCard";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { login, saveUser } from "@/lib/redux/reducers/UserReducer";
import { fetcher } from "@/lib/utils";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";
import useSWR from "swr";
const Homepage = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.userReducer?.user);
  const [services, setServices] = useState([]);

  const { data: serviceData } = useSWR(
    `${process.env.NEXT_PUBLIC_SERVER}/api/v1/services/get-close-services/${user?.latitude}/${user?.longitude}/${user?.country}`,
    fetcher
  );

  const { data } = useSWR(
    `${process.env.NEXT_PUBLIC_SERVER}/api/v1/user/cookie`,
    fetcher
  );

  useEffect(() => {
    if (serviceData) {
      console.log(serviceData);
      setServices(serviceData.services);
    }
  }, [serviceData]);

  useEffect(() => {
    if (data) {
      dispatch(login(data.token));
      dispatch(saveUser(data.user));
    }
  }, [data]);

  return (
    <div className="h-screen mt-16 bg-gray-200 px-2 w-[95vw] overflow-hidden  max-md:w-screen z-10    ">
      <div className="bg-white mt-4 w-full py-2">
        <h1 className="font-semibold ml-4  md:text-3xl text-xl flex items-center gap-2  ">
          Best Service Providers Near You{" "}
          <Star
            className="text-yellow-400 md:translate-y-1 fill-yellow-400"
            size={18}
          />
        </h1>
        <div className="md:px-4 bg-white rounded-md  py-4 overflow-x-auto no-scrollbar flex gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5   w-full max-md:gap-4 items-center">
          {services && services.length > 0
            ? services.map((item, i) => <ServicamanCard key={i} item={item} />)
            : "Login to get Nearby Services"}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
