import React from "react";
import purposeinquirypic from "../images/purposeinquirypic.png";
const PurposeInquiry = () => {
  return (
    <div className=" bg-white md:bg-[#FFD230] md:flex md:justify-between md:pt-20  p-10 md:p-24">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl md:text-7xl alstoria ">Get An Inquiry</h1>

        <p className="font-normal  text-xl">Learn more about our services</p>
        <p className="font-normal  text-md">We'd love to help!</p>
        <div className="flex quicksand-400 flex-col gap-4 w-[90%] mx-auto ">
          <div className="flex flex-col md:flex-row gap-[30px]">
            <input
              type="text"
              placeholder="Name"
              className="md:w-[299px] bg-[#FFD230] md:bg-white w-[100%] mx-auto  h-[42px] p-2  rounded-md"
            />
            <input
              type="text"
              placeholder="Email"
              className="md:w-[299px] bg-[#FFD230] md:bg-white  w-[100%] mx-auto  h-[42px] p-2  rounded-md"
            />
          </div>
          <div className="flex flex-col ">
            <input
              type="text"
              placeholder="Subject"
              className="md:w-[628px] bg-[#FFD230] md:bg-white w-[100%] mx-auto  h-[42px] p-2  rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Message"
              className="md:w-[628px] bg-[#FFD230] md:bg-white w-[100%] mx-auto  h-[200px] p-2  rounded-md"
            ></textarea>
          </div>
          <div className="flex md:p-8 justify-betwee">
            <input
              type="checkbox"
              name=""
              id=""
              className="mr-2 h-6 w-6 text-5xl"
            />
            <p className="md:text-xl text-sm">
              I would love to receive information on newsletters and more offers
            </p>
          </div>
          <div className="flex md:justify-start justify-center">
            <button className="md:bg-white bg-black md:mr-24  hover:scale-105 transition-all duration-500 md:text-black text-white uppercase text-center py-4 px-8 justify-start  shadow-gray-300 rounded-md shadow-xl">
              Send Message
            </button>
          </div>
        </div>
      </div>
      <div>
        <img
          src={purposeinquirypic}
          alt="whatpic"
          className="h-[500px] w-[500px] hidden md:block"
        />
      </div>
    </div>
  );
};

export default PurposeInquiry;
