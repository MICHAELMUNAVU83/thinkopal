import React from "react";
import Blog from "../components/HomeComponents/Blog";
import HomeHero from "../components/HomeComponents/HomeHero";
import What from "../components/HomeComponents/What";
import Why from "../components/HomeComponents/Why";
import Who from "../components/HomeComponents/Who";
import Carousel from "../components/HomeComponents/Carousel/Carousel";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div>
      <HomeHero />
      <Who />
      <What />
      <Why />
      <Blog />
      <Carousel />
      <Contact />
    </div>
  );
};

export default Home;
