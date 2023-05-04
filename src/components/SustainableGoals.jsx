import React, { useState } from "react";
import sdg1 from "./images/sdg1.png";
import sdg2 from "./images/sdg2.png";
import sdg3 from "./images/sdg3.png";
import sdg4 from "./images/sdg4.png";
import sdgpic1 from "./images/sdgpic1.jpg";
import sdgpic2 from "./images/sdgpic2.jpg";
import sdgpic3 from "./images/sdgpic3.jpg";
const SustainableGoals = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-between md:p-12 p-8 ">
      <div className="flex md:justify-end  flex-col items-center md:items-start text-5xl md:text-7xl font-bold">
        <h1 className="alstoria text-center mt-5">Sustainable</h1>
        <h1 className="alstoria text-center ">Development Goals</h1>
        <p className="text-xl text-center  mt-4 quicksand-500 font-normal">
          Through our work, we support the
        </p>
        <p className="text-xl text-center  quicksand-500 font-normal">
          attainable of the following SDG goals
        </p>
      </div>
      <div>
        <div className="flex md:[&:hover>div]:w-16 [&:hover>div]:w-8   [&>div:hover]:w-[20rem] md:[&>div:hover]:w-[40rem]">
          <div
            className="group relative 
            md:w-16 w-8 cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-500 "
          >
            <img
              className="h-[600px] object-cover transition-all group-hover:rotate-12 group-hover:scale-125"
              src={sdgpic1}
              alt=""
            />
            <div className=" absolute inset-0  group-hover:bg-none  bg-gradient-to-t from-[#FFD230]/90 via-[#FFD230]/40 to-white  visible flex items-center justify-center visible">
              <div className="absolute group-hover:left-[40%] inset-x-5 bottom-6 transition-all duration-500">
                <img src={sdg1} alt="" />
              </div>
            </div>
          </div>
          <div
            className="group relative  
            md:w-[40rem] w-[20rem]  cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-500"
          >
            <img
              className="h-[600px] object-cover transition-all group-hover:rotate-12 group-hover:scale-125"
              src={sdgpic2}
              alt=""
            />
            <div className="absolute inset-0 bg-none bg-gradient-to-tr  from-[#FFD230]/90 via-[#FFD230]/40 to-white  visible flex items-center justify-center">
              <div className="absolute inset-x-5 bottom-6 left-[40%]">
                <img src={sdg2} alt="" />
              </div>
            </div>
          </div>
          <div
            className="group   relative 
            md:w-16 w-8 cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-500"
          >
            <img
              className="h-[600px] object-cover transition-all group-hover:rotate-12 group-hover:scale-125"
              src={sdgpic3}
              alt=""
            />
            <div className=" absolute inset-0 absolute inset-0  group-hover:bg-none bg-gradient-to-t from-[#FFD230]/90 via-[#FFD230]/40 to-white  visible flex items-center justify-center  visible">
              <div className="absolute group-hover:left-[40%] inset-x-5 bottom-6 transition-all duration-500">
                <img src={sdg3} alt="" />
              </div>
            </div>
          </div>
          <div
            className="group   relative 
            md:w-16 w-8 cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-500"
          >
            <img
              className="h-[600px] object-cover transition-all group-hover:rotate-12 group-hover:scale-125"
              src={sdgpic1}
              alt=""
            />
            <div className=" absolute inset-0 absolute inset-0  group-hover:bg-none bg-gradient-to-t from-[#FFD230]/90 via-[#FFD230]/40 to-white  visible flex items-center justify-center  visible">
              <div className="absolute group-hover:left-[40%] inset-x-5 bottom-6 transition-all duration-500">
                <img src={sdg4} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SustainableGoals;
