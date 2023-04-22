import React from "react";
import Blog from "../components/HomeComponents/Blog";
import Contact from "../components/HomeComponents/Contact";
import HomeHero from "../components/HomeComponents/HomeHero";
import SustainableGoals from "../components/HomeComponents/SustainableGoals";
import What from "../components/HomeComponents/What";
import Why from "../components/HomeComponents/Why";
import Who from "../components/HomeComponents/Who";
import Carousel from "../components/HomeComponents/Carousel/Carousel";
import SemiCircle from "../components/HomeComponents/SemiCircle";
const Home = () => {
  return (
    <div>
      <HomeHero />
      <Who />
      <What />
      <Why />
      <Blog />
      <SustainableGoals />
      <Contact />
      <Carousel />
    
    </div>
  );
};

export default Home;
