import React from "react";
import youth from "../images/youth.png";

const Blogs = () => {
  return (
    <div className="bg-[#FFD230] pt-20">
      <div className="flex flex-col-reverse md:flex-row justify-between text-xl py-8  md:w-[80%] px-6 md:mx-auto items-center ">
        <div className="  md:w-[40%]">
          <p className="quicksand-500">
            Path Youth Organization, a Kenyan non-profit, empowers impoverished
            students to succeed in their academic pursuits. Through community
            outreach, volunteer programs, and partnerships with other
            organizations and schools, Path Youth provides mentorship,
            resources, and support to young people, helping them overcome
            obstacles and achieve their academic goals. Find out more about its
            impact in Mombasa.
          </p>
          <button className="bg-white  quicksand-700 rounded-lg font-normal hover:scale-105 duration-500 transition-all  px-4 py-2 mt-4">
            View In Blog
          </button>
        </div>
        <div className="md:w-[50%] flex flex-col items-center justify-center text-center">
          <img src={youth} alt="youth" className="h-[400px]" />
          <p className="md:text-4xl font-bold alstoria md:w-[80%] mt-4">
            Youth Led Organization in Mombasa Paves the way for Educational
            empowerment
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-between text-xl py-8  md:w-[80%] px-6 md:mx-auto items-center ">
        <div className="  md:w-[40%]">
          <p className="quicksand-500">
            Path Youth Organization, a Kenyan non-profit, empowers impoverished
            students to succeed in their academic pursuits. Through community
            outreach, volunteer programs, and partnerships with other
            organizations and schools, Path Youth provides mentorship,
            resources, and support to young people, helping them overcome
            obstacles and achieve their academic goals. Find out more about its
            impact in Mombasa.
          </p>
          <button className="bg-white  quicksand-700 rounded-lg font-normal hover:scale-105 duration-500 transition-all  px-4 py-2 mt-4">
            View In Blog
          </button>
        </div>
        <div className="md:w-[50%] flex flex-col items-center justify-center text-center">
          <img src={youth} alt="youth" className="h-[400px]" />
          <p className="md:text-4xl font-bold alstoria md:w-[80%] mt-4">
            Youth Led Organization in Mombasa Paves the way for Educational
            empowerment
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-between text-xl py-8  md:w-[80%] px-6 md:mx-auto items-center ">
        <div className="  md:w-[40%]">
          <p className="quicksand-500">
            Path Youth Organization, a Kenyan non-profit, empowers impoverished
            students to succeed in their academic pursuits. Through community
            outreach, volunteer programs, and partnerships with other
            organizations and schools, Path Youth provides mentorship,
            resources, and support to young people, helping them overcome
            obstacles and achieve their academic goals. Find out more about its
            impact in Mombasa.
          </p>
          <button className="bg-white  quicksand-700 rounded-lg font-normal hover:scale-105 duration-500 transition-all  px-4 py-2 mt-4">
            View In Blog
          </button>
        </div>
        <div className="md:w-[50%] flex flex-col items-center justify-center text-center">
          <img src={youth} alt="youth" className="h-[400px]" />
          <p className="md:text-4xl font-bold alstoria md:w-[80%] mt-4">
            Youth Led Organization in Mombasa Paves the way for Educational
            empowerment
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
