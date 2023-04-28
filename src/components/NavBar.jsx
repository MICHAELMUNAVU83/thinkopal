import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo from "./images/logo.png";

const NavBar = () => {
  const [nav, setNav] = useState(true);
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

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className=" flex bg-transparent py-2 mx-8 justify-between items-center">
        <Link to="/" className="cursor-pointer">
          <img src={logo} alt="logo" className=" h-[40px] md:h-[80px]" />
        </Link>
        <div className="hidden md:flex gap-16 justify-center uppercase   ">
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
        <div className="md:hidden ">
          {nav ? (
            <AiOutlineClose size={25} onClick={handleNav} className=" mt-6" />
          ) : (
            <AiOutlineMenu size={25} onClick={handleNav} className="mt-6" />
          )}
        </div>
      </div>

      <div
        className={
          nav ? "md:hidden fixed  top-20 w-full h-screen bg-white/70" : "hidden"
        }
      >
        <div
          className={
            nav
              ? "fixed w-[100%] flex items-center  flex-col justify-center gap-2 sm:w-[60%] top-20 md-[45%] h-[20%] bg-white/70  ease-in duration-500"
              : "fixed left-[-100%] h-[20%] top-0 p-10 ease-in duration-500"
          }
          onClick={handleNav}
        >
          <Link
            className="transition-all duration-300 hover:scale-105 hover:border-b-2 hover:border-white  cursor-pointer"
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
