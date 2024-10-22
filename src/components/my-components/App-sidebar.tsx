"use client";

import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";

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
// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar() {
  const { toggleSidebar } = useSidebar();

  return (
    <Sidebar collapsible="icon" className="max-md:hidden" >
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
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
