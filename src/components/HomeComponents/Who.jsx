import React from "react";
import whopic from "../images/whopic.png";
import whatwedo from "../images/whatwedo.svg";

const Who = () => {
  return (
    <div className="bg-[#FFD230] ma py-8">
      <div className="flex flex-col-reverse md:flex-row justify-between w-[80%] mx-auto">
        <div className="flex flex-col w-[100%] bg-cover md:w-[40%] quicksand-500 text-xl md:gap-4 justify-center text-start bg-[#FFD230]">
          <p className="my-8 p-4">
            We are a Entrepreneurship Support Organization that supports Social
            Enterprises & Impactful Start ups in East Africa that seek to make a
            positive impact on Society and the environment while still
            generating Sustainable Profits.
          </p>
          <button className="bg-white w-[60%] hover:scale-105 transition-all duration-300 quicksand-700 rounded-md shadow-md shadow-gray-300 mx-16 md:mx-2 my-5 md:my-0 justify-center px-2 py-4 uppercase">
            Our Purpose
          </button>
        </div>
        <div className="relative">
          <img src={whopic} alt="whatpic" className="h-[500px] w-[500px]" />
          <div className="absolute top-1/2 md:top-2/3 left-[13%] md:left-[27%] alstoria text-center text-7xl font-bold flex flex-col">
            <p className="text-5xl">Who</p>
            <p>We Are</p>
          </div>
        </div>
      </div>
      <style jsx>{`
        @media only screen and (max-width: 767px) {
          .ma {
            background-image: url(${whatwedo});
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
          }
        }
      `}</style>
    </div>
  );
};

export default Who;
