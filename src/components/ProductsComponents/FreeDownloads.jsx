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
      className="bg-cover p-4 md:p-0 "
    > 
      <div className="w-[90%] mx-auto flex flex-col md:flex-row justify-between p-8 border-2 border-[#FFD230]  rounded-2xl md:border-0">
        <img src={freedownloadpic} alt="freedownloadpic" className="md:h-[80vh]" />
        <div className="flex flex-col justify-around md:items-end mt-5 mb-5">
          <p className="text-2xl bg-[#FFD230]  md:text-start text-center quicksand-700 py-2 px-4 font-semibold  rounded-lg cursor-pointer">
            Free Download
          </p>
          <p className="md:w-[90%] md:text-start text-center w-[100%] text-3xl md:text-5xl quicksand-400 md:quicksand-700 font-bold md:text-end mt-6">
            Step by Step Guide on CrowdFunding Your Small Business
          </p>

          <p className="text-black bg-white  md:text-start text-center py-2 px-4 cursor-pointer font-semibold quicksand-700 mt-6 rounded-lg ">
            Download Free Guide
          </p>
          <Link
            to="/free-resources"
            className="underline md:text-start text-center text-xl cursor-pointer mt-6"
          >
            View More Free Downloads
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FreeDownloads;
