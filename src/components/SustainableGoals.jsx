import React, { useState } from "react";
import sdg1 from "./images/sdg1.png";
import sdg2 from "./images/sdg2.png";
import sdg3 from "./images/sdg3.png";
import sdgpic1 from "./images/sdgpic1.jpg";
import sdgpic2 from "./images/sdgpic2.jpg";
import sdgpic3 from "./images/sdgpic3.jpg";
const SustainableGoals = () => {
  return (
    <div className="flex justify-between md:p-12 ">
      <div className="flex md:justify-end  flex-col items-center md:items-start text-5xl md:text-7xl font-bold">
        <h1 className="alstoria mt-5">Sustainable</h1>
        <h1 className="alstoria hidden md:block">Development Goals</h1>
        <p className="text-xl hidden md:block mt-4 quicksand-500 font-normal">
          Through our work, we support the
        </p>
        <p className="text-xl hidden md:block quicksand-500 font-normal">
          attainable of the following SDG goals
        </p>
        <p className="text-xl quicksand-500 text-center p-4 font-normal">
          Over the years, we've had the pleasure of working with some amazing
          people and organizations, who have inspired us with their passion,
          dedication, and innovative ideas. Our clients come from a range of
          sectors, including agriculture, renewable energy, health, and
          education, and we're proud to have played a part in their success.
          We're committed to continuing to support entrepreneurs in East Africa
          and helping them to achieve their goals.
        </p>
      </div>
      <div>
        <div className="hidden md:flex [&:hover>div]:w-16  [&>div:hover]:w-[40rem]">
          <div
            className="group relative 
           w-16 cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-500 "
          >
            <img
              className="h-[600px] object-cover transition-all group-hover:rotate-12 group-hover:scale-125"
              src={sdgpic1}
              alt=""
            />
            <div className=" absolute inset-0  absolute inset-0 bg-gradient-to-t from-[#FFD230]/90 via-[#FFD230]/40 to-white  visible flex items-center justify-center visible">
              <div className="absolute group-hover:left-[40%] inset-x-5 bottom-6 transition-all duration-500">
                <img src={sdg1} alt="" />
              </div>
            </div>
          </div>
          <div
            className="group relative  
           w-[40rem] cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-500"
          >
            <img
              className="h-[600px] object-cover transition-all group-hover:rotate-12 group-hover:scale-125"
              src={sdgpic2}
              alt=""
            />
            <div className="absolute inset-0 bg-gradient-to-tr  from-[#FFD230]/90 via-[#FFD230]/40 to-white  visible flex items-center justify-center">
              <div className="absolute inset-x-5 bottom-6 left-[40%]">
                <img src={sdg2} alt="" />
              </div>
            </div>
          </div>
          <div
            className="group   relative 
           w-16 cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-500"
          >
            <img
              className="h-[600px] object-cover transition-all group-hover:rotate-12 group-hover:scale-125"
              src={sdgpic3}
              alt=""
            />
            <div className=" absolute inset-0 absolute inset-0 bg-gradient-to-t from-[#FFD230]/90 via-[#FFD230]/40 to-white  visible flex items-center justify-center  visible">
              <div className="absolute group-hover:left-[40%] inset-x-5 bottom-6 transition-all duration-500">
                <img src={sdg3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SustainableGoals;
