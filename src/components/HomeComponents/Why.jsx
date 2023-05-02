import React from "react";
import whypic from "../images/whypic.png";
import whatwedo from "../images/whatwedo.svg";
const Why = () => {
  return (
    <div className="bg-[#FFD230] ma py-8">
      <div className="flex flex-col-reverse md:flex-row justify-between w-[80%] mx-auto">
        <div className="flex flex-col w-[100%] bg-cover md:w-[40%] quicksand-500 text-xl md:gap-4 justify-center text-start bg-[#FFD230]">
          <p className="my-8 p-4">
            To contribute towards the growth of sustainable & Impactful
            Enterprises to Reduce Inequalities, & contribute towards the growth
            of sustainable communities and cities in East Africa.
          </p>
          <button className="bg-white w-[60%] hover:scale-105 transition-all duration-300 quicksand-700 rounded-md shadow-md shadow-gray-300 mx-16 md:mx-2 my-5 md:my-0 justify-center px-2 py-4 uppercase">
            Our Mission
          </button>
        </div>
        <div className="relative mx-auto">
          <img
            src={whypic}
            alt="whatpic"
            className="md:h-[500px] md:w-[500px] h-[300px]"
          />
          <div className="absolute top-[53%] md:top-2/3 left-[21%] md:left-[24%] alstoria text-center md:text-7xl text-5xl font-bold flex flex-col">
            <p className="md:text-5xl text-3xl">Why</p>
            <p>We Do it</p>
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

export default Why;
