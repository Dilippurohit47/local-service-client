"use client";
import { serviceManSignUp } from "@/app/actions/serverActions";
import AuthMiddleware from "@/app/middleware/AuthMiddleware";
import Loader from "@/components/my-components/Loader";
import SelectInputBox, {
  optionProps,
} from "@/components/my-components/SelectInputBox";
import { Plus } from "lucide-react";
import Link from "next/link";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { IoEyeOffSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { toast } from "sonner";
const options = [
  "electrician",
  "plumber",
  "carpenter",
  "painter",
  "gardener",
  "cleaning service",
  "locksmith",
  "handyman",
  "HVAC technician",
  "pest control",
  "landscaper",
  "appliance repair",
  "moving service",
  "roofer",
  "pool cleaner",
  "window cleaner",
  "laundry service",
  "furniture assembly",
  "computer repair",
  "home organizer",
  "exterminator",
  "chimney sweep",
  "garage door repair",
  "gutter cleaner",
  "tree trimming",
];
const countries = [
  "United States",
  "Canada",
  "United Kingdom",
  "Australia",
  "India",
  "Germany",
  "France",
  "Italy",
  "Japan",
  "China",
  "Brazil",
  "Russia",
  "Mexico",
  "South Korea",
  "South Africa",
  "New Zealand",
  "Argentina",
  "Spain",
  "Netherlands",
  "Switzerland",
  "Turkey",
  "Saudi Arabia",
  "Sweden",
  "Norway",
  "Denmark",
  "Finland",
  "Poland",
  "Indonesia",
  "Thailand",
  "Vietnam",
  "Malaysia",
  "Philippines",
  "Singapore",
  "United Arab Emirates",
  "Egypt",
  "Nigeria",
  "Kenya",
  "Pakistan",
  "Bangladesh",
  "Chile",
];

const Page = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const fileInputRef = useRef(null);
  const [image, setImage] = useState<string | null>();
  const [secure_url, setSecure_url] = useState<string | null>(null);
  const [publicId, setPublicId] = useState<string | null>(null);
  const [imageLoading, setImageLoading] = useState<boolean>(false);
  const [submitLoading, setSubmitLoading] = useState<boolean>(false);
  const [serviceValues, setServiceValues] = useState<optionProps>([]);
  const [country, setCountry] = useState<optionProps>([]);
  const uploadImage = async (e: ChangeEvent<HTMLInputElement>) => {
    setImageLoading(true);
    if (e.target.files && e.target.files.length > 0) {
      const image = e.target.files[0];
      const imageUrl = URL.createObjectURL(image);
      setImage(imageUrl);

      const CLOUD_NAME = "dfzmam9tn";
      const UPLOAD_PRESET = "linkroom";

      const imageFormData = new FormData();
      imageFormData.append("file", image);
      imageFormData.append("upload_preset", UPLOAD_PRESET);

      const cloudinaryRes = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: imageFormData,
        }
      );
      const data = await cloudinaryRes.json();
      setSecure_url(data.secure_url);
      setPublicId(data.public_id);
    }
    setImageLoading(false);
  };

  const removeImg = async () => {
    setImage(null);
    if (publicId) {
      await fetch("/api/cloudinary", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ publicId }),
      });
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
      setPublicId(null);
      setSecure_url(null);
    }
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitLoading(true);
    const formData = new FormData(e.target);
    formData.append("secure_url", secure_url);
    formData.append("public_id", publicId);
    formData.append("services", JSON.stringify(serviceValues));

    if (publicId || secure_url) {
      await serviceManSignUp(formData);
    } else {
      toast.error("Upload Image");
    }
    setSubmitLoading(false);
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
          <form
            className="flex flex-col gap-3"
            onSubmit={(e) => handleSubmit(e)}
          >
            <div className="flex w-full items-center justify-center">
              <input
                ref={fileInputRef}
                type="file"
                name="image"
                className="hidden"
                id="upload_image"
                onChange={(e) => uploadImage(e)}
              />

              {image ? (
                <>
                  {imageLoading ? (
                    <label className="  flex  bg-blue-100 h-36 rounded-tr-xl rounded-bl-xl w-36 items-center justify-center">
                      <Loader />
                    </label>
                  ) : (
                    <div className="relative">
                      <img
                        src={image}
                        alt=""
                        className="h-36  w-36 object-cover rounded-lg"
                      />
                      <div
                        className="absolute top-2 right-2 bg-black rounded-full text-white cursor-pointer"
                        onClick={removeImg}
                      >
                        <RxCross2 size={22} />
                      </div>
                    </div>
                  )}
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
                  name="name"
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
                  name="phoneNo"
                  type="text"
                  id="phoneNo"
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
                  name="email"
                  type="text"
                  id="emial"
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
                  name="password"
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
                <label className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">
                  Select your specialized services
                </label>
                <SelectInputBox
                  options={options}
                  saveValues={setServiceValues}
                  multiple={true}
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
                  name="workingNo"
                  placeholder="Phone number for clients."
                  className="rounded border relative border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
                />
              </div>
            </div>

            <div className="flex gap-5 max-md:flex-col w-full">
              <div className="block relative w-full">
                <label className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">
                  Select your Country
                </label>
                <SelectInputBox
                  options={countries}
                  saveValues={setCountry}
                  multiple={false}
                />
              </div>
              <div className="block relative w-full">
                <label
                  htmlFor="password"
                  className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
                >
                  State
                </label>
                <input
                  type="text"
                  name="workingNo"
                  placeholder=""
                  className="rounded border relative border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
                />
              </div>
            </div>
            <div className="flex gap-5 max-md:flex-col w-full">
              <div className="block relative w-full">
                <label
                  htmlFor="password"
                  className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
                >
                  city
                </label>
                <input
                  name="city"
                  type="text"
                  id="emial"
                  className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
                />
              </div>
              <div className="block relative w-full">
                <label
                  htmlFor="password"
                  className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
                >
                  pincode
                </label>
                <input
                  type="text"
                  name="workingNo"
                  placeholder="Enter your pincode ex:421032."
                  className="rounded border relative border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
                />
              </div>
            </div>

            <div className="flex gap-5 max-md:flex-col mt-5">
              <button
                type="submit"
                disabled={submitLoading}
                className="bg-[#7747ff] w-full  m-auto px-6 py-2 rounded text-white text-sm font-normal"
              >
                {submitLoading ? "Submitting..." : "Submit"}
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
