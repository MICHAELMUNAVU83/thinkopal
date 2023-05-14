import React from "react";
import youth from "../images/youth.png";

const Location = () => {
  return (
    <div className="md:bg-white bg-[#FFD230]">
      <div className="w-[80%] mx-auto md:my-8 flex items-center justify-between">
        <p className="md:w-[40%] w-[100%] md:text-start  text-center py-8 md:py-0 md:text-3xl  text-xl quicksand-500 ">
          Need to get in touch with us at Think Opal? We'd love to hear from
          you! Our friendly team is ready to assist with any queries or feedback
          you may have. Drop us a message and we'll get back to you as soon as
          possible.
        </p>
        <img src={youth} alt="thinkopal location" className="w-[500px]  object-cover hidden md:block h-[500px]" />
      </div>
    </div>
  );
};

export default Location;
