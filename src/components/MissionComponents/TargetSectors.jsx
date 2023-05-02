import React from "react";
import targetpic from "../images/targetsectorspic.png";
const TargetSectors = () => {
  return (
    <div className="py-2 bg-[#FFD230] ">
      <div className=" flex flex-col-reverse mt-10 md:flex-row justify-around mx-auto w-[80%]">
        <div className="  text-2xl gap-1  text-start flex justify-center flex-col">
          <ul className="list-disc quicksand-500">
            <li className="my-1">HealthCare</li>
            <li className="my-1">Education</li>
            <li className="my-1">Technology</li>
            <li className="my-1">Clean Energy & Environment</li>
            <li className="my-1">Financial Inclusion </li>
            <li className="my-1">Sustainable Tourism</li>
            <li className="my-1">Sustainable Fashion </li>
            <li className="my-1">Waste Management</li>
            <li className="my-1">Blue Economy</li>
          </ul>
        </div>
        <div className="relative">
          <img
            src={targetpic}
            alt="whatpic"
            className="md:h-[500px] md:w-[500px]"
          />
          <div className="absolute top-1/4 left-[20%] md:top-2/3 md:left-[29%] alstoria text-center  text-7xl font-bold flex flex-col ">
            <p className="text-5xl">Target</p>
            <p>Sectors</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TargetSectors;
