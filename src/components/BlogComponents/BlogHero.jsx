import React, { useState, useEffect, useLocation } from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import impactseriesbg from "../images/impactseriesbg.jpeg";
import { Link } from "react-router-dom";
const BlogHero = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${impactseriesbg})`,
      }}
      className="h-[100vh] bg-cover bg-center flex justify-between "
    >
      <Link className=" flex justify-center items-center pl-4 " to="/products">
        <MdArrowBackIosNew className=" text-2xl bg-gray-300 h-8 w-8 p-2 rounded-full cursor-pointer" />
      </Link>
      <div className="w-10/12 hidden md:flex flex-col   justify-end items-end ">
        <div className="bg-white h-[500px] w-[500px] rounded-full flex  justify-center items-center flex-col absolute bottom-0 left-1/2 transform -translate-x-1/2">
          <p className="text-6xl font-bold alstoria">Impact Series</p>
          <div className="quicksand-500 p-8 text-xl text-center">
            Join the impact revolution with our weekly blog, featuring social
            entrepreneurs creating positive change. Educate, inspire, and
            empower yourself to make a difference. Discover Africa's
            changemakers and take ownership of their stories.
          </div>
        </div>
      </div>
      <div className="bg-white h-[277px] w-[277px] rounded-full flex md:hidden justify-center items-center flex-col absolute bottom-7 left-1/2 transform -translate-x-1/2 mb-4">
        <p className="text-center text-5xl md:text-xl tracking-wide p-4 pt-6 alstoria">
          Impact Series
        </p>
      </div>
      <Link className=" flex justify-center items-center pr-4 " to="/clients">
        <MdArrowForwardIos className=" text-2xl bg-gray-300 h-8 w-8 p-2 rounded-full cursor-pointer" />
      </Link>
    </div>
  );
};

export default BlogHero;
