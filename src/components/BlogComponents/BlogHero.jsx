import React from "react";
import background1 from "../images/background1.png";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import unt from "../images/unt.png";
import { Link } from "react-router-dom";
const BlogHero = () => {
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
          <div className="absolute top-1/2 left-20 w-[28%] ">
            <p className="text-5xl font-bold">Impact Series</p>
            <p>
              Join the impact revolution with our weekly blog, featuring social
            </p>
            <p>
              entrepreneurs creating positive change. Educate, inspire, and
              empower yourself
            </p>
            <p>
              to make a difference . Discover Africa's changemakers and take
              ownership of their stories.
            </p>
          </div>
          <img src={unt} alt="unt" className="h-[80vh] = " />
        </div>
      </div>
      <Link className=" flex justify-center items-center pr-4 " to="/clients">
        <MdArrowForwardIos className=" text-2xl bg-gray-300 h-8 w-8 p-2 rounded-full cursor-pointer" />
      </Link>
    </div>
  );
};

export default BlogHero;
