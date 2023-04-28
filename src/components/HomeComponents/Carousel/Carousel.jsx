import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow, Autoplay } from "swiper";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./Carousel.css";

import afrikapupic from "./images/afrikapupic.jpeg";
import cdmspic from "./images/cdmspic.jpeg";
import ict4pic from "./images/ict4pic.jpeg";
import cdmslogo from "./images/cdmslogo.png";
import ict4logo from "./images/ict4logo.png";
import afrikapulogo from "./images/afrikapulogo.png";

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
    <div className="carousel">
      <div>
        <div className="carousel-content p-4">
          <div className="flex quicksand-500 flex-col gap-1">
            <h1 className="text-7xl alstoria font-bold">Our Clients</h1>
            <p>Over the years, we've had the pleasure of working </p>
            <p>with some amazing people and organizations,</p>
            <p>
              who have inspired us with their passion, dedication, and
              innovative ideas
            </p>
            <p>Our clients come from a range of sectors, including</p>
            <p>
              agriculture, renewable energy, health, and education, and we're
            </p>
            <p>proud to have played a part in their success</p>
            <p>
              We're committed to continuing to support entrepreneurs in East
            </p>
            <p>Africa and helping them to achieve their goals.</p>
            <button className="bg-white uppercase rounded-md shadow-md shadow-gray-300 mt-4 w-[40%] px-2 py-4 uppercase">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <Swiper
        className="myswiper"
        modules={[Pagination, EffectCoverflow, Autoplay]}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        fadeEffect={{ crossFade: true }}
        creativeEffect={{
          prev: {
            shadow: true,

            translate: [0, 0, -400],

            rotate: [0, 0, -90],
          },
          next: {
            translate: [0, 0, 400],

            rotate: [0, 0, 90],
          },
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 250,
          modifier: 4,
          slideShadows: true,
        }}
        loop={true}
        pagination={{ clickable: true }}
        draggable={true}
        autoplay={{
          delay: 5000,

          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
          },
          1560: {
            slidesPerView: 3,
          },
        }}
      >
        {slider.map((data) => (
          <SwiperSlide
            style={{ backgroundImage: `url(${data.url})` }}
            className="myswiper-slider"
          >
            <div>
              <img src={data.logo} alt="logo" className=" mx-auto" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
