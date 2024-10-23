"use client";

import {
  Bell,
  Calendar,
  Home,
  Inbox,
  LogOut,
  Moon,
  PowerOffIcon,
  Search,
  Settings,
} from "lucide-react";
import { CgProfile } from "react-icons/cg";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
} from "@/components/ui/sidebar";

import { RxCross1 } from "react-icons/rx";
import { useSidebar } from "../ui/sidebar";
import { useAppSelector } from "@/lib/hooks";
// Menu items.

export function AppSidebar() {
  const { toggleSidebar } = useSidebar();
  const getuser = () => {
    const user = useAppSelector((state) => state.userReducer.User);
    return user?.name;
  };
  const logOut = () => {
    alert("ok");
  };

  const items = [
    {
      title: "Home",
      url: "/",
      icon: Home,
    },
    {
      title: "Inbox",
      url: "#",
      icon: Inbox,
    },
    {
      title: "Notification",
      url: "#",
      icon: Bell,
    },
    {
      title: "DarkMode",
      url: "#",
      icon: Moon,
    },
    {
      title: getuser(),
      url: "#",
      icon: CgProfile,
    },
    {
      title: "Logout",
      url: "#",
      icon: LogOut,
      func: logOut,
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
                <div
                  key={item.title}
                  className="flex items-center p-2"
                  onClick={()=>item.func()}
                >
                  <a href={item.url} className="flex items-center">
                    <item.icon size={18} className="mr-4" />{" "}
                    <span className="">{item.title}</span>
                  </a>
                </div>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
