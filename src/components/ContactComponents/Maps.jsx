import React, { useState, useEffect } from "react";
import { SiGmail } from "react-icons/si";
import { IoCall } from "react-icons/io5";
import { HiLocationMarker } from "react-icons/hi";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, { Marker } from "react-map-gl";

const Maps = () => {
  const [screenwidth, setScreenwidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenwidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-[#FFD230]   flex items-center md:justify-between   ">
      <div className="hidden md:flex  flex-col px-8 quicksand-500 gap-2">
        <h1 className="text-7xl font-bold items-center  alstoria">Reach Us</h1>
        <div className="flex items-center jusify-around">
          <IoCall size={40} />
          <p>+254798 543030</p>
        </div>
        <div className="flex gap-2 items-center jusify-around">
          <HiLocationMarker size={40} />
          <div className="flex text-start flex-col justify-between">
            <p>WestPark Towers,</p>
            <p>Westlands. </p>
            <p>Mpesa Lane,Jenga leo co-working space</p>
            <p>Nairobi , Kenya</p>
          </div>
        </div>
        <div className="flex gap-2 items-center jusify-around">
          <SiGmail size={40} />
          <p>info@thinkopal.com</p>
        </div>
      </div>
      <div className="md:hidden flex absolute bottom-0 right-[24%] left-[16%]  flex-col justify-start items-center  p-4 z-10  bg-white w-[262px] h-[262px] rounded-full  gap-2 ">
        <h1 className="md:text-2xl flex font-bold items-center  alstoria">
          Reach
          <p>Us</p>
        </h1>
        <div className="flex items-center justify-between">
          <IoCall size={30} />
          <p>+254798 543030</p>
        </div>
        <div className="flex gap-2 items-center justify-between">
          <HiLocationMarker size={40} />
          <div className="flex text-start flex-col justify-between">
            <p>WestPark Towers,</p>

            <p>Nairobi , Kenya</p>
          </div>
        </div>
        <div className="flex gap-2 items-center justify-between">
          <SiGmail size={30} />
          <p>info@thinkopal.com</p>
        </div>
      </div>

      <Map
        className=" relative rounded-r-[700px]"
        style={
          innerWidth < 768
            ? {
                paddingBottom: "10px",
                cursor: "pointer",
                height: "100vh",
                width: "100%",

              borderRadius: "0px 0px 400px 400px",
              }
            : {
                paddingBottom: "10px",
                cursor: "pointer",
                height: "100vh",
                width: "50%",

                borderRadius: "0px 0px 0px 700px",
              }
        }
        width="100%"
        initialViewState={{
          latitude: -1.264065,
          longitude: 36.807052,
          zoom: 12,
        }}
        mapboxAccessToken={
          "pk.eyJ1IjoiYW5uZXRvdG9oIiwiYSI6ImNsYjB2cDl1dzFrOTQzcHFtOWdxcHBjbGgifQ.LADz9TYffPhRsjZ_O_hUHw"
        } // This is the token we got from Mapbox
        mapStyle="mapbox://styles/mapbox/streets-v11" // This is the style of the map
      >
        <Marker
          latitude={-1.264065}
          longitude={36.807052}
          offsetLeft={-20}
          offsetTop={-10}
        >
          <p className="bg-red-600/90 font-bold px-2 py-1 text-white rounded-xl">
            Think Opal Offices
          </p>
          <HiLocationMarker className="text-5xl text-red-600" />
        </Marker>
      </Map>
    </div>
  );
};

export default Maps;
