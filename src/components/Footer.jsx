import React from "react";
import lightup from "./images/lightup.png";
import athari from "./images/athari.png";
import logo from "./images/logo.png";
import { BsInstagram } from "react-icons/bs";
import { BsMedium } from "react-icons/bs";
import { ImFacebook2 } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { IoCall } from "react-icons/io5";
import { HiLocationMarker } from "react-icons/hi";

const Footer = () => {
  return (
    <div className=" flex  flex-col gap-4">
      <div className="flex p-24 justify-between items-center ">
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

      <div className="px-48 my-8 flex justify-between items-center ">
        <BsInstagram className="text-5xl" />

        <BsTwitter className="text-5xl" />
        <BsLinkedin className="text-5xl" />
        <SiGmail className="text-5xl" />
        <BsMedium className="text-5xl" />
      </div>
      <div className="flex px-24  py-8 justify-between items-center bg-[#FFD230] ">
        <div className="text-xl text-center flex flex-col gap-4">
          <div className="flex gap-2 justify-center">
            <IoCall className="text-2xl" />
            <p>+254798 543030</p>
          </div>
          <p className="border-b-2 border-black w-[100%]" />
          <p>Privacy Policy</p>
        </div>
        <div>
          <img src={logo} alt="lightup" className="h-[97px]" />
        </div>
        <div className="text-xl text-center flex flex-col gap-4">
          <div className="flex gap-2 justify-center">
            <HiLocationMarker size={60} />
            <div className="flex text-start flex-col justify-between">
              <p>WestPark Towers,</p>
              <p>Westlands. </p>
              <p>Nairobi , Kenya</p>
            </div>
          </div>
          <p className="border-b-2 border-black w-[100%]" />
          <p>Cookie Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
