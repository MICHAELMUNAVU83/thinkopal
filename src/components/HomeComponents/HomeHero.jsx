import React from "react";
import background1 from "../images/background1.png";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import unt from "../images/unt.png";
import { Link } from "react-router-dom";
import cdmssmall from "../images/cdmssmall.png";
const HomeHero = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${background1})`,
      }}
      className="h-[90vh] bg-cover flex justify-between "
    >
      <Link className=" flex justify-center items-center pl-4 " to="/products">
        <MdArrowBackIosNew className=" text-2xl bg-gray-300 h-8 w-8 p-2 rounded-full cursor-pointer" />
      </Link>
      <div className="w-10/12 flex flex-col   justify-end items-end ">
        <div className="relative">
          <div className="absolute quicksand-700   top-1/2 left-24 text-3xl">
            <p>We helped a health</p>
            <p>start-up deliver</p>
            <p>quality affordable</p>
            <p>patient experiences</p>
            <p className="border-b-2 border-black w-[100%] my-2"></p>
            <img src={cdmssmall} alt="cdmssmall" className=" h-[77px] " />

         
          </div>
          <img src={unt} alt="unt" className="h-[80vh] " />
        </div>
      </div>
      <Link className=" flex justify-center items-center pr-4 " to="/purpose">
        <MdArrowForwardIos className=" text-2xl bg-gray-300 h-8 w-8 p-2 rounded-full cursor-pointer" />
      </Link>
    </div>
  );
};

export default HomeHero;
