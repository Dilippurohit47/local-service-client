"use client";
import Loader from "@/components/my-components/Loader";
import ServicamanCard, {
  serviceType,
} from "@/components/my-components/ServicamanCard";
import { fetcher } from "@/lib/utils";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import useSWR from "swr";

const page = () => {
  const { slug } = useParams();
  const [services, setServices] = useState<serviceType[]>([]);
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_SERVER}/api/v1/services/get/${slug}`,
    fetcher
  );

  useEffect(() => {
    if (data) {
      setServices(data.data);
    }
  }, [data]);
  return (
    <div className="flex  flex-col gap-4 ml-5 w-full h-full mt-20">
      <h1 className="font-bold  text-3xl">{slug.split("%20").join(" ")}</h1>
      <div className="flex gap-4">
        {services.length > 0 ? (
          isLoading ? (
            <div className="flex h-[80vh] w-screen items-center justify-center">
              <Loader />
            </div>
          ) : (
            services.map((item, index) => (
              <ServicamanCard key={index} item={item} />
            ))
          )
        ) : (
          `no services available for ${slug.split("%20").join(" ")}`
        )}
      </div>
    </div>
  );
};

export default page;
