import React from "react";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Slider from "../components/Slider";
import SustainableGoals from "../components/SustainableGoals";
import What from "../components/What";
import Why from "../components/Why";
import Who from "../components/Who";
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
