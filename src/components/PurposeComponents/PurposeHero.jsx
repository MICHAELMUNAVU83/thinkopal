import React, { useState, useEffect } from "react";
import background2 from "../images/background2.png";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";
import homemobi from "../images/Vector.png";
import bgit from "../images/bgit.jpg";
import bgitsemi from "../images/bgitsemi.png";

const PurposeHero = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${bgit})`,
          backgroundColor: "#FFD230",
        }}
        className="h-[100vh] bg-cover bg-[70%]  md:bg-center p-4"
      >
        <div className="flex justify-between h-[100vh]">
          <Link className=" flex justify-center items-center  " to="/">
            <MdArrowBackIosNew className=" text-2xl bg-gray-300 h-8 w-8 p-2 rounded-full cursor-pointer" />
          </Link>
          <div className="w-10/12 hidden md:flex flex-col   justify-end items-end ">
            <div className="bg-white h-[500px] w-[500px] rounded-full flex  justify-center items-center flex-col absolute bottom-7 left-1/2 transform -translate-x-1/2 mb-4">
              <p className="text-6xl font-bold alstoria">Our Purpose</p>
              <div className="quicksand-500 text-xl p-8 text-center">
                To contribute towards the growth of sustainable & Impactful
                Enterprises to Reduce Inequalities, & contribute towards the
                growth of sustainable communities and cities in East Africa.
              </div>
            </div>
          </div>
          <div className="bg-white h-[277px] w-[277px] rounded-full flex md:hidden justify-center items-center flex-col absolute bottom-7 left-1/2 transform -translate-x-1/2 mb-4">
            <p className="text-center text-5xl md:text-xl tracking-wide p-4 pt-6 alstoria">
              Our purpose
            </p>
          </div>
          <Link
            className=" flex justify-center items-center "
            to="/products"
          >
            <MdArrowForwardIos className=" text-2xl bg-gray-300 h-8 w-8 p-2 rounded-full cursor-pointer" />
          </Link>
        </div>
      </div>
      <div className="md:hidden text-xl flex justify-center py-12 items-center bg-[#FFD230]  quicksand-500">
        <p className="text-center w-[80%] mx-auto">
          We are a Entrepreneurship Support Organization that supports Social
          Enterprises & Impactful Start ups in East Africa that seek to make a
          positive impact on Society and the environment while still generating
          Sustainable Profits.
        </p>
      </div>
    </>
  );
};

export default PurposeHero;
