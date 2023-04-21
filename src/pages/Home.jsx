import React from "react";
import Blog from "../components/HomeComponents/Blog";
import Contact from "../components/HomeComponents/Contact";
import Slider from "../components/HomeComponents/Slider";
import SustainableGoals from "../components/HomeComponents/SustainableGoals";
import What from "../components/HomeComponents/What";
import Why from "../components/HomeComponents/Why";
import Who from "../components/HomeComponents/Who";
const Home = () => {
  return (
    <div>
      <Slider />
      <Who />
      <What />
      <Why />
      <Blog />
      <SustainableGoals />
      <Contact />
    </div>
  );
};

export default Home;
