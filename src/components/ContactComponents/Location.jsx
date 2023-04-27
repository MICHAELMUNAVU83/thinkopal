import React from "react";
import youth from "../images/youth.png";

const Location = () => {
  return (
    <div>
      <div className="w-[80%] mx-auto my-8 flex items-center justify-between">
        <p className="w-[40%] text-3xl quicksand-500 ">
          Need to get in touch with us at Think Opal? We'd love to hear from
          you! Our friendly team is ready to assist with any queries or feedback
          you may have. Drop us a message and we'll get back to you as soon as
          possible.
        </p>
        <img src={youth} alt="youth" className="w-[500px] h-[500px]" />
      </div>
    </div>
  );
};

export default Location;
