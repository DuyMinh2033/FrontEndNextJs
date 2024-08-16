"use client";
import Drawer from "@/app/Components/Drawer";
import Link from "next/link";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { SiNextdotjs } from "react-icons/si";

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const scrollToContent = () => {
    const content = document.getElementById("content");
    if (content) {
      content.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToFeature = () => {
    const feature = document.getElementById("feature");
    if (feature) {
      feature.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToLetter = () => {
    const letter = document.getElementById("letter");
    if (letter) {
      letter.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="fixed top-0 left-0 w-full bg-white z-50 shadow-md">
      <div className="h-[60px]">
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
              className="mt-[2px] md:hidden cursor-pointer"
              onClick={() => setOpenDrawer((prev) => !prev)}
            />
            <div className="hidden md:flex items-center gap-4">
              <div
                className="hover:border-b-2 cursor-pointer hover:border-yellow-500 hover:transition-all duration-200 text-lg"
                onClick={() => scrollToFeature()}
              >
                About
              </div>
              <div
                onClick={() => scrollToLetter()}
                className="hover:border-b-2 cursor-pointer hover:border-yellow-500 hover:transition-all duration-200 text-lg"
              >
                Contact
              </div>
              <div
                className="hover:border-b-2 cursor-pointer hover:border-yellow-500 hover:transition-all duration-200 text-lg"
                onClick={() => scrollToContent()}
              >
                Learn more
              </div>
              <div className=" cursor-pointer px-4 py-2 rounded-md bg-black font-medium text-white hover:opacity-60 hover:transition-opacity hover:duration-500">
                Login
              </div>
            </div>
          </div>
        </div>
      </div>
      <Drawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
    </div>
  );
};

export default Header;
