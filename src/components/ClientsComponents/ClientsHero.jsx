import React from "react";
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

import "../splide.min.css";

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
      <div className="w-[80%] mb-8 gap-4 mx-auto flex justify-center items-center">
        <h1 className="text-5xl w-[20%] alstoria">Our Clients</h1>
        <p className="border-b-2 border-white h-[10px] w-[70%]" />
      </div>
      <div className="flex flex-col  w-[80%] mx-auto gap-4 ">
        <Splide
          className="px-16"
          options={{
            type: "loop",
            perPage: 3,
            perMove: 1,
            pagination: true,

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
                <img src={clientlogo.logo} alt="" className="h-[130px] " />
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
            gap: "0.5rem",
            height: "700px",
            pagination: true,
            arrows: false,

            interval: 2000,
          }}
        >
          {clients.map((client) => (
            <SplideSlide key={client.id}>
              <div
                className="flex  gap-8 rounded-2xl  items-center  bg-cover bg-center bg-no-repeat h-[650px] p-2"
                style={{
                  backgroundImage: `url(${client.background})`,
                }}
              >
                <img
                  src={client.image}
                  alt=""
                  className="w-[400px] h-[400px] rounded-full"
                />

                <div className="flex flex-col gap-4">
                  <p className="text-2xl quicksand-500 w-[90%]">
                    {client.text}
                  </p>
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
