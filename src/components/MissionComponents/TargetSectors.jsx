import React from "react";
import targetpic from "../images/targetsectorspic.png";
import missio from "../images/missio.svg";

const TargetSectors = () => {
  return (
    <div className="py-2 bg-[#FFD230] pt-20">
      <div
        className="md:hidden"
        style={{
          backgroundImage: `url(${missio})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "300px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2 className="text-2xl text-white">Mission Statement Goes Here</h2>
      </div>
      <div className="flex justify-around mx-auto w-[80%]">
        <div className="text-2xl gap-1 text-start flex justify-center flex-col">
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

        <div className="hidden md:relative ">
          <img src={targetpic} alt="whatpic" className="h-[500px] w-[500px]" />
          <div className="absolute top-2/3 left-[29%] alstoria text-center  text-7xl font-bold flex flex-col ">
            <p className="text-5xl">Target</p>
            <p>Sectors</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TargetSectors;
