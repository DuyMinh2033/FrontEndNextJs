"use client";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { FaArrowRight } from "react-icons/fa";

const Letter = () => {
  return (
    <div id="letter" className="px-9">
      <div className="max-w-[1200px] mx-auto bg-red-500/70 py-[100px] px-9 md:pl-[100px] rounded-l-[50px] rounded-tr-[200px] rounded-br-[20px] mb-[100px] flex flex-col gap-9 relative">
        <Fade
          direction="up"
          delay={300}
          cascade
          damping={1e-1}
          triggerOnce={true}
        >
          <h1 className="text-3xl uppercase tracking-[8px] text-white">
            Newsletter
          </h1>
        </Fade>
        <Fade
          direction="up"
          delay={350}
          cascade
          damping={1e-1}
          triggerOnce={true}
        >
          <p className="text-white font-medium text-5xl">
            Subscribe our newsletter
          </p>
        </Fade>
        <Fade
          direction="up"
          delay={400}
          cascade
          damping={1e-1}
          triggerOnce={true}
        >
          <div className="w-full md:w-[350px] relative flex items-center bg-white rounded-full">
            <input
              type="text"
              className="py-4 rounded-full text-sm outline-none px-4 w-full"
              placeholder="@ enter your email"
            />
            <button className="absolute right-0 h-[45px] w-[45px] bg-black rounded-full flex justify-center items-center mr-1 hover:bg-opacity-70 hover:transition-all hover:duration-500">
              <FaArrowRight className="text-white" size={20} />
            </button>
          </div>
        </Fade>
        <Fade
          direction="right"
          delay={300}
          cascade
          damping={1e-1}
          triggerOnce={true}
          className="absolute right-[-400px] top-[-300px] hidden md:block"
        >
          <img
            src="img/anh1.png"
            alt="aaa"
            className="h-[600px] object-center"
          />
        </Fade>
      </div>
    </div>
  );
};

export default Letter;
