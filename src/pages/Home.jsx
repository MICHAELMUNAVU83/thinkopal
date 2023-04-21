import React from "react";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Slider from "../components/Slider";
import SustainableGoals from "../components/SustainableGoals";

const Home = () => {
  return (
    <div>
      <Slider />
      <Blog />
      <SustainableGoals />

      <Contact />
    </div>
  );
};

export default Home;
