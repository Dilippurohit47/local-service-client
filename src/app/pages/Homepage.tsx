import ServicamanCard from "@/components/my-components/ServicamanCard";
import { Star } from "lucide-react";
import React from "react";

const Homepage = () => {
  return (
    <div className="h-screen mt-16 bg-[#FAFAFA] w-[95vw] max-md:w-screen    ">
      <h1 className="font-semibold ml-4 md:text-3xl text-xl flex items-center gap-2  ">
        Best Service Providers{" "}
        <Star
          className="text-yellow-400 md:translate-y-1 fill-yellow-400"
          size={18}
        />
      </h1>
      <div className="md:px-4 py-2 flex gap-8 max-md:flex-col   w-full max-md:gap-4 items-center">
        <ServicamanCard />
        <ServicamanCard />
        <ServicamanCard />
      </div>

      <div>
        <h1 className="font-semibold ml-4 md:text-3xl text-xl ">Plumbers</h1>
        <div className="md:px-4 py-2 flex gap-8 max-md:flex-col   w-full max-md:gap-4 items-center">
          <ServicamanCard />
          <ServicamanCard />
          <ServicamanCard />
          <ServicamanCard />
          <ServicamanCard />
        </div>
      </div>
      <div>
        <h1 className="font-semibold ml-4 md:text-3xl text-xl ">Electricians</h1>
        <div className="md:px-4 py-2 flex gap-8 max-md:flex-col   w-full max-md:gap-4 items-center">
          <ServicamanCard />
          <ServicamanCard />
          <ServicamanCard />
          <ServicamanCard />
          <ServicamanCard />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
