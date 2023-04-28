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
        <div className="text-7xl alstoria font-bold">Our Partners</div>
        <div>
          <img src={lightup} alt="lightup" className="h-[97px]" />
        </div>
      </div>
      <p
        style={{
          borderBottom: "3px solid #FFD230",
        }}
      />

      <div className=" my-8 gap-12 flex justify-around md:w-[80%] w-[70%] mx-auto flex-wrap items-center ">
        <BsInstagram className="text-5xl" />

        <BsTwitter className="text-5xl" />
        <BsLinkedin className="text-5xl" />
        <SiGmail className="text-5xl" />
        <BsMedium className="text-5xl" />
      </div>
      <div className="flex md:px-24 flex-col md:flex-row md:py-8   py-24 gap-8 md:gap-0 justify-between items-center bg-[#FFD230] ">
        <div className="text-xl text-center flex flex-col gap-4">
          <div className="flex gap-2 quicksand-400 justify-center">
            <IoCall className="text-2xl" />
            <p>+254798 543030</p>
          </div>
          <p className="border-b-2 border-black w-[100%]" />
          <p className="quicksand-700">Privacy Policy</p>
        </div>
        <div>
          <img src={logo} alt="lightup" className="h-[97px]" />
        </div>
        <div className="text-xl text-center flex flex-col gap-4">
          <div className="flex gap-2 justify-center">
            <HiLocationMarker size={60} />
            <div className="flex text-start flex-col quicksand-400 justify-between">
              <p>WestPark Towers,</p>
              <p>Westlands. </p>
              <p>Nairobi , Kenya</p>
            </div>
          </div>
          <p className="border-b-2 border-black w-[100%]" />
          <p className="quicksand-700">Cookie Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
