"use client";
import { User } from "@/lib/redux/reducers/UserReducer";
import { fetcher } from "@/lib/utils";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { LuMessageSquare } from "react-icons/lu";
import useSWR from "swr";
interface ExtendedUser extends User {
  profileUrl: string;
  services: service[];
}

type service = {
  id: string;
  value: string;
};
const page = () => {
  const { id } = useParams();

  const [serviceDetail, setServiceDetail] = useState<ExtendedUser>();
  const { data } = useSWR(
    `${process.env.NEXT_PUBLIC_SERVER}/api/v1/services/get-with-id/${id}`,
    fetcher
  );
  useEffect(() => {
    if (data) {
      setServiceDetail(data.ServiceDetails);
    }
  }, [data]);
  console.log(serviceDetail);
  return (
    <div className="">
      <div className="mt-14 flex  bg-[#FFFFFF] w-screen h-screen">
        <div className="flex flex-col  py-12 px-16 w-2/4 h-full">
          <div className="shadow-lg border-1 w-[20vw] flex flex-col gap-2    rounded-lg px-3 py-2">
            <h2 className="font-bold text-2xl">{serviceDetail?.name} </h2>
            <button className="px-6 py-2 bg-blue-600 hover:bg-blue-500 transition ease-in-out duration-300 text-white flex gap-2 justify-center items-center rounded-md ">
              Message{" "}
              <p className="translate-y-[1.5px]">
                {" "}
                <LuMessageSquare size={16} />
              </p>{" "}
            </button>
          </div>
          <div className="mt-6">
            <img
              src={serviceDetail?.profileUrl}
              className="object-cover w-[20vw] rounded-md h-[18rem]"
            />
          </div>
          <div className="shadow-lg border-1 mt-2 rounded-lg px-3 py-2">
            <h2 className="font-bold text-3xl">Description </h2>
            <p className="mt-2 text-sm text-[#595c6d]">
              I am [Your Name], a dedicated and experienced [Service Type]
              professional committed to delivering high-quality services that
              meet your specific needs. With over [X years] of experience in the
              field, I specialize in [mention key services, e.g., plumbing
              repairs, electrical installations, and carpentry]. My approach
              focuses on reliability, attention to detail, and ensuring customer
              satisfaction in every project I undertake. I am available to
              assist you during [working hours and days, e.g., 9:00 AM to 6:00
              PM, Monday to Saturday], offering competitive rates without
              compromising on quality. Let me help you with your [specific
              services] needs and ensure the best possible results for your
              requirements.
            </p>
          </div>
        </div>

        <div className=" flex flex-col gap-6    py-12 px-16 w-2/4 h-full">
          <div className="shadow-lg  border-1 rounded-lg px-3 py-2">
            <h2 className="font-bold text-2xl">Services </h2>
            {serviceDetail &&
              serviceDetail.services.map((item) => (
                <div className="font-medium " key={item.id}>
                  {item.value}
                </div>
              ))}
          </div>
          {/* second div */}

          <div className="shadow-lg border-1  rounded-lg px-3 py-2">
            <h2 className="font-bold text-2xl">Charges </h2>

            <h4 className="font-medium ">Service Charge : ₹300</h4>
            <h4 className="font-medium ">Hourly Rate : ₹200</h4>
          </div>

          {/* third  div */}
          <div className="shadow-lg border-1  rounded-lg px-3 py-2">
            <h2 className="font-bold text-2xl">Address </h2>
            <h4 className="font-medium ">
              Murldihar Nagar oswal park Anjurphata
            </h4>
            <h4 className="font-medium text-[#6f6e6e] ">
              {serviceDetail?.city} {serviceDetail?.state}{" "}
              {serviceDetail?.country}{" "}
            </h4>
          </div>
          {/* fourth  div */}
          <div className="shadow-lg border-1  rounded-lg px-3 py-2">
            <h2 className="font-bold text-2xl">Want to call ? </h2>
            <h4 className="font-medium ">
              Working Phone Number : {serviceDetail?.phoneNo}
            </h4>
          </div>
        </div>
      </div>
      lo l lefelfmelfmekl melk mfelkn     
    </div>
  );
};

export default page;
