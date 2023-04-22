import React from "react";
import background1 from "../images/background1.png";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";
const HomeHero = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${background1})`,
      }}
      className="h-[80vh] bg-cover flex justify-between p-4"
    >
      <Link className="w-1/10 flex justify-center items-center " to="/products">
        <MdArrowBackIosNew className=" text-2xl bg-gray-300 h-8 w-8 p-2 rounded-full cursor-pointer" />
      </Link>
      <div className="w-8/10 flex justify-center items-center ">vghjk</div>
      <Link className="w-1/10 flex justify-center items-center " to="/purpose">
        <MdArrowForwardIos className=" text-2xl bg-gray-300 h-8 w-8 p-2 rounded-full cursor-pointer" />
      </Link>
    </div>
  );
};

export default HomeHero;
