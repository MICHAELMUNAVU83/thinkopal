import React from "react";
import MissionHero from "../components/MissionComponents/MissionHero";
import SustainableGoals from "../components/SustainableGoals";
import Inquiry from "../components/Inquiry";
import TargetSectors from "../components/MissionComponents/TargetSectors";
const Mission = () => {
  return (
    <div>
      <MissionHero />
      <TargetSectors />
      <SustainableGoals />
      <Inquiry />
    </div>
  );
};

export default Mission;
