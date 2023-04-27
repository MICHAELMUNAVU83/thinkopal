import React from "react";
import whopic from "../images/whopic.png";

const Who = () => {
  return (
    <div className="bg-[#FFD230] py-8 ">
      <div className="  flex justify-between w-[80%] mx-auto">
        <div className="flex flex-col w-[40%] quicksand-400  text-xl gap-4 justify-center text-start">
          <p className="my-8">
            We are a Entrepreneurship Support Organization that supports Social
            Enterprises & Impactful Start ups in East Africa that seek to make a
            positive impact on Society and the environment while still
            generating Sustainable Profits.
          </p>
          <button className="bg-white w-[60%] hover:scale-105 transition-all duration-300 quicksand-700 rounded-md shadow-md shadow-gray-300 px-2 py-4 uppercase">
            Our Purpose
          </button>
        </div>
        <div className="relative">
          <img src={whopic} alt="whatpic" className="h-[500px] w-[500px]" />
          <div className="absolute top-2/3 left-[27%] alstoria text-center  text-7xl font-bold flex flex-col ">
            <p className="text-5xl">Who</p>
            <p>We Are</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Who;
