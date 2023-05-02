import React from "react";
import ProductsHero from "../components/ProductsComponents/ProductsHero";
import SustainableGoals from "../components/SustainableGoals";
import MbinuShowCase from "../components/ProductsComponents/MbinuShowcase";
import Inquiry from "../components/Inquiry";
import Coaching from "../components/ProductsComponents/Coaching";
import CapacityBuilding from "../components/ProductsComponents/CapacityBuilding";
import Mbinu from "../components/ProductsComponents/Mbinu";
import FreeDownloads from "../components/ProductsComponents/FreeDownloads";
const Products = () => {
  return (
    <div>
      <ProductsHero />
      <Coaching />
      <CapacityBuilding />
      <Mbinu />
      <MbinuShowCase />
      <FreeDownloads />
      <Inquiry />
    </div>
  );
};

export default Products;
