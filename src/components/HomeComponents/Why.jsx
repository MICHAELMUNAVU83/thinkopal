import React from "react";
import whypic from "../images/whypic.png";
const Why = () => {
  return (
    <div className="bg-[#FFD230] py-8  ">
      <div className="flex justify-between w-[80%] mx-auto">
        <div className="flex flex-col w-[40%]  text-xl gap-1 justify-center text-start">
          <p className="mb-4 quicksand-500">
            To contribute towards the growth of sustainable & Impactful
            Enterprises to Reduce Inequalities, & contribute towards the growth
            of sustainable communities and cities in East Africa.
          </p>
        
          <button className="bg-white quicksand-700 hover:scale-105 transition-all duration-300  w-[60%] rounded-md shadow-md shadow-gray-300 px-2 py-4 uppercase">
            Our Mission
          </button>
        </div>
        <div className="relative">
          <img src={whypic} alt="whatpic" className="h-[500px] w-[500px]" />
          <div className="absolute top-2/3  left-[35%] alstoria text-center  text-7xl font-bold flex flex-col ">
            <p className="text-3xl">Why We</p>
            <p>Do It</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
