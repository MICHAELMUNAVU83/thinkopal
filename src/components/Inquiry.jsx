import React from "react";

const Inquiry = () => {
  return (
    <div
      className="
    bg-[#FFD230] flex-col-reverse md:flex-row  flex justify-between py-12 md:p-24"
    >
      <div className="flex quicksand-400 flex-col gap-4 w-[90%] mx-auto md:ml-0 md:mr-0">
        <div className="flex flex-col md:flex-row gap-[30px]">
          <input
            type="text"
            placeholder="Name"
            className="md:w-[299px]  w-[80%] mx-auto md:ml-0 md:mr-0 h-[42px] p-2  rounded-md"
          />
          <input
            type="text"
            placeholder="Email"
            className="md:w-[299px]  w-[80%] mx-auto md:ml-0 md:mr-0 h-[42px] p-2  rounded-md"
          />
        </div>
        <div className="flex flex-col ">
          <input
            type="text"
            placeholder="Subject"
            className="md:w-[628px] w-[80%] mx-auto md:ml-0 md:mr-0 h-[42px] p-2  rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
            className="md:w-[628px] w-[80%] mx-auto md:ml-0 md:mr-0 h-[200px] p-2  rounded-md"
          ></textarea>
        </div>
        <div className="flex py-4 justify-start">
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
        <div className="flex md:justify-start justify-center">
          <button className="bg-white md:mr-24  hover:scale-105 transition-all duration-500 text-black uppercase text-center py-4 px-8 justify-start  shadow-[#00000040] rounded-md shadow-xl">
            Send Message
          </button>
        </div>
      </div>
      <div className="flex flex-col font-normal text-center md:text-end gap-4 justify-center ">
        <div className="flex justify-center md:block">
          <h1 className="md:text-6xl text-4xl alstoria ">Get An</h1>
          <h1 className="md:text-6xl text-4xl alstoria">Inquiry</h1>
        </div>

        <p className="font-normal quicksand-700  text-xl md:text-3xl ">
          Learn more about our services
        </p>
        <p className="font-normal quicksand-700 md:mb-0 mb-4   text-2xl">
          We'd love to help!
        </p>
      </div>
    </div>
  );
};

export default Inquiry;
