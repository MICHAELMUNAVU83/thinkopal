import React, { useState, useEffect } from "react";
import capacitypic from "../images/coaching.png";
import capacity1 from "../images/capacity1.png";
import capacity2 from "../images/capacity2.png";
import capacity3 from "../images/capacity3.png";

import { Splide, SplideSlide } from "@splidejs/react-splide";

import "../splide.min.css";
const CapacityBuilding = () => {
  return (
    <div className="bg-[#FFD230] py-8 ">
      <div className="  flex flex-col-reverse md:flex-row justify-between w-[80%] mx-auto">
        <div className="flex flex-col  text-xl gap-1 justify-center md:w-[40%] text-start">
          <p className="quicksand-500 md:text-start text-center">
            Our capacity building programs provide entrepreneurs with the
            technical and operational skills they need to manage their
            businesses more effectively and efficiently. We offer training in
            areas such as finance, marketing, and project management, giving
            entrepreneurs the tools they need to take their businesses to the
            next level. We provide training by transferring knowledge and skills
            in the following areas.
          </p>
        </div>
        <div className="relative hidden md:block">
          <img
            src={capacitypic}
            alt="whatpic"
            className="md:h-[500px] md:w-[500px]"
          />
          <div className="absolute top-1/2 left-[15%] md:top-2/3 md:left-[30%] text-center alstoria  text-6xl font-bold flex flex-col ">
            <p>Capacity</p>
            <p>Building</p>
          </div>
        </div>
        <div className="md:hidden alstoria text-center  text-5xl font-bold flex flex-col justify-center items-center ">
          <p>Capacity</p>
          <p>Building</p>
        </div>
      </div>

      {/* mobile start */}

      <div className="md:hidden w-[85%] mx-auto mt-8">
        <Splide
          className="px-16"
          options={{
            type: "loop",
            perPage: 1,
            perMove: 1,
            pagination: false,

            margin: "0.5rem",
            gap: "1rem",

            arrows: true,
            autoplay: true,
            interval: 5000,
          }}
        >
          <SplideSlide>
            <div className="flex quicksand-700 justify-around items-center rounded-lg p-4  bg-white md:h-[130px] h-[80px]  ">
              <img
                src={capacity1}
                alt=""
                className="h-[50px] md:w-[100] w-[100px]"
              />
              <p className="font-bold text-xs md:text-xl  ">
                Digital Marketing & Communication
              </p>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="flex quicksand-700 justify-around items-center rounded-lg p-4  bg-white md:h-[130px] h-[80px]   ">
              <img
                src={capacity2}
                alt=""
                className="h-[50px] md:w-[100] w-[100px]"
              />
              <p className="font-bold ">Impact Measurement & Reporting</p>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="flex quicksand-700 justify-center items-center rounded-lg p-4 md:w-[50%] mx-auto  bg-white md:h-[130px] h-[80px]   ">
              <img
                src={capacity3}
                alt=""
                className="h-[50px] md:w-[100] w-[100px]"
              />
            </div>
          </SplideSlide>
        </Splide>
      </div>
      {/* mobile end */}

      {/* desktop start */}

      <div className="hidden md:block w-[85%] mx-auto mt-8">
        <Splide
          className="px-16"
          options={{
            type: "loop",
            perPage: 3,
            perMove: 1,
            pagination: false,

            margin: "0.5rem",
            gap: "1rem",

            arrows: true,
            autoplay: true,
            interval: 5000,
          }}
        >
          <SplideSlide>
            <div className="flex quicksand-700 justify-around items-center rounded-lg p-4  bg-white md:h-[130px] h-[80px]  ">
              <img
                src={capacity1}
                alt=""
                className="h-[96px] w-[96px]"
              />
              <p className="text-xs md:text-xl  ">
                Digital Marketing & Communication
              </p>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="flex quicksand-700 justify-around items-center rounded-lg p-4  bg-white md:h-[130px] h-[80px]   ">
              <img
                src={capacity2}
                alt=""
                className="h-[96px] w-[96px]"
              />
              <p className="text-xs md:text-xl">Impact Measurement & Reporting</p>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="flex quicksand-700 justify-center items-center rounded-lg p-4 md:w-[50%] mx-auto  bg-white md:h-[130px] h-[80px]   ">
              <img
                src={capacity3}
                alt=""
                className="h-[96px] w-[96px]"
              />
            </div>
          </SplideSlide>
        </Splide>
      </div>
      {/* desktop end */}
    </div>
  );
};

export default CapacityBuilding;
