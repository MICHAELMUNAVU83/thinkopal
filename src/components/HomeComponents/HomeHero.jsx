import React, { useState, useEffect, useLocation } from "react";
import background1 from "../images/background1.png";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import unt from "../images/unt.png";
import { Link } from "react-router-dom";
import cdmssmall from "../images/cdmssmall.png";
import homemobi from "../images/Vector.png";
import bghosi from "../images/bghosi.jpg";
import bghosisemi from "../images/bghosisemi.png";

const HomeHero = () => {
  const [background, setBackground] = useState(homemobi);
  // const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setBackground(background1);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("load", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", handleResize);
    };
  }, [location]);

  return (
    <div
      style={{
        backgroundImage: `url(${bghosi})`,
        backgroundColor: "#FFD230",
      }}
      className="h-[100vh] bg-cover md:bg-center bg-no-repeat bg-[40%]  "
    >
      <div className="flex justify-between h-[100vh] ">
        <Link className="flex justify-center items-center pl-4 " to="/products">
          <MdArrowBackIosNew className=" text-2xl bg-gray-300 h-8 w-8 p-2 rounded-full cursor-pointer" />
        </Link>
        <div className="w-10/12 hidden md:flex flex-col justify-end items-end ">
          <div className="bg-white h-[500px] w-[500px] rounded-full flex  justify-center items-center absolute flex-col  bottom-7 left-1/2 transform -translate-x-1/2 mb-4">
            <div className=" quicksand-700   top-1/2 left-24 text-3xl">
              <p>We helped a health</p>
              <p>start-up deliver</p>
              <p>quality affordable</p>
              <p>patient experiences</p>
              <p className="border-b-2 border-black w-[100%] my-2"></p>
              <img src={cdmssmall} alt="cdmssmall" className=" h-[77px] " />
            </div>
          </div>
        </div>
        <div className="bg-white h-[277px] w-[277px] rounded-full flex md:hidden justify-center items-center flex-col absolute bottom-7 left-1/2 transform -translate-x-1/2 mb-4">
          <p className="text-center border-b-2 border-gray-500 w-3/4  text-xl tracking-wide p-4 pt-6 ">
            We helped a health start-up deliver affordable high quality
            affordable patient experiences
          </p>
          <img src={cdmssmall} alt="cdmssmall" className="h-[77px]" />
        </div>
        <Link className="flex justify-center items-center pr-4 " to="/purpose">
          <MdArrowForwardIos className=" text-2xl bg-gray-300 h-8 w-8 p-2 rounded-full cursor-pointer" />
        </Link>
      </div>
    </div>
  );
};

export default HomeHero;
