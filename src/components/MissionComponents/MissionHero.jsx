import React, { useEffect, useState, useLocation } from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";

import bgagri from "../images/bgagri.jpg";
const MissionHero = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bgagri})`,
      }}
      className="h-[100vh] bg-cover bg-center flex justify-between p-4"
    >
      <Link className=" flex justify-center items-center " to="/mission">
        <MdArrowBackIosNew className=" text-2xl bg-gray-300 h-8 w-8 p-2 rounded-full cursor-pointer" />
      </Link>
      <div className="w-10/12 hidden md:flex flex-col   justify-end items-end ">
        <div className="bg-white h-[500px] w-[500px] rounded-full flex  justify-center items-center flex-col absolute bottom-0 left-1/2 transform -translate-x-1/2 ">
          <p className="text-6xl font-bold alstoria">Our Mission</p>
          <div className="quicksand-500 p-8 text-xl text-center">
            To contribute towards the growth of sustainable & Impactful
            Enterprises to Reduce Inequalities, & contribute towards the growth
            of sustainable communities and cities in East Africa.
          </div>
        </div>
      </div>
      <div className="bg-white h-[277px] w-[277px] rounded-full flex md:hidden justify-center items-center flex-col absolute bottom-7 left-1/2 transform -translate-x-1/2 mb-4">
        <p className="text-center text-5xl md:text-xl tracking-wide p-4 pt-6 alstoria">
          Our Mission
        </p>
      </div>
      <Link className=" flex justify-center items-center " to="/blog">
        <MdArrowForwardIos className=" text-2xl bg-gray-300 h-8 w-8 p-2 rounded-full cursor-pointer" />
      </Link>
    </div>
  );
};

export default MissionHero;
