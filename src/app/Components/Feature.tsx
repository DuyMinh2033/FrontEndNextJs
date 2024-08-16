/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { Fade } from "react-awesome-reveal";

const data = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/16628553/pexels-photo-16628553/free-photo-of-young-man-on-a-motorcycle-in-city.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: "Next js 14 Modern Websites Development Using Tailwind CSSNext js 14 Modern Websites Development Using Tailwind CSS",
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/25651799/pexels-photo-25651799/free-photo-of-tiled-steps-illuminated-by-sunlight.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: "Next js 14 Modern Websites Development Using Tailwind CSSNext js 14 Modern Websites Development Using Tailwind CSS",
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/27595754/pexels-photo-27595754/free-photo-of-a-street-with-a-blue-building-and-a-sign.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: "Practise your listening, reading, writing and speaking and learn useful language to use at work or to communicate effectively with friends.",
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/27498297/pexels-photo-27498297.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: "Practise your listening, reading, writing and speaking and learn useful language to use at work or to communicate effectively with friends.",
  },
];

const Feature = () => {
  return (
    <div id="feature" className="max-w-[1200px] mx-auto">
      <Fade
        direction="up"
        delay={300}
        cascade
        damping={1e-1}
        triggerOnce={true}
      >
        <h1 className="text-center uppercase tracking-[2px] text-2xl text-yellow-500 mt-20">
          Features
        </h1>
      </Fade>
      <Fade
        direction="left"
        delay={400}
        cascade
        damping={1e-1}
        triggerOnce={true}
      >
        <p className="text-center text-xl mt-2">
          Get a many of interesting feature
        </p>
      </Fade>
      <div className="grid mt-[60px] grid-cols-1 gap-[50px] px-10 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-14 lg:grid-cols-4 xl:gap-6 xl:px-0">
        {data.map((item) => (
          <div
            className="bg-gray-500/20 rounded-md relative cursor-pointer pb-4 px-5"
            key={item.id}
          >
            <Fade
              direction="up"
              delay={400}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <p className="text-center mt-[60px]">{item.desc}</p>
            </Fade>
            <img
              src={item.img}
              alt="anh1"
              className="h-[80px] w-[80px] rounded-full object-cover absolute -top-[35px] left-1/2 transform -translate-x-1/2"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
