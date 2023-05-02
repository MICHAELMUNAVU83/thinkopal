import React, { useState, useEffect } from "react";
import coachingpic from "../images/coaching.png";
import coaching1 from "../images/coaching1.png";
import coaching2 from "../images/coaching2.png";
import coaching3 from "../images/coaching3.png";
import "../splide.min.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const Coaching = () => {
  const [perPage, setPerPage] = useState(3);

  //UPDATE PER PAGE ON RESIZE
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setPerPage(1);
      } else {
        setPerPage(3);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="bg-[#FFD230] py-8 ">
      <div className="  flex flex-col-reverse md:flex-row justify-between md:w-[80%] p-8 md:p-0 mx-auto">
        <div className="flex flex-col  text-xl gap-1 justify-center md:w-[40%] text-start">
          <p className="quicksand-500 md:text-start text-center">
            Our coaching and mentorship services are tailored to meet the unique
            needs of each entrepreneur, providing them with the guidance and
            support they need to succeed in a highly competitive market. We work
            closely with our clients to identify their strengths and weaknesses,
            and help them develop strategies for growth and success. We provide
            technical and expert support in the following areas.
          </p>
        </div>
        <div className="relative hidden md:block">
          <img
            src={coachingpic}
            alt="whatpic"
            className="md:h-[500px] md:w-[500px]"
          />
          <div className="absolute top-1/2 left-[9%] md:top-2/3 md:left-[25%] alstoria text-center  text-5xl font-bold flex flex-col ">
            <p>Coaching And</p>
            <p className="text-5xl">Membership</p>
          </div>
        </div>
        <div className="md:hidden alstoria text-center  text-5xl font-bold flex flex-col justify-center items-center ">
          <p>Coaching And</p>
          <p className="text-5xl">Membership</p>
        </div>
      </div>

      <div className=" w-[85%] mx-auto mt-8">
        <Splide
          className="px-16"
          options={{
            type: "loop",
            perPage: perPage,
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
            <div className="flex quicksand-700 justify-around items-center rounded-lg p-4  bg-white md:h-[130px] h-[80px]  ">
              <img
                src={coaching1}
                alt=""
                className="h-[50px] md:w-[100] w-[100px]"
              />
              <p className="font-bold text-xs md:text-xl w-[70%]">
                Business Planning and Sustainability Strategy Development
              </p>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="flex quicksand-700 justify-around items-center rounded-lg p-4  bg-white md:h-[130px] h-[80px]   ">
              <img
                src={coaching2}
                alt=""
                className="h-[50px] md:w-[100] w-[100px]"
              />
              <p className="font-bold text-xs md:text-xl  ">
                Marketing, Business Development
              </p>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="flex quicksand-700 justify-center items-center rounded-lg p-4 md:w-[50%] mx-auto  bg-white md:h-[130px] h-[80px]   ">
              <img
                src={coaching3}
                alt=""
                className="h-[50px] md:w-[100] w-[100px]"
              />
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
};

export default Coaching;
