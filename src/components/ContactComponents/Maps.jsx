import React from "react";
import { SiGmail } from "react-icons/si";
import { IoCall } from "react-icons/io5";
import { HiLocationMarker } from "react-icons/hi";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, { Marker } from "react-map-gl";

const Maps = () => {
  return (
    <div className="bg-[#FFD230]  flex items-center justify-between   ">
      <div className="flex flex-col px-8 gap-2">
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
            <p>Nairobi , Kenya</p>
          </div>
        </div>
        <div className="flex gap-2 items-center jusify-around">
          <SiGmail size={40} />
          <p>info@thinkopal.com</p>
        </div>
      </div>

      <Map
        className="rounded-full"
        style={{
          paddingBottom: "10px",
          cursor: "pointer",
          height: "100vh",
          width: "50%",

          borderRadius: "0px 0px 0px 700px",
        }}
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
          latitude={ -1.264065}
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
