import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo from "./images/logo.png";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("black");
  const [textColor, setTextColor] = useState("white");

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 80) {
        setColor("white");
        setTextColor("black");
      } else {
        setColor("black");
        setTextColor("white");
      }
    };
    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    <div className="flex bg-transparent py-2 mx-8 justify-between items-center">
      <div>
        <img src={logo} alt="logo" className=" h-[80px]" />
      </div>
      <div className="flex gap-16 justify-center uppercase   ">
        <p className="transition-all duration-300 hover:scale-105 hover:border-b-2 hover:border-black  cursor-pointer">
          Our Purpose
        </p>
        <p className="transition-all duration-300 hover:scale-105 hover:border-b-2 hover:border-black  cursor-pointer">
          Our mission
        </p>
        <p className="transition-all duration-300 hover:scale-105 hover:border-b-2 hover:border-black  cursor-pointer">
          Our Products
        </p>
        <p className="transition-all duration-300 hover:scale-105 hover:border-b-2 hover:border-black  cursor-pointer">
          Our Blog
        </p>
        <p className="transition-all duration-300 hover:scale-105 hover:border-b-2 hover:border-black  cursor-pointer">
          Cient Portfolio
        </p>
        <p className="transition-all duration-300 hover:scale-105 hover:border-b-2 hover:border-black  cursor-pointer">
          Contact US
        </p>
      </div>
    </div>
  );
};

export default NavBar;
