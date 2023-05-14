import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import afrikapupic from "./images/afrikapupic.jpeg";
import cdmspic from "./images/cdmspic.jpeg";
import ict4pic from "./images/ict4pic.jpeg";
import cdmslogo from "./images/cdmslogo.png";
import ict4logo from "./images/ict4logo.png";
import afrikapulogo from "./images/afrikapulogo.png";
import { EffectCards, Pagination, Autoplay } from "swiper";
import { Link } from "react-router-dom";
const slider = [
  {
    title: "Chronic Drugs Medical Scheme(CDMS}",
    description:
      "CDMS is a social enterprise that aims to provide affordable high-quality patient experience to low-income populations through strategic partnerships and interventions in the health delivery value chain. Think Opal supported CDMS in streamlining their go-to-market strategy, partnership and collaboration strategy, and the tactics of deploying their pilot phase.",
    url: cdmspic,
    logo: cdmslogo,
  },
  {
    title: "ICT for Development ",
    description:
      "Think Opal trained and coached the team at ICT for Development, which teaches rural youth how to use technology to create jobs through mobile IT labs, in digital marketing strategies and tools.",
    url: ict4pic,
    logo: ict4logo,
  },

  {
    title: "Afrikapu ",
    description:
      "Afrikapu empowers disadvantaged artisan entrepreneurs in Africa by connecting them with a worldwide market to make a real contribution in vulnerable areas. Think Opal provided technical assistance in digital marketing, business development, and marketing to support this mission.",
    url: afrikapupic,
    logo: afrikapulogo,
  },
];

const Carousel = () => {
  return (
    <div className="flex  md:flex-row flex-col-reverse justify-between md:p-12 items-center my-8">
      <div className="md:w-[40%] mx-auto">
        <div className=" p-4">
          <div className="quicksand-500 flex flex-col justify-center md:justify-start gap-1">
            <h1 className="text-6xl alstoria font-normal md:text-start text-center ">
              Our Clients
            </h1>

            <p className="md:w-[442px] w-[315px] text-center text-xl md:text-start">
              Over the years, we've had the pleasure of working with some with
              some amazing people and organizations, who have inspired us with
              their passion, dedication, and innovative ideas. Our clients come
              from a range of sectors, including agriculture, renewable energy,
              health, and education, and we're proud to have played a part in
              their success. We're committed to continuing to support
              entrepreneurs in East Africa and helping them to achieve their
              goals.
            </p>
            <Link
              to="/clients"
              className="bg-white rounded-md shadow-md quicksand-700 shadow-[#00000040] mt-4 md:w-[225px] h-[57px] flex justify-center items-center hover:scale-105 transition ease-in-out duration-500 uppercase "
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      <Swiper
        effect={"cards"}
        grabCursor={true}
        pagination={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[EffectCards, Pagination, Autoplay]}
        className="md:w-[50%] py-8 w-[80%] mx-auto"
      >
        {slider.map((data) => (
          <SwiperSlide
            style={{ backgroundImage: `url(${data.url})` }}
            className="w-[50%] h-[600px] flex justify-center items-end bg-cover bg-center bg-no-repeat rounded-2xl"
          >
            <div
              className="h-[600px] w-[100%] flex flex-col justify-end items-center gap-8  rounded-2xl "
              style={{
                background:
                  "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 210, 48, 0.8) 86.27%)",
              }}
            >
              <div>
                <img
                  src={data.logo}
                  alt="logo"
                  className=" md:h-[100px] object-cover h-[50px] my-8"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
