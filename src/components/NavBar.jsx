import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo from "./images/logo.png";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 150) {
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
        <Link to="/" className="cursor-pointer">
          <img src={logo} alt="logo" className=" h-[80px]" />
        </Link>
        <div className="flex gap-16 justify-center uppercase   ">
          <Link
            className="transition-all duration-300 hover:scale-105 hover:border-b-2 hover:border-black  cursor-pointer"
            to="/purpose"
          >
            Our Purpose
          </Link>
          <Link
            className="transition-all duration-300 hover:scale-105 hover:border-b-2 hover:border-black  cursor-pointer"
            to="/mission"
          >
            Our mission
          </Link>
          <Link
            className="transition-all duration-300 hover:scale-105 hover:border-b-2 hover:border-black  cursor-pointer"
            to="/products"
          >
            Our Products
          </Link>
          <Link
            to="/blog"
            className="transition-all duration-300 hover:scale-105 hover:border-b-2 hover:border-black  cursor-pointer"
          >
            Our Blog
          </Link>
          <Link
            to="/clients"
            className="transition-all duration-300 hover:scale-105 hover:border-b-2 hover:border-black  cursor-pointer"
          >
            Our Clients
          </Link>
          <Link
            className="transition-all duration-300 hover:scale-105 hover:border-b-2 hover:border-black  cursor-pointer"
            to="/contact"
          >
            Contact US
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
