import React, { useState } from "react";
import whatpic from "../images/whatpic.png";
import whatwedo from "../images/whatwedo.svg";

const What = () => {
  return (
    <div className="bg-[#FFD230]  md:py-8">
      <div className="flex flex-col-reverse md:flex-row justify-between ">
        <div className="flex flex-col  w-[90%] mx-auto bg-cover md:w-[40%] quicksand-500 text-xl md:gap-4 justify-center text-center md:text-start bg-[#FFD230]">
          <p className="my-8  p-4">
            Coaching and Mentorship Capacity Building Mbinu Enterprise Program
          </p>
          <button className="bg-white w-[60%] hover:scale-105 transition-all duration-300 quicksand-700 rounded-md shadow-md shadow-[#00000040] mx-16 md:mx-2 my-5 md:my-0 justify-center px-2 py-4 uppercase">
            Our Products
          </button>
        </div>
        <div className="relative curved-bg  mx-auto">
          <img
            src={whatpic}
            alt="whatpic"
            className="md:h-[500px] md:w-[500px] h-[300px]"
          />
          <div className="absolute top-[53%] md:top-2/3 left-[30%] md:left-[27%] alstoria text-center text-6xl font-semibold flex flex-col">
            <p className="">What</p>
            <p>We Do</p>
          </div>
        </div>
      </div>
      <style jsx>{`
        @media only screen and (max-width: 767px) {
          .curved-bg {
            background-image: url(${whatwedo});
            width: 100%;
            background-repeat: no-repeat;
            background-position: center;
            display: flex;
            border-radius: 0px 0px 150px 150px;
            justify-content: center;

            background-size: cover;
          }
        }
      `}</style>
    </div>
  );
};

export default What;
