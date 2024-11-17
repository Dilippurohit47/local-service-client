import React from "react";
import { Star } from "lucide-react";
import Link from "next/link";

export interface serviceType {
  name: string;
  id:string;
  profileUrl: string;
  services: servicesType[];
}

interface servicesType {
  id: string;
  value: string;
}

const ServicamanCard = ({ item }: { item: serviceType }) => {
  return (
    <Link href={`/details/${item?.id}`} className="   w-64 min-h-[15.5rem] bg-white   rounded-2xl border-2 cursor-pointer px-2 py-3 flex flex-col gap-3 ">
      <div className="flex justify-center items-center  ">
        <img
          src={item?.profileUrl}
          alt="img"
          className="object-center rounded-2xl  h-40 w-full  "
        />
      </div>

      <div className=" px-3  leading-tight ">
        <div className="flex justify-between items-center">
          <h4 className="font-medium text-[1.1rem]">{item?.name}</h4>

          <h5 className="  flex gap-1 items-center">
            4.5 <Star className="text-yellow-400 fill-yellow-400" size={15} />
          </h5>
        </div>
        <div className="flex  gap-2 justify-between w-full   ">
          <p className="truncate overflow-hidden  w-36 ">
            {item?.services?.map((i, index) => (
              <span key={index}>{i.value},</span>
            ))}
          </p>
          {item.distance && (
            <h6 className="text-[gray] ">
              {parseFloat(item.distance).toFixed()} km
            </h6>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ServicamanCard;
