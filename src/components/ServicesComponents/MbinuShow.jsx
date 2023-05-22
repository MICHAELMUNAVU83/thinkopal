import React from "react";

import sdgpic1 from "../images/sdgpic1.jpg";
import sdgpic2 from "../images/sdgpic2.jpg";
import sdgpic3 from "../images/sdgpic3.jpg";
const MbinuShow = () => {
  return (
    <div className="flex flex-col  my-12   justify-center items-center">
      <div>
        <div className="flex md:[&:hover>div]:w-16 [&:hover>div]:w-8   [&>div:hover]:w-[20rem] md:[&>div:hover]:w-[40rem]">
          <div
            className="group relative 
           md:w-16 w-8 cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-500 "
          >
            <img
              className="h-[600px] object-cover transition-all group-hover:rotate-12 group-hover:scale-125"
              src={sdgpic1}
              alt=""
            />
            <div className=" absolute inset-0  group-hover:bg-none  bg-gradient-to-t from-[#FFD230]/90 via-[#FFD230]/40 to-white  visible flex items-center justify-center visible"></div>
          </div>
          <div
            className="group relative  
           md:w-[40rem] w-[20rem]  cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-500"
          >
            <img
              className="h-[600px] object-cover transition-all group-hover:rotate-12 group-hover:scale-125"
              src={sdgpic2}
              alt=""
            />
            <div className="absolute inset-0 bg-none bg-gradient-to-tr   from-[#FFD230]/90 via-[#FFD230]/40 to-white  visible flex items-center justify-center"></div>
          </div>
          <div
            className="group   relative 
           md:w-16 w-8 cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-500"
          >
            <img
              className="h-[600px] object-cover transition-all group-hover:rotate-12 group-hover:scale-125"
              src={sdgpic3}
              alt=""
            />
            <div className=" absolute inset-0 absolute inset-0 group-hover:bg-none bg-gradient-to-t from-[#FFD230]/90 via-[#FFD230]/40 to-white  visible flex items-center justify-center  visible"></div>
          </div>
        </div>
      </div>
      <h1 className="md:text-3xl text-2xl w-[90%] mx-auto md:w-[100%]  alstoria font-bold text-center mt-12">
        A showcase of some of our achievements at Mbinu Enterprise Program
      </h1>
    </div>
  );
};

export default MbinuShow;
