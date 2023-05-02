import React from "react";
import mbinupic from "../images/coaching.png";
const Mbinu = () => {
  return (
    <div className="bg-[#FFD230] py-8 ">
      <div className="  flex flex-col-reverse md:flex-row justify-between w-[80%] mx-auto">
        <div className="flex flex-col  text-xl gap-1 justify-center md:w-[40%] text-start">
          <p className="quicksand-500 md:text-start text-center">
            “Mbinu” is a Swahili for Tactic. The Mbinu Enterprise program
            involves working in identifying gaps social enterprises & innovative
            start ups are facing and working with them through coaching,
            mentorship & training. Think Opal Audits, works with the enterprise
            to strategies, implement, monitor progress & do continuous
            improvement to ensure growth and goals & objectives are achieved.
          </p>
        </div>
        <div className="relative hidden md:block">
          <img
            src={mbinupic}
            alt="whatpic"
            className="md:h-[500px] md:w-[500px]"
          />
          <div className="absolute top-[18%] left-[11%] md:top-[50%] md:left-[25%] alstoria text-center  text-6xl font-bold flex flex-col ">
            <p>Mbinu</p>
            <p>Enterprise</p>
            <p>Program</p>
          </div>
        </div>
        <div className="md:hidden alstoria text-center  text-4xl font-bold flex flex-col justify-center items-center ">
          <p>Mbinu Enterprise</p>
          <p className="text-5xl">Program</p>
        </div>
      </div>
    </div>
  );
};

export default Mbinu;
