import React, { useState, useEffect } from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";
import purposebackground from "../images/backgrounds/purposebackground.jpg";

const PurposeHero = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${purposebackground})`,
          backgroundColor: "#FFD230",
        }}
        className="h-[100vh] bg-cover bg-[70%]  md:bg-center "
      >
        <div className="flex bg-white/30 justify-between h-[100vh] p-4">
          <Link className=" flex justify-center items-center  " to="/">
            <MdArrowBackIosNew className=" text-2xl bg-gray-300 h-8 w-8 p-2 rounded-full cursor-pointer" />
          </Link>
          <div className="w-10/12 hidden md:flex flex-col   justify-end items-end ">
            <div className="bg-white h-[400px] w-[400px] rounded-full flex  justify-center items-center flex-col absolute bottom-7 left-1/2 transform -translate-x-1/2 mb-4">
              <p className="text-5xl font-bold alstoria">Our Purpose</p>
              <div className="quicksand-500  p-8 text-center">
                To contribute towards the growth of sustainable & Impactful
                Enterprises to Reduce Inequalities, & contribute towards the
                growth of sustainable communities and cities in East Africa.
              </div>
            </div>
          </div>
          <div className="bg-white/70 h-[277px] w-[277px] rounded-full flex md:hidden justify-center items-center flex-col absolute bottom-7 left-1/2 transform -translate-x-1/2 mb-4">
            <p className="text-center text-5xl md:text-xl tracking-wide p-4 pt-6 alstoria">
              Our purpose
            </p>
          </div>
          <Link className=" flex justify-center items-center " to="/services">
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
