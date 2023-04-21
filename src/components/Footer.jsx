import React from "react";
import lightup from "./images/lightup.png";
import athari from "./images/athari.png";
import logo from "./images/logo.png";
import { BsInstagram } from "react-icons/bs";
import { BsMedium } from "react-icons/bs";
import { ImFacebook2 } from "react-icons/im";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div className=" flex py-24 flex-col gap-4">
      <div className="flex  px-24 justify-between items-center ">
        <div className="text-7xl">Our Partners</div>
        <div>
          <img src={lightup} alt="lightup" className="h-[97px]" />
        </div>
        <div>
          <img src={athari} alt="athari" className="h-[174px]" />
        </div>
      </div>
      <p
        style={{
          borderBottom: "3px solid #FFD230",
        }}
      />

      <div className="px-48 my-8 flex justify-between items-center ">
        <BsInstagram className="text-5xl" />
        <BsMedium className="text-5xl" />
        <ImFacebook2 className="text-5xl" />
        <BsLinkedin className="text-5xl" />
      </div>
      <div className="flex px-24  py-8 justify-between items-center bg-[#FFD230] ">
        <div className="text-xl">Cookie Policy</div>
        <div>
          <img src={lightup} alt="lightup" className="h-[97px]" />
        </div>
        <div>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
