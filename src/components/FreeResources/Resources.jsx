import React from "react";
import freeresourcepic from "../images/freeresourcepic.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import curvedresourceimg from "../images/curvedresource.png";
import "../splide.min.css";
const Resources = () => {
  const resources = [
    {
      id: 1,
      name1: "Step by Step ",
      name2: "Guide CrowdFunding Your Small Business",
      type: "PDF",
      image: freeresourcepic,
      curvedimg: curvedresourceimg,
    },
    {
      id: 2,
      name1: "Step by Step ",
      name2: "Guide CrowdFunding Your Small Business",
      type: "PDF",
      image: freeresourcepic,
      curvedimg: curvedresourceimg,
    },
    {
      id: 3,
      name1: "Step by Step ",
      name2: "Guide CrowdFunding Your Small Business",
      type: "PDF",
      image: freeresourcepic,
      curvedimg: curvedresourceimg,
    },
  ];

  return (
    <div className="bg-[#FFD230] py-32">
      <div className="hidden md:flex flex-col">
        <div className="w-[80%] mb-8 gap-4 md:mx-auto md:flex md:justify-center md:items-center">
          <h1 className="text-5xl flex text-center items-center alstoria">
            Free <p>Resources</p>
          </h1>
          <p className="md:border-b-2 md:border-white h-[10px] text-center items-center  w-[70%]" />
        </div>

        <div>
          {resources.map((resource) => (
            <div className="w-[80%] mx-auto my-8 flex justify-between">
              <img src={resource.image} alt="freeresourcepic" className=" object-cover" />
              <div className="text-end flex flex-col gap-4">
                <h1 className="text-4xl font-bold">{resource.name1}</h1>
                <h1 className="text-4xl font-bold">{resource.name2}</h1>
                <p>RESOURCE TYPE : {resource.type}</p>
                <div className="flex justify-end items-end">
                  <button className="bg-white w-[60%] uppercase  px-4 py-2 rounded-lg shadow-md ">
                    Download Free Resource
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="md:hidden flex flex-col">
        <h1 className="alstoria text-5xl mb-2 text-center">Free Resources</h1>
        <Splide
          className=" flex w-[100%]   md:hidden"
          options={{
            type: "loop",
            perPage: 1,
            perMove: 1,
            pagination: false,

            gap: "0.2rem",

            arrows: true,
            autoplay: true,
            interval: 6000,
          }}
        >
          {resources.map((resource) => (
            <SplideSlide>
              <img
                src={resource.curvedimg}
                alt="freeresourcepic"
                className="w-[100%]  object-cover"
              />
              <div className="flex flex-col gap-4 justify-center items-center">
                <p
                  className="w-[315px] h-[42px] flex items-center justify-center my-4  bg-white  text-center text-2xl mx-auto font-bold quicksand-700"
                  style={{
                    borderRadius: "10px",
                  }}
                >
                  Resource Type :{resource.type}
                </p>
                <div className="w-[80%] my-4  mx-auto quicksand-700 text-3xl text-center font-bold">
                  {resource.name1} {""} {resource.name2}
                </div>
                <button
                  className="bg-white w-[250px] h-[57px] uppercase  quicksand-500 font-semibold shadow-md "
                  style={{
                    borderRadius: "5px",
                  }}
                >
                  Download
                </button>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default Resources;
