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
        <img
          src={freedownloadpic}
          alt="freedownloadpic"
          className="md:h-[80vh]"
        />
        <div className="flex flex-col    justify-around md:items-end mt-5 mb-5">
          <p className="text-2xl bg-[#FFD230] flex justify-center items-center hover:scale-105 transition ease-in-out duration-500  md:text-start text-center quicksand-700 h-[42px] md:w-[253px] font-semibold text-white  rounded-lg cursor-pointer">
            Free Download
          </p>
          <p className="md:w-[90%] md:text-start text-center w-[100%] text-3xl md:text-5xl quicksand-400 md:quicksand-700 font-bold md:text-end mt-6">
            Step by Step Guide on CrowdFunding Your Small Business
          </p>

          <p
            className="text-black bg-white flex items-center hover:scale-105 transition ease-in-out duration-500   text-[20px] md:h-[57px]  h-[46px] md:w-[443px] w-[90%] mx-auto md:mx-0 cursor-pointer justify-center font-semibold quicksand-700 mt-6 rounded-lg "
            style={{
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
          >
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
