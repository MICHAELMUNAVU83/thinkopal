import React from "react";
import GrayInquiry from "../components/GrayInquiry";
import Maps from "../components/ContactComponents/Maps";
import Location from "../components/ContactComponents/Location";

const Contact = () => {
  return (
    <div>
      <Maps />
      <Location />
      <GrayInquiry />
    </div>
  );
};

export default Contact;
