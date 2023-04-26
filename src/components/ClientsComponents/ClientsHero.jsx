import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import clientlogo from "../images/clientlogo1.png";
import clientlogo2 from "../images/clientlogo2.png";
import clientlogo3 from "../images/clientlogo3.png";
import { MdTrolley } from "react-icons/md";
import cdmsbg from "../images/cdms-bg.png";
import cdmslogo from "../images/cdms-logo.png";
import cdmsround from "../images/cdms-round.png";

import "../splide.min.css";

const ClientsHero = () => {
  const clients = [
    {
      id: 1,
      logo: cdmslogo,
      roundimg: cdmsround,
      bgimg: cdmsbg,
      text: "Chronic Drugs Medical Scheme (CDMS) is a social enterprise whose mission is to facilitate the delivery of affordable high quality patient experience to low-  income population through strategic partnerships and interventions in the health delivery value chain. Think Opal Supported CDMS in streamlining their go to marketing strategy, partnership and collaboration strategy and the tactics of deploying their pilot phase.",
    },
    {
      id: 2,
      logo: cdmslogo,
      roundimg: cdmsround,
      bgimg: cdmsbg,
      text: "Chronic Drugs Medical Scheme (CDMS) is a social enterprise whose mission is to facilitate the delivery of affordable high quality patient experience to low-  income population through strategic partnerships and interventions in the health delivery value chain. Think Opal Supported CDMS in streamlining their go to marketing strategy, partnership and collaboration strategy and the tactics of deploying their pilot phase.",
    },
  ];
  return (
    <div className=" bg-[#FFD230] py-32   ">
        <div className="w-[80%] mb-8 gap-4 mx-auto flex items-center">
            <h1 className="text-5xl w-[20%] alstoria">
                Our Clients
            </h1>
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
          <SplideSlide>
            <div className="flex justify-center items-center  bg-white h-[150px]  ">
              <img src={clientlogo} alt="" className="h-[130px] w-[130px]" />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="flex justify-center items-center  bg-white  h-[150px] ">
              <img src={clientlogo2} alt="" className="h-[130px] w-[130px]" />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="flex justify-center items-center bg-white   h-[150px]  bg-white">
              <img src={clientlogo3} alt="" className="h-[130px] w-[130px]" />
            </div>
          </SplideSlide>
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
                className="flex justify-between  items-center  bg-cover bg-center bg-no-repeat h-[650px] p-2"
                style={{ backgroundImage: `url(${client.bgimg})` }}
              >
                <img src={client.roundimg} alt="" className="w-[90%]" />

                <div className="flex flex-col gap-4">
                  <img src={client.logo} alt="" className="w-[80%]" />
                  <p className="text-2xl w-[90%]">{client.text}</p>
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
