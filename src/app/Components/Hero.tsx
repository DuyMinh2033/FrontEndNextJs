/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { FaArrowRight } from "react-icons/fa";
const Hero = () => {
  return (
    <div className="bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] py-10 mt-[60px]">
      <div className="max-w-[1200px] mx-auto">
        <div className="w-full grid grid-cols-1 gap-7 md:grid-cols-2 px-4 xl:px-0">
          <div className="flex flex-col justify-center">
            <Fade
              direction="up"
              delay={300}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <p className="px-3 py-2 rounded-md ring-1 ring-gray-500 w-[170px]">
                Version 2.0 is here
              </p>
              <h3 className="text-5xl font-bold bg-gradient-to-r from-black/50 to-[#001E80] text-transparent bg-clip-text leading-[60px] mt-6">
                Pathway to productivity
              </h3>
            </Fade>
            <Fade
              direction="up"
              delay={600}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <p className="text-sm text-black/80 mt-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam
                quo sapiente facilis placeat quae at corporis saepe magnam quos.
              </p>
            </Fade>

            <div className="mt-4 flex gap-3 items-center">
              <Fade
                direction="up"
                delay={1000}
                cascade
                damping={1e-1}
                triggerOnce={true}
              >
                <button className="bg-black px-3 py-2 text-white rounded-md hover:opacity-60 hover:transition-opacity hover:duration-500">
                  Get for free
                </button>
                <button className="hover:underline hover:text-yellow-400 hover:transition-all hover:duration-500 pb-1 text-lg flex items-center gap-1 mt-2">
                  Learn more
                  <FaArrowRight className="mt-1" />
                </button>
              </Fade>
            </div>
          </div>
          <div className="flex justify-center">
            <Fade
              direction="right"
              delay={400}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <img
                src={
                  "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600"
                }
                alt="photo"
                className="rounded-sm min-h-[300px]"
              />
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
