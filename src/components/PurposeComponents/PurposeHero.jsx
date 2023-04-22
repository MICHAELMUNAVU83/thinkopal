import React from "react";
import background2 from "../images/background2.png";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";
const PurposeHero = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${background2})`,
      }}
      className="h-[80vh] bg-cover flex justify-between p-4"
    >
      <Link className="w-1/10 flex justify-center items-center " to="/">
        <MdArrowBackIosNew className=" text-2xl bg-gray-300 h-8 w-8 p-2 rounded-full cursor-pointer" />
      </Link>
      <div className="w-8/10 flex justify-center items-center ">vghjk</div>
      <Link className="w-1/10 flex justify-center items-center " to="/mission">
        <MdArrowForwardIos className=" text-2xl bg-gray-300 h-8 w-8 p-2 rounded-full cursor-pointer" />
      </Link>
    </div>
  );
};

export default PurposeHero;
