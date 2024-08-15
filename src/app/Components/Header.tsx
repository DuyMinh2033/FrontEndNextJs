"use client";
import Drawer from "@/app/Components/Drawer";
import Link from "next/link";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { SiNextdotjs } from "react-icons/si";

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <div className="">
      <div className="h-[60px] sticky">
        <div className="max-w-[1200px] mx-auto h-full">
          <div className="h-full flex items-center px-4 xl:px-0 md:justify-between">
            <div className="flex items-center h-full gap-2">
              <SiNextdotjs size={35} />
              <p className="text-xl">NextJSPro</p>
            </div>
            <div className="flex-1 flex justify-center items-center md:hidden">
              <p className=" text-base">Get started for free</p>
              <FaArrowRight size={20} className="ml-2 mt-[3px]" />
            </div>
            <IoMdMenu
              size={28}
              className="mt-[2px]  md:hidden cursor-pointer"
              onClick={() => setOpenDrawer((prev) => !prev)}
            />
            <div className="hidden md:flex items-center gap-4">
              <Link
                href={"/"}
                className="hover:border-b-2 hover:border-yellow-500 hover:transition-all duration-200 text-lg"
              >
                About
              </Link>
              <Link
                href={"/"}
                className="hover:border-b-2 hover:border-yellow-500 hover:transition-all duration-200 text-lg"
              >
                Contact
              </Link>
              <Link
                href={"/"}
                className="hover:border-b-2 hover:border-yellow-500 hover:transition-all duration-200 text-lg"
              >
                Learn more
              </Link>
              <Link
                href={"/"}
                className="px-4 py-2 rounded-md bg-black font-medium text-white hover:opacity-60 hover:transition-opacity hover:duration-500"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Drawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
    </div>
  );
};

export default Header;
