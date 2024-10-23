"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
} from "@/components/ui/sidebar";
import { Bell, Home, Inbox, LogIn, LogOut, Moon } from "lucide-react";
import { CgProfile } from "react-icons/cg";

import { logout } from "@/lib/features/UserReducer";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { RxCross1 } from "react-icons/rx";
import { toast } from "sonner";
import { useSidebar } from "../ui/sidebar";

export function AppSidebar() {
  const { toggleSidebar } = useSidebar();
  const user = useAppSelector((state) => state.userReducer.user);

  const dispatch = useAppDispatch();
  const logOut = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER}/api/v1/user/sign-out`,
        {
          method: "POST",
          credentials: "include",
        }
      );
      const data = await res.json();

      if (data && data.success) {
        dispatch(logout());
        toast.success(data.message);
      }
    } catch (error) {
      toast.error("Internal server error");
    }
  };

  const items = [
    {
      title: "Home",
      url: "/",
      icon: Home,
    },
    {
      title: "Inbox",
      url: user ? "/inbox" : "/join",
      icon: Inbox,
    },
    {
      title: "Notification",
      url: user ? "/notification" : "/join",
      icon: Bell,
    },
    {
      title: "DarkMode",
      icon: Moon,
    },
  ];

  return (
    <Sidebar collapsible="icon" className="max-md:hidden">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className=" text-[1.2rem]">
            serviceman
          </SidebarGroupLabel>
          <div
            className="absolute top-5 right-3 cursor-pointer max-md:block hidden"
            onClick={() => toggleSidebar()}
          >
            <RxCross1 />
          </div>
          <SidebarGroupContent>
            <SidebarMenu className="flex flex-col">
              {items.map((item) => (
                <div key={item.title} className="flex items-center p-2">
                  <a href={item.url} className="flex items-center">
                    <item.icon size={18} className="mr-4" />{" "}
                    <span className="">{item.title}</span>
                  </a>
                </div>
              ))}

              {user ? (
                <>
                  <div className="flex items-center p-2">
                    <a href={"/profile"} className="flex items-center">
                      <CgProfile size={18} className="mr-4" />{" "}
                      <span className="">{"jarvis"}</span>
                    </a>
                  </div>
                  <div className="flex items-center p-2">
                    <a href={"/profile"} className="flex items-center">
                      <LogOut size={18} className="mr-4" />{" "}
                      <span className="">{"Logout"}</span>
                    </a>
                  </div>
                </>
              ) : (
                <div className="flex items-center p-2">
                  <a href={"/join"} className="flex items-center">
                    <LogIn size={18} className="mr-4" />{" "}
                    <span className="">{"Login"}</span>
                  </a>
                </div>
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
