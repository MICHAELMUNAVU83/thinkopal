import React from "react";
import whopic from "../images/whopic.png";

const Who = () => {
  return (
    <div  className="py-4 bg-[#FFD230] flex justify-between px-56">
      <div className="flex flex-col  text-xl gap-1 justify-center text-start">
        <p>We are a Entrepreneurship Support</p>
        <p>Organization that supports Social</p>
        <p>Enterprises & Impactful Start ups in</p>
        <p>towards the growth of sustainable</p>
        <p>East Africa that seek to make a positive</p>
        <p>impact on Society and the environment</p>
        <p className="mb-4">while still generating Sustainable Profits.</p>
        <button className="bg-white w-[60%] rounded-md shadow-md shadow-gray-300 px-2 py-4 uppercase">
          Our Purpose
        </button>
      </div>
      <div className="relative">
        <img src={whopic} alt="whatpic" className="h-[500px] w-[500px]" />
        <div className="absolute top-2/3 left-[27%] text-center  text-7xl font-bold flex flex-col ">
          <p className="text-5xl">Who</p>
          <p>We Are</p>
        </div>
          </div>
         
    </div>
  );
};

export default Who;
