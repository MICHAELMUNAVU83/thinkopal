import React, { useEffect, useState, useLocation } from "react";
import background3 from "../images/background3.png";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";
import unt from "../images/unt.png";
import homemobi from "../images/Vector.png";
import bgagrisemi from "../images/bgagrisemi.png";
import bgagri from "../images/bgagri.jpg";
const MissionHero = () => {
  const [background, setBackground] = useState(homemobi);
  // const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setBackground(homemobi);
      } else {
        setBackground(background3);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("load", handleResize);
    // load background when pages changes from purpose to mission
    window.addEventListener("pageshow", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", handleResize);
      window.removeEventListener("pageshow", handleResize);
    };
  }, [location]);
  return (
    <div
      style={{
        backgroundImage: `url(${bgagri})`,
        backgroundColor: "#FFD230",
      }}
      className="h-[100vh] w-[100%] bg-cover bg-center flex justify-between "
    >
      <div className="flex justify-between w-[100%] h-[100vh]  ">
        <Link className=" flex justify-center items-center pl-4 " to="/purpose">
          <MdArrowBackIosNew className=" text-2xl bg-gray-300 h-8 w-8 p-2 rounded-full cursor-pointer" />
        </Link>
       
        <div className="bg-white h-[277px] w-[277px] rounded-full flex md:hidden justify-center items-center flex-col absolute bottom-7 left-1/2 transform -translate-x-1/2 mb-4">
          <p className="text-center text-5xl md:text-xl tracking-wide p-4 pt-6 alstoria">
            Our Mission
          </p>
        </div>

        <Link
          className=" flex justify-center items-center pr-4 "
          to="/products"
        >
          <MdArrowForwardIos className=" text-2xl bg-gray-300 h-8 w-8 p-2 rounded-full cursor-pointer" />
        </Link>
      </div>
    </div>
  );
};

export default MissionHero;
