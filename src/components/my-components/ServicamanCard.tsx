import React from "react";
import Img from "./download.jpeg";
import { Star } from "lucide-react";
const ServicamanCard = () => {
  return (
    <div className="   w-60 h-80 bg-white   rounded-2xl border-2 cursor-pointer px-2 py-3 flex flex-col gap-3 ">
      <div className="flex justify-center items-center h-[80%] ">  
        <img src={Img.src} alt="img" className="object-fill rounded-2xl w-full h-full   " />
      </div>

      <div className=" px-3  leading-tight ">
        <div className="flex  justify-between items-center">
          <h4 className="font-medium text-[1.1rem]">Dilip Purohit</h4>
          <h5 className="  flex gap-1 items-center">
            4.5 <Star className="text-yellow-400 fill-yellow-400" size={15} />
          </h5>
        </div>
        <div className="flex w-3/4 gap-2   ">
          <p className="truncate overflow-hidden ">Plumber , ac , electrician , bar tender</p>
        </div>
      </div>
    </div>
  );
};

export default ServicamanCard;
