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
      if (window.scrollY >= 90) {
        setColor("#ffffff");
        setTextColor("#000");
      } else {
        setColor("transparent");
        setTextColor("#ffffff");
      }
    };
    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
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
            Client Portfolio
          </p>
          <p className="transition-all duration-300 hover:scale-105 hover:border-b-2 hover:border-black  cursor-pointer">
            Contact US
          </p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
