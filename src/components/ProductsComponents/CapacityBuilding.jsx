import React from "react";
import capacitypic from "../images/coaching.png";
import capacity1 from "../images/capacity1.png";
import capacity2 from "../images/capacity2.png";
import capacity3 from "../images/capacity3.png";

import { Splide, SplideSlide } from "@splidejs/react-splide";

import "../splide.min.css";
const CapacityBuilding = () => {
  return (
    <div className="bg-[#FFD230] py-8 ">
      <div className="  flex justify-between w-[80%] mx-auto">
        <div className="flex flex-col  text-xl gap-1 justify-center w-[40%] text-start">
          <p>
            Our capacity building programs provide entrepreneurs with the
            technical and operational skills they need to manage their
            businesses more effectively and efficiently. We offer training in
            areas such as finance, marketing, and project management, giving
            entrepreneurs the tools they need to take their businesses to the
            next level. We provide training by transferring knowledge and skills
            in the following areas.
          </p>
        </div>
        <div className="relative">
          <img
            src={capacitypic}
            alt="whatpic"
            className="h-[500px] w-[500px]"
          />
          <div className="absolute top-2/3 left-[30%] text-center alstoria  text-6xl font-bold flex flex-col ">
            <p>Capacity</p>
            <p >Building</p>
          </div>
        </div>
      </div>

      <div className=" w-[85%] mx-auto mt-8">
        <Splide
          className="px-16"
          options={{
            type: "loop",
            perPage: 3,
            perMove: 1,
            pagination: true,

            margin: "0.5rem",
            gap: "1rem",

            arrows: true,
            autoplay: true,
            interval: 5000,
          }}
        >
          <SplideSlide>
            <div className="flex justify-around items-center rounded-lg p-4  bg-white h-[130px]  ">
              <img src={capacity1} alt="" className="h-[100px] w-[100px]" />
              <p className="font-bold w-[70%]">
                Digital Marketing & Communication
              </p>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="flex justify-around items-center rounded-lg p-4  bg-white h-[130px]  ">
              <img src={capacity2} alt="" className="h-[100px] w-[100px]" />
              <p className="font-bold ">Impact Measurement & Reporting</p>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="flex justify-center items-center rounded-lg p-4 w-[50%] mx-auto  bg-white h-[130px]  ">
              <img src={capacity3} alt="" className="h-[100px] w-[100px]" />
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
};

export default CapacityBuilding;
