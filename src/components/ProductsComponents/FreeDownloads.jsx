import React from "react";
import freedownloadbg from "../images/freedownloadbg.png";
import freedownloadpic from "../images/freedownloadpic.png";
import { Link } from "react-router-dom";
const FreeDownloads = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${freedownloadbg})`,
      }}
      className="bg-cover h-[90vh] "
    >
      <div className="w-[90%] mx-auto flex justify-between p-8">
        <img src={freedownloadpic} alt="freedownloadpic" className="h-[80vh]" />
        <div className="flex flex-col justify-around items-end">
          <p className="text-2xl bg-[#FFD230] py-2 px-4 font-semibold  rounded-lg cursor-pointer">
            Free Download
          </p>
          <p className="w-[70%] text-5xl font-bold text-end">Step by Step Guide on CrowdFunding Your Small Business</p>

          <p className="text-black bg-white py-2 px-4 cursor-pointer font-semibold  rounded-lg ">Download Free Guide</p>
          <Link to="/free-resources" className="underline text-xl cursor-pointer">View More Free Downloads</Link>
        </div>
      </div>
    </div>
  );
};

export default FreeDownloads;
