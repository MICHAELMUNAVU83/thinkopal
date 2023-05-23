import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const GrayInquiry = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_abzd5cf",
        "template_ncd937d",
        form.current,
        "cea2TAaV7fu3Aqtyp"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className=" bg-white quicksand-400  flex-col-reverse md:flex-row  flex justify-between py-12 md:p-24">
      <form
        onSubmit={sendEmail}
        ref={form}
        className="flex  quicksand-400 flex-col gap-4"
      >
        <div className="flex flex-col md:flex-row gap-[20px]">
          <input
            type="text"
            placeholder="Name"
            className="md:w-[299px]  w-[315px] mx-auto placeholder-white h-[42px] p-2 bg-[#000000]/25   rounded-md"
          />
          <input
            type="text"
            placeholder="Email"
            className="md:w-[299px]  w-[315px] mx-auto placeholder-white bg-[#000000]/25 h-[42px] p-2   rounded-md"
          />
        </div>
        <div className="flex flex-col ">
          <input
            type="text"
            placeholder="Subject"
            className="md:w-[633px] w-[315px] mx-auto placeholder-white bg-[#000000]/25 h-[42px] p-2    rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
            className="md:w-[633px] w-[315px] mx-auto  bg-[#000000]/25 h-[200px] p-2  placeholder-white  rounded-md"
          ></textarea>
        </div>
        <div className="flex w-[315px] mx-auto md:w-[633px] items-center  ">
          <input
            type="checkbox"
            name=""
            id=""
            className="mr-2 bg-red-500 h-6 w-6  "
          />
          <p className="md:text-[15px] leading-[15px]  w-[584px] text-sm">
            I would love to receive information on newsletters and more offers
          </p>
        </div>
        <div className="flex md:justify-start justify-center">
          <button
            className=" bg-[#FFD230] md:mr-24 hover:scale-105 duration-500 transition-all text-black uppercase text-center py-4 px-8 justify-start  shadow-gray-300 rounded-md shadow-xl"
            type="submit"
          >
            Send Message
          </button>
        </div>
      </form>
      <div className="flex flex-col font-bold text-center md:text-end gap-4 justify-center ">
        <h1 className="text-7xl alstoria ">Got An</h1>
        <h1 className="text-7xl alstoria">
          Inquiry <span className="quicksand-700">?</span>
        </h1>
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

export default GrayInquiry;
