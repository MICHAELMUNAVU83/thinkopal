import React from "react";
import whypic from "../images/whypic.png";
import whatwedo from "../images/whatwedo.svg";
const Why = () => {
  return (
    <div className="bg-[#FFD230]  md:py-8">
      <div className="flex flex-col-reverse md:flex-row justify-between ">
        <div className="flex flex-col  w-[90%] mx-auto bg-cover md:w-[40%] quicksand-500 text-xl md:gap-4 justify-center text-center md:text-start bg-[#FFD230]">
          <p className="my-8  p-4">
            To contribute towards the growth of sustainable & Impactful
            Enterprises to Reduce Inequalities, & contribute towards the growth
            of sustainable communities and cities in East Africa.
          </p>
          <button className="bg-white w-[225px] hover:scale-105 transition-all duration-300 quicksand-700 rounded-md shadow-md shadow-[#00000040] mx-16 md:mx-2 my-5 md:my-0 justify-center px-2 py-4 uppercase">
            Our Mission
          </button>
        </div>
        <div className="relative curved-bg  mx-auto">
          <img
            src={whypic}
            alt="whatpic"
            className="md:h-[500px] md:w-[500px] h-[300px]"
          />
          <div className="absolute top-[53%] md:top-2/3 left-[28%] md:left-[27%] alstoria text-center md:text-6xl text-5xl font-bold flex flex-col">
            <p className="">Why</p>
            <p>We Do It</p>
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

export default Why;
