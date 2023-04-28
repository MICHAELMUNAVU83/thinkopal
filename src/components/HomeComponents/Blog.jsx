import React from "react";
import blogbg from "../images/blog-bg.png";
import blogimage from "../images/blog-image.png";
const Blog = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${blogbg})`,
      }}
      className="h-[680px] bg-cover bg-center gap-12 flex justify-center "
    >
      <div className=" flex justify-between">
        <div className="w-[100%]">
          <img src={blogimage} alt="blogimage" className="" />
        </div>
        <div className=" mr-8 flex flex-col gap-8 justify-center items-end">
          <h1 className="alstoria font-bold text-7xl ">Impact Series</h1>
          <button className="bg-[#FFD230] quicksand-700  text-black uppercase text-center p-2 justify-start w-[30%]">
            Apr 20 | 4 min read
          </button>
          <p className="text-5xl w-[60%] text-end quicksand-700 font-semibold ">
            Data-Driven Livestock Management:{" "}
            <span className=" font-normal quicksand-500">
              How an Agri-Fintech company is Revolutionizing Livestock Farming
              in Kenya
            </span>
          </p>
          <div className="flex gap-12 justify-between ">
            <button className="bg-white quicksand-700 hover:scale-105 transition-all duration-300   text-black uppercase text-center py-4 px-2 justify-start  shadow-gray-400 shadow-2xl">
              ABOUT THE IMPACT SERIES
            </button>
            <button className="bg-white quicksand-700 hover:scale-105 transition-all duration-300   text-black uppercase text-center py-4 px-2 justify-start  shadow-gray-400 shadow-2xl">
              View In bLog
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
