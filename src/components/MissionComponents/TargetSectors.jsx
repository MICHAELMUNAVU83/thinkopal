import React from "react";
import targetpic from "../images/targetsectorspic.png";
import "../splide.min.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import blueeconomyicon from "../images/icons/blueeconomyicon.png";
import cleanenergyicon from "../images/icons/cleanenergyicon.png";
import educationicon from "../images/icons/educationicon.png";
import sustainanblefashionicon from "../images/icons/sustainablefashionicon.png";
import sustainabletourismicon from "../images/icons/sustainabletourismicon.png";
import technologyicon from "../images/icons/technologyicon.png";
import wastemanagementicon from "../images/icons/wastemanagementicon.png";
import healthcareicon from "../images/icons/healthcareicon.png";
const TargetSectors = () => {
  const sectors = [
    {
      id: 1,
      name: "HealthCare",
      icon: healthcareicon,
    },
    {
      id: 2,
      name: "Education",
      icon: educationicon,
    },
    {
      id: 3,
      name: "Technology",
      icon: technologyicon,
    },
    {
      id: 4,
      name: "Clean Energy & Environment",
      icon: cleanenergyicon,
    },
    {
      id: 5,
      name: "Financial Inclusion",
      icon: blueeconomyicon,
    },
    {
      id: 6,
      name: "Sustainable Tourism",
      icon: sustainabletourismicon,
    },
    {
      id: 7,
      name: "Sustainable Fashion",
      icon: sustainanblefashionicon,
    },
    {
      id: 8,
      name: "Waste Management",
      icon: wastemanagementicon,
    },
    {
      id: 9,
      name: "Blue Economy",
      icon: blueeconomyicon,
    },
  ];
  return (
    <div className="py-2 bg-[#FFD230] ">
      <div className=" flex flex-col-reverse mt-10 md:flex-row justify-around mx-auto w-[80%]">
        <Splide
          className="px-16 flex w-[100%]  md:hidden"
          options={{
            type: "loop",
            perPage: 1,
            perMove: 1,
            pagination: false,

            margin: "0.5rem",
            gap: "0.5rem",

            arrows: true,
            autoplay: true,
            interval: 2000,
          }}
        >
          {sectors.map((sector) => (
            <SplideSlide>
              <div
                className="flex gap-2 p-4 justify-center  items-center   bg-white h-[90px]  "
                style={{
                  borderRadius: "10px",
                }}
              >
                <img src={sector.icon} alt="" className=" " />
                <p className="text-xl quicksand-500 text-center">
                  {sector.name}
                </p>
              </div>
            </SplideSlide>
          ))}
        </Splide>

        <div className="hidden md:flex  text-2xl gap-1  text-start  justify-center flex-col">
          <ul className="list-disc quicksand-500">
            {sectors.map((sector) => (
              <li key={sector.id} className="my-1">
                {sector.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative hidden md:block">
          <img
            src={targetpic}
            alt="whatpic"
            className="md:h-[500px] md:w-[500px]"
          />
          <div className="absolute top-1/4 left-[20%] md:top-2/3 md:left-[29%] alstoria text-center  text-7xl font-bold flex flex-col ">
            <p className="text-5xl">Target</p>
            <p>Sectors</p>
          </div>
        </div>
        <div className="md:hidden mt-8 text-center  quicksand-500  flex flex-col justify-center items-center ">
          <p className="my-8">
            To contribute towards the growth of sustainable & Impactful
            Enterprises to Reduce Inequalities, & contribute towards the growth
            of sustainable communities and cities in East Africa.
          </p>
          <div className="md:hidden alstoria  text-center  text-4xl font-bold flex flex-col justify-center items-center ">
            <p>Target</p>

            <p className="text-5xl">Sectors</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TargetSectors;
