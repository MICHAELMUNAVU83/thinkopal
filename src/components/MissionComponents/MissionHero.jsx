import React, { useEffect, useState, useLocation } from "react";
import background3 from "../images/background3.png";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";
import unt from "../images/unt.png";
import homemobi from "../images/Vector.png";
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
        backgroundImage: `url(${background})`,
        backgroundColor: "#FFD230",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="h-[90vh] bg-cover flex justify-between "
    >
      <Link className=" flex justify-center items-center pl-4 " to="/purpose">
        <MdArrowBackIosNew className=" text-2xl bg-gray-300 h-8 w-8 p-2 rounded-full cursor-pointer" />
      </Link>
      <div className="w-10/12 hidden md:flex flex-col   justify-end items-end ">
        <div className="relative">
          <div className="absolute text-xl top-1/2 left-20 w-[28%] ">
            <p className="text-6xl font-bold alstoria">Our Mission</p>
            <p className="quicksand-500">
              To contribute towards the growth of sustainable & Impactful
            </p>
            <p className="quicksand-500">
              Enterprises to Reduce Inequalities, & contribute towards the
            </p>
            <p className="quicksand-500">
              growth of sustainable communities and cities in East Africa.
            </p>
          </div>
          <img src={unt} alt="unt" className="h-[80vh] " />
        </div>
      </div>
      <div className="bg-white h-[277px] w-[277px] rounded-full flex md:hidden justify-center items-center flex-col absolute bottom-7 left-1/2 transform -translate-x-1/2 mb-4">
        <p className="text-center text-5xl md:text-xl tracking-wide p-4 pt-6 alstoria">
          Our Mission
        </p>
      </div>
      {/* <p className=" flex items-end pt-28">
        To contribute towards the growth of sustainable & Impactful Enterprises
        to Reduce Inequalities, & contribute towards the growth of sustainable
        communities and cities in East Africa.
      </p> */}
      <Link className=" flex justify-center items-center pr-4 " to="/products">
        <MdArrowForwardIos className=" text-2xl bg-gray-300 h-8 w-8 p-2 rounded-full cursor-pointer" />
      </Link>
    </div>
  );
};

export default MissionHero;
