import React from "react";
import whatpic from "./images/whatpic.png";

const What = () => {
  return (
    <div className="py-4 bg-[#FFD230] flex justify-between px-56">
      <div className="flex flex-col  text-xl gap-1 justify-center text-start">
        <p>Coaching and Mentorship</p>
        <p>Capacity Building</p>
        <p>Mbinu Enterprise Program</p>
        <button className="bg-white uppercase rounded-md shadow-md shadow-gray-300 mt-4 w-[80%] px-2 py-4 uppercase">
          Our Products
        </button>
      </div>
      <div className="relative">
        <img src={whatpic} alt="whatpic" className="h-[500px] w-[500px]" />
        <div className="absolute top-2/3 left-[150px] text-center  text-7xl font-bold flex flex-col ">
          <p className="text-5xl">What</p>
          <p>We Do</p>
        </div>
      </div>
    </div>
  );
};

export default What;
