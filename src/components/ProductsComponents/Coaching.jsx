import React from "react";
import coachingpic from "../images/coaching.png";
import coaching1 from "../images/coaching1.png";
import coaching2 from "../images/coaching2.png";
import coaching3 from "../images/coaching3.png";

import { Splide, SplideSlide } from "@splidejs/react-splide";


const Coaching = () => {
  return (
    <div className="bg-[#FFD230] py-8 ">
      <div className="  flex justify-between w-[80%] mx-auto">
        <div className="flex flex-col  text-xl gap-1 justify-center w-[40%] text-start">
          <p>
            Our coaching and mentorship services are tailored to meet the unique
            needs of each entrepreneur, providing them with the guidance and
            support they need to succeed in a highly competitive market. We work
            closely with our clients to identify their strengths and weaknesses,
            and help them develop strategies for growth and success. We provide
            technical and expert support in the following areas.
          </p>
        </div>
        <div className="relative">
          <img
            src={coachingpic}
            alt="whatpic"
            className="h-[500px] w-[500px]"
          />
          <div className="absolute top-2/3 left-[25%] alstoria text-center  text-5xl font-bold flex flex-col ">
            <p>Coaching And</p>
            <p className="text-5xl">Membership</p>
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
              <img src={coaching1} alt="" className="h-[100px] w-[100px]" />
              <p className="font-bold w-[70%]">
                Business Planning and Sustainability Strategy Development
              </p>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="flex justify-around items-center rounded-lg p-4  bg-white h-[130px]  ">
              <img src={coaching2} alt="" className="h-[100px] w-[100px]" />
              <p className="font-bold ">Marketing, Business Development</p>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="flex justify-center items-center rounded-lg p-4 w-[50%] mx-auto  bg-white h-[130px]  ">
              <img src={coaching3} alt="" className="h-[100px] w-[100px]" />
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
};

export default Coaching;
