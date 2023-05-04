import React, { useState, useEffect, useLocation } from "react";
import background1 from "../images/background1.png";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import unt from "../images/unt.png";
import homemobi from "../images/Vector.png";
import { Link } from "react-router-dom";
const BlogHero = () => {
  const [background, setBackground] = useState(background1);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setBackground(homemobi);
      } else {
        setBackground(background1);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [location]);
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
      }}
      className="h-[90vh] bg-cover flex justify-between "
    >
      <Link className=" flex justify-center items-center pl-4 " to="/products">
        <MdArrowBackIosNew className=" text-2xl bg-gray-300 h-8 w-8 p-2 rounded-full cursor-pointer" />
      </Link>
      <div className="w-10/12 hidden md:flex flex-col   justify-end items-end ">
        <div className="relative">
          <div className="absolute top-1/2 left-20 w-[28%] ">
            <p className="text-5xl font-bold alstoria">Impact Series</p>
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
      <div className="bg-white h-[277px] w-[277px] rounded-full flex md:hidden justify-center items-center flex-col absolute bottom-7 left-1/2 transform -translate-x-1/2 mb-4">
        <p className="text-center text-5xl md:text-xl tracking-wide p-4 pt-6 alstoria">
          Our purpose
        </p>
      </div>
      <Link className=" flex justify-center items-center pr-4 " to="/clients">
        <MdArrowForwardIos className=" text-2xl bg-gray-300 h-8 w-8 p-2 rounded-full cursor-pointer" />
      </Link>
    </div>
  );
};

export default BlogHero;
