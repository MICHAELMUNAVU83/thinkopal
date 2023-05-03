import React from "react";
import lightup from "./images/lightup.png";
import logo from "./images/logo.png";
import { BsInstagram } from "react-icons/bs";
import { BsMedium } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { IoCall } from "react-icons/io5";
import { HiLocationMarker } from "react-icons/hi";

const Footer = () => {
  return (
    <div className=" flex  flex-col gap-4">
      <div className="flex md:p-24  md:flex-row flex-col gap-4 justify-between items-center ">
        <div className=" mt-4 text-4xl md:text-7xl alstoria font-bold">
          Our Partners
        </div>

        <div>
          <img src={lightup} alt="lightup" className="md:h-[97px] h-[40px]" />
        </div>
      </div>
      <p
        className="w-[90%] mx-auto"
        style={{
          borderBottom: "3px solid #FFD230",
        }}
      />
      <div className="flex md:hidden  flex-col justify-center items-center ">
        <img src={logo} alt="lightup" className="h-[97px]" />
      </div>

      <div className=" md:my-8 gap-4 flex justify-around md:w-[80%] w-[70%] mx-auto flex-wrap items-center ">
        <a
          href="https://www.instagram.com/thinkopal_solutions/?igshid=YmMyMTA2M2Y%3D"
          target="_blank"
          rel="noreferrer"
          className="hover:scale-105 transition-all duration-300"
        >
          <BsInstagram className="text-2xl md:text-5xl" />
        </a>
        <a
          href="https://twitter.com/ThinkOpal"
          target="_blank"
          rel="noreferrer"
          className="hover:scale-105 transition-all duration-300"
        >
          <BsTwitter className="text-2xl md:text-5xl" />
        </a>
        <a
          href="https://www.linkedin.com/company/think-opal-solutions/"
          target="_blank"
          rel="noreferrer"
          className="hover:scale-105 transition-all duration-300"
        >
          <BsLinkedin className="text-2xl md:text-5xl" />
        </a>
        <a
          href="mailto:mailto:info@thinkopal.com"
          target="_blank"
          rel="noreferrer"
          className="hover:scale-105 transition-all duration-300"
        >
          <SiGmail className="text-2xl md:text-5xl" />
        </a>
        <a
          href="https://medium.com/@thinkopal"
          target="_blank"
          rel="noreferrer"
          className="hover:scale-105 transition-all duration-300"
        >
          <BsMedium className="text-3xl md:text-5xl" />
        </a>
      </div>
      <div className="flex md:px-24  flex-row md:py-8   md:py-12 gap-8 md:gap-0 md:justify-between justify-around items-center bg-white md:bg-[#FFD230] ">
        <div className="md:text-xl text-xs justify-center text-center flex flex-col gap-4">
          <a
            className="flex gap-2 quicksand-400 justify-center"
            rel="noopener noreferrer"
            href="tel:0798543030"
          >
            <IoCall className="text-2xl" />
            <p>+254798 543030</p>
          </a>
          <p className="border-b-2 md:block hidden border-black w-[100%]" />
          <p className="quicksand-700 md:block hidden">Privacy Policy</p>
        </div>
        <div className="md:block hidden">
          <img src={logo} alt="lightup" className="h-[97px]" />
        </div>
        <div className="text-xl text-center flex flex-col gap-4">
          <div className="flex items-center md:text-xl text-xs gap-2 justify-center">
            <HiLocationMarker className="md:text-7xl text-5xl " />
            <div className="flex text-start flex-col quicksand-400 justify-between">
              <p>WestPark Towers,</p>
              <p>Westlands. </p>
              <p>Nairobi , Kenya</p>
            </div>
          </div>
          <p className="border-b-2 md:block hidden border-black w-[100%]" />
          <p className="quicksand-700 md:block hidden">Cookie Policy</p>
        </div>
      </div>

      <div className="bg-[#FFD230] md:hidden quicksand-500 flex justify-around items-center p-2 text-sm">
        <p>Privacy Policy</p>
        <p>Cookie Policy</p>
      </div>
    </div>
  );
};

export default Footer;
