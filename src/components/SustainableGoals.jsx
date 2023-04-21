import React, { useState } from "react";
import sdg1 from "./images/sdg1.png";
import sdg2 from "./images/sdg2.png";
import sdg3 from "./images/sdg3.png";
import sdgpic1 from "./images/sdgpic1.jpg";
import sdgpic2 from "./images/sdgpic2.jpg";

const SustainableGoals = () => {
  return (
    <div className="flex  justify-between p-12 ">
      <div className="flex justify-end flex-col items-start text-7xl font-bold">
        <h1>Sustainable</h1>
        <h1>Development Goals</h1>
        <p className="text-xl mt-4 font-normal">
          Through our work, we support the
        </p>
        <p className="text-xl font-normal">
          attainable of the following SDG goals
        </p>
      </div>
      <div>
        <div className="flex [&:hover>div]:w-16  [&>div:hover]:w-[40rem]">
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
              src={sdgpic2}
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
