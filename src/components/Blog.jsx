import React from "react";
import blogbg from "./images/blog-bg.png";
import blogimage from "./images/blog-image.png";
const Blog = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${blogbg})`,
      }}
      className="h-[680px] bg-cover bg-center gap-12 flex justify-center "
    >
      <div className="w-1/2">
        <img
          src={blogimage}
          alt="blogimage"
          className="h-[680px] w-[90%] rounded-br-full border-r-4 border-white"
        />
      </div>
      <div className="w-1/2  flex flex-col gap-8 justify-center items-end">
        <button className="bg-[#FFD230] mr-24  text-black uppercase text-center p-2 justify-start w-[200px]">
          Apr 20 | 4 min read
        </button>
        <p className="text-5xl w-[80%] font-bold ">
          Data-Driven Livestock Management:{" "}
          <span className=" font-normal">
            How an Agri-Fintech company is Revolutionizing Livestock Farming in
            Kenya
          </span>
        </p>
        <button className="bg-white mr-24  text-black uppercase text-center p-2 justify-start w-[200px]">
          View In bLog
        </button>
      </div>
    </div>
  );
};

export default Blog;
