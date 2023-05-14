import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
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
import blueeconomyicon from "../images/icons/blueeconomyicon.png";
import cleanenergyicon from "../images/icons/cleanenergyicon.png";
import educationicon from "../images/icons/educationicon.png";
import sustainanblefashionicon from "../images/icons/sustainablefashionicon.png";
import sustainabletourismicon from "../images/icons/sustainabletourismicon.png";
import technologyicon from "../images/icons/technologyicon.png";
import wastemanagementicon from "../images/icons/wastemanagementicon.png";
import healthcareicon from "../images/icons/healthcareicon.png";

import "../splide.min.css";

const ClientsHero = () => {
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
        <Splide
          className="px-16 hidden md:block"
          options={{
            type: "loop",
            perPage: 3,
            perMove: 1,
            pagination: false,

            margin: "0.5rem",
            gap: "0.5rem",

            arrows: true,
            autoplay: true,
            interval: 2000,
          }}
        >
          {clientlogos.map((clientlogo) => (
            <SplideSlide>
              <div className="flex justify-center items-center p-4  bg-white h-[150px]  ">
                <img src={clientlogo.logo} alt="thinkopal clients" className="  object-cover" />
              </div>
            </SplideSlide>
          ))}
        </Splide>
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
                <img src={sector.icon} alt="thinkopal client sectors" className=" object-cover " />
                <p className="text-xl quicksand-500 text-center">
                  {sector.name}
                </p>
              </div>
            </SplideSlide>
          ))}
        </Splide>

        <Splide
          options={{
            type: "loop",
            perPage: 1,
            perMove: 1,
            margin: "0.5rem",
            pauseOnFocus: true,
            pauseOnHover: true,
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
                <div className="bg-white/50 md:p-8 p-0 h-[650px] w-[100%] flex md:flex-row md:justify-around   gap-8  rounded-2xl flex-col justify-center items-center">
                  <img
                    src={client.image}
                    alt="thinkopal client images"
                    className="w-[250px]  object-cover h-[250px] md:w-[500px] md:h-[500px] rounded-full"
                  />

                  <div className="flex flex-col gap-4">
                    <p className="md:text-2xl text-sm  quicksand-500 mx-auto w-[90%] md:w-[80%]">
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
