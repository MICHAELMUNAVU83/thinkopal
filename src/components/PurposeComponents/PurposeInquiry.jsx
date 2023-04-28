import React from "react";
import purposeinquirypic from "../images/purposeinquirypic.png";
const PurposeInquiry = () => {
  return (
    <div className=" bg-white md:bg-[#FFD230] md:flex md:justify-between pt-20 md:pt-0 p-10 md:p-24">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl md:text-7xl alstoria ">Get An Inquiry</h1>

        <p className="font-normal  text-xl">Learn more about our services</p>
        <p className="font-normal  text-md">We'd love to help!</p>
        <div className="flex align-center gap-[30px]">
          <input
            type="text"
            placeholder="Your name"
            className="w-[299px] h-[42px] md:text-black p-2 bg-[#FFD230] md:bg-white  rounded-md"
          />
          <input
            type="text"
            placeholder="Your Email"
            className="w-[299px] h-[42px] bg-[#FFD230] md:bg-white md:text-[#000] hidden md:block p-2  rounded-md"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Your Email"
            className="w-[299px] h-[42px] bg-[#FFD230] md:text-[#000] md:hidden p-2  rounded-md"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Subject"
            className="w-[299px] h-[42px] p-2 bg-[#FFD230] md:bg-white md:text-[#000]  rounded-md"
          />
        </div>
        <div>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
            className="w-[299px] h-[200px] p-2 bg-[#FFD230] md:bg-white  rounded-md"
          ></textarea>
        </div>
        <div className="flex justify-start">
          <input
            type="checkbox"
            name=""
            id=""
            className="mr-2 h-6 w-6 text-5xl"
          />
          <p className="text-xl">
            I would love to receive information on newsletters and more offers
          </p>
        </div>
        <div className="flex justify-start">
          <button className="md:bg-white bg-[#000] ml-10 md:ml-0 md:mr-24 text-[white] md:text-black uppercase text-center py-4 px-8 md:justify-start  shadow-gray-300 rounded-md shadow-xl">
            Send Message
          </button>
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
