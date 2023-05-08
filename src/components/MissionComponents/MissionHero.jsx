import React, { useEffect, useState, useLocation } from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";

import missionbackground from "../images/backgrounds/missionbackground.jpg";
const MissionHero = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${missionbackground})`,
      }}
      className="h-[100vh] bg-cover bg-center "
    >
      <div className="flex bg-white/30 justify-between h-[100vh] p-4">
        <Link className=" flex justify-center items-center " to="/purpose">
          <MdArrowBackIosNew className=" text-2xl bg-gray-300 h-8 w-8 p-2 rounded-full cursor-pointer" />
        </Link>
        <div className="w-10/12 hidden md:flex flex-col   justify-end items-end ">
          <div className="bg-white h-[400px] w-[400px] rounded-full flex  justify-center items-center flex-col absolute bottom-7 left-1/2 transform -translate-x-1/2 mb-4 ">
            <p className="text-5xl font-bold alstoria">Our Mission</p>
            <div className="quicksand-500 p-8  text-center">
              To contribute towards the growth of sustainable & Impactful
              Enterprises to Reduce Inequalities, & contribute towards the
              growth of sustainable communities and cities in East Africa.
            </div>
          </div>
        </div>
        <div className="bg-white/70 h-[277px] w-[277px] rounded-full flex md:hidden justify-center items-center flex-col absolute bottom-7 left-1/2 transform -translate-x-1/2 mb-4">
          <p className="text-center text-5xl md:text-xl tracking-wide p-4 pt-6 alstoria">
            Our Mission
          </p>
        </div>
        <Link className=" flex justify-center items-center " to="/blog">
          <MdArrowForwardIos className=" text-2xl bg-gray-300 h-8 w-8 p-2 rounded-full cursor-pointer" />
        </Link>
      </div>
    </div>
  );
};

export default MissionHero;
