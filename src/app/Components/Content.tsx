/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { Fade } from "react-awesome-reveal";

const Content = () => {
  return (
    <div id="content" className="max-w-[1200px] mx-auto mt-[100px] mb-[100px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 px-7 gap-y-7">
        <div>
          <Fade
            direction="left"
            delay={300}
            cascade
            damping={1e-1}
            triggerOnce={true}
          >
            <img
              src="https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="content"
              className="h-[500px] w-full object-cover rounded-tl-3xl rounded-bl-[50px] rounded-tr-[200px] rounded-br-xl"
            />
          </Fade>
        </div>
        <div className="flex flex-col justify-center pl-10">
          <Fade
            direction="right"
            delay={400}
            cascade
            damping={1e-1}
            triggerOnce={true}
          >
            <h1 className="text-2xl text-red-500/80 tracking-[2px] font-medium text-center">
              Paragraph Development
            </h1>
          </Fade>
          <Fade
            direction="right"
            delay={500}
            cascade
            damping={1e-1}
            triggerOnce={true}
          >
            <p className="mt-3 text-gray-500 text-sm leading-6">
              Writers use words to compose sentences that develop ideas. A group
              of related sentences that develops a particular idea is organized
              in a unit called a paragraph. Understanding the basic concept of
              “paragraph” is easy enough, but applying that understanding—that
              is, writing strong, focused paragraphs—can pose challenges for
              writers of all levels of accomplishment. The discussion that
              follows will help you understand effective paragraphing and
              reinforce good writing habits. Keep in mind that writing is a
              process, and producing good writing, paragraph by paragraph, takes
              time. Learning to write effective paragraphs will help you
              communicate ideas clearly to an audience and help you achieve the
              purpose of the writing.
            </p>
          </Fade>
          <Fade
            direction="right"
            delay={550}
            cascade
            damping={1e-1}
            triggerOnce={true}
          >
            <button className="bg-pink-500/50 w-[200px] py-2 rounded-3xl mt-4 hover:bg-pink-500/70 hover:transition-all hover:duration-500">
              Learn more
            </button>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Content;
