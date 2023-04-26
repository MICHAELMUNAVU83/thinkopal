import React from "react";
import MissionHero from "../components/MissionComponents/MissionHero";
import SustainableGoals from "../components/SustainableGoals";
import Contact from "../components/Contact";
import TargetSectors from "../components/MissionComponents/TargetSectors";
const Mission = () => {
  return (
    <div>
      <MissionHero />
      <TargetSectors />
      <SustainableGoals />
      <Contact />
    </div>
  );
};

export default Mission;
