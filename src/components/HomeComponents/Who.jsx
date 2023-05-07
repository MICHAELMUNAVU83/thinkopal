import React from "react";
import whopic from "../images/whopic.png";
import whatwedo from "../images/whatwedo.svg";

const Who = () => {
  return (
    <div className="bg-[#FFD230]  md:py-8">
      <div className="flex flex-col-reverse md:flex-row justify-between ">
        <div className="flex flex-col  w-[90%] mx-auto bg-cover md:w-[504px] quicksand-500 text-[20px] leading-[25.5px] md:gap-4 justify-center text-center md:text-start bg-[#FFD230]">
          <p className="my-8  p-4">
            We are a Entrepreneurship Support Organization that supports Social
            Enterprises & Impactful Start ups in East Africa that seek to make a
            positive impact on Society and the environment while still
            generating Sustainable Profits.
          </p>
          <button className="bg-white h-[57px] w-[225px] cursor-pointer hover:scale-105 transition-all duration-300 quicksand-700 text-xl rounded-md shadow-md shadow-[#00000040] mx-16 md:mx-2 my-5 md:my-0 justify-center  uppercase">
            Our Purpose
          </button>
        </div>
        <div className="relative curved-bg  mx-auto">
          <img
            src={whopic}
            alt="whatpic"
            className="md:h-[500px] md:w-[500px] h-[300px]"
          />
          <div className="absolute top-[53%] md:top-2/3 left-[30%] md:left-[27%] alstoria text-center md:text-6xl text-5xl font-semibold flex flex-col">
            <p className="">Who</p>
            <p>We Are</p>
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

export default Who;
