import React from "react";
import ServicesHero from "../components/ServicesComponents/ServicesHero";
import Inquiry from "../components/Inquiry";
import Coaching from "../components/ServicesComponents/Coaching";
import CapacityBuilding from "../components/ServicesComponents/CapacityBuilding";
import Mbinu from "../components/ServicesComponents/Mbinu";
import FreeDownloads from "../components/ServicesComponents/FreeDownloads";
import MbinuShow from "../components/ServicesComponents/MbinuShow";
const Services = () => {
  return (
    <div>
      <ServicesHero />
      <Coaching />
      <CapacityBuilding />
      <Mbinu />
      <MbinuShow />
      <FreeDownloads />
      <Inquiry />
    </div>
  );
};

export default Services;
