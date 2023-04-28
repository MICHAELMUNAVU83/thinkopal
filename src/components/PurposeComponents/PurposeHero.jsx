import React, { useState, useEffect } from "react";
import background2 from "../images/background2.png";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";
import unt from "../images/unt.png";
import homemobi from "../images/Vector.png";
const PurposeHero = () => {
  const [background, setBackground] = useState(background2);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setBackground(homemobi);
      } else {
        setBackground(background2);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundColor: "#FFD230",
      }}
      className="h-[100vh] bg-cover flex justify-between "
    >
      <Link className=" flex justify-center items-center pl-4 " to="/">
        <MdArrowBackIosNew className=" text-2xl bg-gray-300 h-8 w-8 p-2 rounded-full cursor-pointer" />
      </Link>
      <div className="w-10/12 hidden md:flex flex-col   justify-end items-end ">
        <div className="relative">
          <div className="absolute top-1/2 left-20 w-[28%] ">
            <p className="text-6xl font-bold alstoria">Our Purpose</p>
            To contribute towards the growth of sustainable & Impactful
            Enterprises to Reduce Inequalities, & contribute towards the growth
            of sustainable communities and cities in East Africa.
          </div>
          <img src={unt} alt="unt" className="hidden md:h-[80vh] md:block  " />
        </div>
      </div>
      <div className="bg-white h-[277px] w-[277px] rounded-full flex md:hidden justify-center items-center flex-col absolute bottom-7 left-1/2 transform -translate-x-1/2 mb-4">
        <p className="text-center text-5xl md:text-xl tracking-wide p-4 pt-6 alstoria">
          Our purpose
        </p>
      </div>
      <Link className=" flex justify-center items-center pr-4 " to="/products">
        <MdArrowForwardIos className=" text-2xl bg-gray-300 h-8 w-8 p-2 rounded-full cursor-pointer" />
      </Link>
    </div>
  );
};

export default PurposeHero;
