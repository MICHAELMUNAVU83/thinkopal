import React, { useState } from "react";
import background1 from "../images/background1.png";

const HomeHero = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${background1})`,
      }}
      className="h-[1152.23px] bg-cover"
    ></div>
  );
};

export default HomeHero;
