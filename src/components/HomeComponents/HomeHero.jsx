import React, { useState, useEffect, useLocation } from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";
import cdmssmall from "../images/cdmssmall.png";
import homebackground from "../images/backgrounds/homebackground.jpg";

const HomeHero = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${homebackground})`,
        backgroundColor: "#FFD230",
      }}
      className="h-[100vh] bg-cover md:bg-center bg-no-repeat bg-[40%]   "
    >
      <div className="flex justify-between bg-white/30 h-[100vh] p-4 ">
        <Link className="flex justify-center items-center  " to="/contact">
          <MdArrowBackIosNew className=" text-2xl bg-gray-300 h-8 w-8 p-2 rounded-full cursor-pointer" />
        </Link>
        <div className="w-10/12 hidden md:flex flex-col justify-end items-end ">
          <div className="bg-white h-[500px] w-[500px] rounded-full flex  justify-center items-center absolute flex-col  bottom-7 left-1/2 transform -translate-x-1/2 mb-4 ">
            <div className=" quicksand-700   top-1/2 left-24 text-3xl">
              <p>We helped a health</p>
              <p>start-up deliver</p>
              <p>quality affordable</p>
              <p>patient experiences</p>
              <p className="border-b-2 border-black w-[100%] my-2"></p>
              <img src={cdmssmall} alt="cdmssmall" className=" h-[77px] " />
            </div>
          </div>
        </div>
        <div className="bg-white h-[277px] w-[277px] rounded-full flex md:hidden justify-center items-center flex-col absolute bottom-7 left-1/2 transform -translate-x-1/2 mb-4">
          <p className="text-center border-b-2 border-gray-500 w-3/4  text-xl tracking-wide p-4 pt-6 ">
            We helped a health start-up deliver affordable high quality
            affordable patient experiences
          </p>
          <img src={cdmssmall} alt="cdmssmall" className="h-[77px]" />
        </div>
        <Link className="flex justify-center items-center  " to="/purpose">
          <MdArrowForwardIos className=" text-2xl bg-gray-300 h-8 w-8 p-2 rounded-full cursor-pointer" />
        </Link>
      </div>
    </div>
  );
};

export default HomeHero;
