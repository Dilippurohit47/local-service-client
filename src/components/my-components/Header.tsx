"use client"
import React from "react";

import { IoMoonOutline } from "react-icons/io5";
import { useSidebar } from "@/components/ui/sidebar";

const Header = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <nav className="bg-white min-w-md fixed top-0 right-0 w-3/4 flex justify-between border-b border-opacity-50 px-5 py-4">
      <div>hello</div>
      <button onClick={toggleSidebar}>Toggle Sidebar</button>;
      <div>
        <div>
          <IoMoonOutline />
        </div>
      </div>
    </nav>
  );
};

export default Header;
