import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { MdOutlineAttachEmail } from "react-icons/md";
import { SiNextdotjs } from "react-icons/si";

const Footer = () => {
  return (
    <>
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 gap-y-10 lg:grid-cols-12 lg:gap-y-0 px-10 xl:px-0">
        <div className="col-span-5">
          <div className="flex items-center gap-2">
            <SiNextdotjs size={35} />
            <p className="text-xl">NextJSPro</p>
          </div>
          <p className="text-base text-gray-500 mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nostrum
            maxime suscipit blanditiis repudiandae.
          </p>
          <div className="flex gap-4 mt-5">
            <button className="bg-[#eee] shadow-xl h-10 w-10 rounded-full flex justify-center items-center hover:transform hover:scale-110 hover:transition-all">
              <FaFacebook size={23} className="text-blue-600" />
            </button>
            <button className="bg-[#eee] shadow-xl h-10 w-10 rounded-full flex justify-center items-center hover:transform hover:scale-110 hover:transition-all">
              <FaInstagram size={23} className="text-red-600" />
            </button>
            <button className="bg-[#eee] shadow-xl h-10 w-10 rounded-full flex justify-center items-center hover:transform hover:scale-110 hover:transition-all">
              <MdOutlineAttachEmail size={23} className="text-green-600" />
            </button>
          </div>
        </div>
        <div className="col-span-7">
          <div className="grid grid-cols-3 ml-10">
            <div>
              <h1 className="text-lg font-medium">Company</h1>
              <ul className="flex flex-col gap-2 mt-4 text-gray-500 cursor-pointer">
                <li>About</li>
                <li>Careers</li>
                <li>Mobile</li>
                <li>Blog</li>
                <li>How we work?</li>
              </ul>
            </div>
            <div>
              <h1 className="text-lg font-medium">Contact</h1>
              <ul className="flex flex-col gap-2 mt-4 text-gray-500 cursor-pointer">
                <li>Help/FAQ</li>
                <li>Press</li>
                <li>Hotel TA</li>
                <li>Blog</li>
                <li>Partners</li>
              </ul>
            </div>
            <div>
              <h1 className="text-lg font-medium">Company</h1>
              <ul className="flex flex-col gap-2 mt-4 text-gray-500 cursor-pointer">
                <li>About</li>
                <li>Careers</li>
                <li>Mobile</li>
                <li>Blog</li>
                <li>How we work?</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto h-[80px] flex items-center justify-between border-t-2 border-gray/60 mt-20">
        <h1 className="text-center md:text-start">
          @2024-Code written in NextJs version 14 author MinhTran
        </h1>
        <div className="hidden md:flex">
          <h3 className="border-r-2 border-gray-500/40 mr-3 pr-3">
            Privacy Policy
          </h3>
          <h3>Terms & Conditions</h3>
        </div>
      </div>
    </>
  );
};

export default Footer;
