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
      className="bg-cover h-[130vh] md:h-[90vh] "
    >
      <div className="w-[90%] mx-auto flex flex-col md:flex-row justify-between p-8">
        <img src={freedownloadpic} alt="freedownloadpic" className="h-[80vh]" />
        <div className="flex flex-col justify-around md:items-end mt-5 mb-5">
          <p className="text-2xl bg-[#FFD230] quicksand-700 py-2 px-4 font-semibold  rounded-lg cursor-pointer">
            Free Download
          </p>
          <p className="md:w-[90%] text-3xl md:text-5xl quicksand-400 md:quicksand-700 font-bold md:text-end mt-6">
            Step by Step Guide on CrowdFunding Your Small Business
          </p>

          <p className="text-black bg-white py-2 px-4 cursor-pointer font-semibold quicksand-700 mt-6 rounded-lg ">
            Download Free Guide
          </p>
          <Link
            to="/free-resources"
            className="underline text-xl cursor-pointer mt-6"
          >
            View More Free Downloads
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FreeDownloads;
