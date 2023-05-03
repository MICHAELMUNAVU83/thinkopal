import React from "react";
import blogbg from "../images/blog-bg.png";
import blogimage from "../images/newww.png";
import blog from "../images/blog.svg";

const Blog = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${window.innerWidth > 768 ? blogbg : ""})`,
      }}
      className="md:h-[680px] bg-cover bg-center gap-12 flex justify-center "
    >
      <div className=" md:flex justify-between">
        <div className="w-[100%]">
          <img
            src={blogimage}
            alt="blogimage"
            className="hidden md:block w-[600px] h-[700px]"
          />
        </div>
        <img src={blog} alt="blog" className="md:hidden" />
        <div className="md:mr-8 flex flex-col gap-4 md:gap-8 justify-center items-center md:items-end">
          <h1 className="alstoria font-normal text-4xl md:text-6xl">
            Impact Series
          </h1>
          <button className="bg-[#FFD230] quicksand-700  text-black uppercase text-center p-2 justify-start  w-[55%] md:w-[30%]">
            Apr 20 | 4 min read
          </button>
          <p className="md:text-4xl w-[80%] md:w-[60%] text-center md:text-end quicksand-700 font-semibold px-9 md:px-8  ">
            Data-Driven Livestock Management:{" "}
            <span className="font-normal quicksand-500">
              How an Agri-Fintech company is Revolutionizing Livestock Farming
              in Kenya
            </span>
          </p>
          <div className="md:flex md:gap-12 md:justify-between ">
            <p className="md:bg-white text-xl md:text-lg quicksand-700 hover:scale-105 transition-all duration-300 underline md:no-underline rounded-[5px]  text-black lowercase md:uppercase text-center py-4 px-2 justify-start  md:shadow-[#00000040] w-[374px] h-[57px] md:shadow-2xl">
              ABOUT THE IMPACT SERIES
            </p>
            <button className="bg-white ml-20 md:ml-0 quicksand-700 hover:scale-105 transition-all duration-300 w-[225px] h-[57px] rounded-[5px] text-black uppercase text-center py-4 px-2 justify-start  shadow-gray-400 shadow-2xl">
              View In blog
            </button>
          </div>
        </div>
      </div>
      <style>
        {`
          @media screen and (max-width: 767px) {
            .bl {
              background-image: none;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Blog;
