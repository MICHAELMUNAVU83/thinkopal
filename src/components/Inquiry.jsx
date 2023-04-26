import React from "react";

const Inquiry = () => {
  return (
    <div
      className="
    bg-[#FFD230]  flex justify-between p-24"
    >
      <div className="flex flex-col gap-4">
        <div className="flex gap-[30px]">
          <input
            type="text"
            placeholder="Name"
            className="w-[299px] h-[42px] p-2  rounded-md"
          />
          <input
            type="text"
            placeholder="Email"
            className="w-[299px] h-[42px] p-2  rounded-md"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Subject"
            className="w-[628px] h-[42px] p-2  rounded-md"
          />
        </div>
        <div>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
            className="w-[628px] h-[200px] p-2  rounded-md"
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
          <button className="bg-white mr-24  text-black uppercase text-center py-4 px-8 justify-start  shadow-gray-300 rounded-md shadow-xl">
            Send Message
          </button>
        </div>
      </div>
      <div className="flex flex-col font-bold  text-end gap-4 justify-center ">
        <h1 className="text-7xl alstoria ">Get An</h1>
        <h1 className="text-7xl alstoria">Inquiry</h1>
        <p className="font-normal  text-3xl">Learn more about our services</p>
        <p className="font-normal  text-2xl">We'd love to help!</p>
      </div>
    </div>
  );
};

export default Inquiry;
