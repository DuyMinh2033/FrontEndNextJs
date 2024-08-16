"use client";
import React, { Component } from "react";
import { Fade } from "react-awesome-reveal";
import Slider from "react-slick";

const data = [
  {
    id: 1,
    profession: "Senior",
    name: "David",
    img: "https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    profession: "Senior",
    name: "David",
    img: "https://images.pexels.com/photos/1181280/pexels-photo-1181280.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    profession: "Senior",
    name: "David",
    img: "https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 4,
    profession: "Senior",
    name: "David",
    img: "https://images.pexels.com/photos/1181376/pexels-photo-1181376.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 5,
    profession: "Senior",
    name: "David",
    img: "https://images.pexels.com/photos/3153203/pexels-photo-3153203.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 6,
    profession: "Senior",
    name: "David",
    img: "https://images.pexels.com/photos/3201630/pexels-photo-3201630.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

export default class MultipleItems extends Component {
  render(): React.ReactNode {
    var settings = {
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      autoplay: false,
      autoplaySpeed: 1000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            SlideToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            SlideToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            SlideToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
      ],
    };
    return (
      <>
        <div className="bg-red-400/40 py-5 mb-[100px]">
          <Fade
            direction="up"
            delay={300}
            cascade
            damping={1e-1}
            triggerOnce={true}
          >
            <h1 className="text-2xl text-center uppercase tracking-[3px] text-red-500 font-medium">
              Expert Chefs
            </h1>
          </Fade>
          <Fade
            direction="up"
            delay={400}
            cascade
            damping={1e-1}
            triggerOnce={true}
          >
            <p className="text-center text-xl mt-3">
              Let&apos;s meet the expert
            </p>
          </Fade>
          <div className="max-w-[1200px] mx-auto pb-7">
            <Slider {...settings}>
              {data.map((item) => (
                <div key={item.id} className="my-8">
                  <Fade
                    direction="right"
                    delay={400}
                    cascade
                    damping={1e-1}
                    triggerOnce={true}
                  >
                    <img
                      src={item.img}
                      alt="avatar"
                      className="h-[300px] object-cover w-full px-5 "
                    />
                  </Fade>
                  <div className="flex flex-col items-center">
                    <Fade
                      direction="up"
                      delay={400}
                      cascade
                      damping={1e-1}
                      triggerOnce={true}
                    >
                      <h3 className="text-xl mt-3 text-pink-500/90">
                        {item.name}
                      </h3>
                    </Fade>
                    <Fade
                      direction="up"
                      delay={400}
                      cascade
                      damping={1e-1}
                      triggerOnce={true}
                    >
                      <p className="text-gray-500">{item.profession}</p>
                    </Fade>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </>
    );
  }
}
