import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { MdTrolley } from "react-icons/md";
import cdmspic from "../images/cdmspic.jpeg";
import cdmslogo from "../images/cdms-logo.png";
import cdmsbg from "../images/cdmsbg.jpeg";
import ict4pic from "../images/ict4pic.jpeg";
import ict4logo from "../images/ict4-logo.png";
import ict4bg from "../images/ict4bg.jpeg";
import clientpic2 from "../images/clientpic2.png";
import clientpic3 from "../images/clientpic3.png";
import clientpic5 from "../images/clientpic5.png";
import afrikapupic from "../images/afrikapupic.jpeg";
import afrikapubg from "../images/afrikapubg.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, FreeMode, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/free-mode";
import "swiper/css/navigation";

// import "../splide.min.css";

const ClientsHero = () => {
  const clients = [
    {
      id: 1,
      logo: clientpic2,
      image: cdmspic,
      background: cdmsbg,
      text: "Chronic Drugs Medical Scheme (CDMS) is a social enterprise whose mission is to facilitate the delivery of affordable high quality patient experience to low-  income population through strategic partnerships and interventions in the health delivery value chain. Think Opal Supported CDMS in streamlining their go to marketing strategy, partnership and collaboration strategy and the tactics of deploying their pilot phase.",
    },
    {
      id: 2,
      logo: clientpic3,
      image: ict4pic,
      background: ict4bg,
      text: "Think Opal trained and coached the team at ICT for Development, which teaches rural youth how to use technology to create jobs through mobile IT labs, in digital marketing strategies and tools. ",
    },
    {
      id: 3,
      logo: clientpic5,
      image: afrikapupic,
      background: afrikapubg,
      text: "Afrikapu empowers disadvantaged artisan entrepreneurs in Africa by connecting them with a worldwide market to make a real contribution in vulnerable areas. Think Opal provided technical assistance in digital marketing, business development, and marketing to support this mission ",
    },
  ];

  const clientlogos = [
    {
      id: 2,

      logo: clientpic2,
    },
    {
      id: 3,

      logo: clientpic3,
    },
    {
      id: 5,

      logo: clientpic5,
    },
    {
      id: 2,

      logo: clientpic2,
    },
    {
      id: 3,

      logo: clientpic3,
    },
    {
      id: 5,

      logo: clientpic5,
    },
  ];

  return (
    <div className=" bg-[#FFD230] py-32   ">
      <div className="md:w-[80%] mb-8 gap-4 md:mx-auto md:flex md:justify-center md:items-center">
        <h1 className="text-5xl text-center items-center md:w-[20%] alstoria">
          Our Clients
        </h1>
        <p className="md:border-b-2 md:border-white h-[10px] text-center items-center w-[10%] md:w-[70%]" />
      </div>
      <div className="flex flex-col  w-[80%] mx-auto gap-4 ">
        <Swiper
          slidesPerView={1}
          loop={true}
         
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            // when window width is >= 1200px

            1200: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          className="my-4 flex py-8 w-[100%]"
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay, FreeMode, Navigation]}
        >
          {clientlogos.map((clientlogo) => (
            <SwiperSlide
              key={clientlogo.id}
              className="flex justify-center bg-white h-[150px] w-[33%]"
            >
              <div className="flex justify-center items-center p-4 h-[150px]  ">
                <img src={clientlogo.logo} alt="" className="h-[100px]" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* <Swiper
          slidesPerView={1}
          loop={true}
          freeMode={true}
          spaceBetween={50}
          pagination={{
            clickable: true,
          }}
          className="my-4 flex p-8 w-[100%]"
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay, FreeMode, Navigation]}
        >
          {clients.map((client) => (
            <SwiperSlide key={client.id}>
              <div
                className=" cursor-pointer rounded-2xl    bg-cover bg-center bg-no-repeat "
                style={{
                  backgroundImage: `url(${client.background})`,
                  backgroundRepeat: "no-repeat",
                  height: "650px",
                }}
              >
                <div className="bg-white/50 h-[650px] w-[100%] flex md:flex-row flex-col justify-center items-center  gap-8  rounded-2xl flex flex-col justify-center items-center">
                  <img
                    src={client.image}
                    alt=""
                    className="w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-full"
                  />

                  <div className="flex flex-col gap-4">
                    <p className="md:text-2xl  quicksand-500 mx-auto w-[90%]">
                      {client.text}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper> */}

        <Splide
          options={{
            type: "loop",
            perPage: 1,
            perMove: 1,
            margin: "0.5rem",
            gap: "0.5rem",
            height: "700px",
            pagination: false,
            arrows: false,
            autoplay: true,

            interval: 4000,
          }}
        >
          {clients.map((client) => (
            <SplideSlide key={client.id}>
              <div
                className=" cursor-pointer rounded-2xl    bg-cover bg-center bg-no-repeat h-[650px]"
                style={{
                  backgroundImage: `url(${client.background})`,
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="bg-white/50 h-[650px] w-[100%] flex md:flex-row flex-col justify-center items-center  gap-8  rounded-2xl flex flex-col justify-center items-center">
                  <img
                    src={client.image}
                    alt=""
                    className="w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-full"
                  />

                  <div className="flex flex-col gap-4">
                    <p className="md:text-2xl  quicksand-500 mx-auto w-[90%]">
                      {client.text}
                    </p>
                  </div>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default ClientsHero;
