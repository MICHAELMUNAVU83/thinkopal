import React from "react";
import whypic from "../images/whypic.png";
const Why = () => {
  return (
    <div className="py-4 bg-[#FFD230] flex justify-between px-56">
      <div className="flex flex-col  text-xl gap-1 justify-center text-start">
        <p>To contribute towards the growth of</p>
        <p>sustainable & Impactful Enterprises to</p>
        <p>Reduce Inequalities, & contribute</p>
        <p>towards the growth of sustainable</p>
        <p className="mb-4">communities and cities in East Africa.</p>
        <button className="bg-white  w-[60%] rounded-md shadow-md shadow-gray-300 px-2 py-4 uppercase">
          Our Mission
        </button>
      </div>
      <div className="relative">
        <img src={whypic} alt="whatpic" className="h-[500px] w-[500px]" />
        <div className="absolute top-2/3 left-[150px] text-center  text-7xl font-bold flex flex-col ">
          <p className="text-5xl">Why We</p>
          <p>Do It</p>
        </div>
      </div>
    </div>
  );
};

export default Why;
