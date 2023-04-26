import React from "react";
import background2 from "../images/background2.png";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";
import unt from "../images/unt.png";
const PurposeHero = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${background2})`,
      }}
      className="h-[90vh] bg-cover flex justify-between "
    >
      <Link className=" flex justify-center items-center pl-4 " to="/">
        <MdArrowBackIosNew className=" text-2xl bg-gray-300 h-8 w-8 p-2 rounded-full cursor-pointer" />
      </Link>
      <div className="w-10/12 flex flex-col   justify-end items-end ">
        <div className="relative">
          <div className="absolute top-1/2 left-20 w-[28%] ">
            <p className="text-6xl font-bold alstoria">Our Purpose</p>
            To contribute towards the growth of sustainable & Impactful
            Enterprises to Reduce Inequalities, & contribute towards the growth
            of sustainable communities and cities in East Africa.
          </div>
          <img src={unt} alt="unt" className="h-[80vh] " />
        </div>
      </div>
      <Link className=" flex justify-center items-center pr-4 " to="/products">
        <MdArrowForwardIos className=" text-2xl bg-gray-300 h-8 w-8 p-2 rounded-full cursor-pointer" />
      </Link>
    </div>
  );
};

export default PurposeHero;
