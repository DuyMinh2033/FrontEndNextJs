"use client";
import React from "react";
import { Fade } from "react-awesome-reveal";

const Special = () => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/965324/pexels-photo-965324.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];
  return (
    <div className="mb-[100px]">
      <Fade
        direction="up"
        delay={300}
        cascade
        damping={1e-1}
        triggerOnce={true}
      >
        <h1 className="text-2xl uppercase tracking-[2px] text-center text-yellow-500/80">
          Special Feature
        </h1>
      </Fade>
      <Fade
        direction="up"
        delay={400}
        cascade
        damping={1e-1}
        triggerOnce={true}
      >
        <p className="text-xl text-center mt-2">Welcome to our website</p>
      </Fade>
      <div className="max-w-[800px] mx-auto mt-6 px-8">
        <img
          src="https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="avatar"
          className="w-full object-cover h-[300px] rounded-lg transform hover:scale-[1.1] transition-all"
        />
        <div className="grid grid-cols-2 gap-5 lg:gap-8 mt-6">
          {data.map((item) => (
            <div key={item.id}>
              <img
                src={item.img}
                alt="avatar"
                className="object-cover h-[250px] rounded-lg transform hover:scale-[1.1] transition-all w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Special;
