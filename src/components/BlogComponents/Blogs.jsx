import React from "react";
import youth from "../images/youth.png";


const Blogs = () => {
  return (
    <div className="bg-[#FFD230] ">
      <div className="flex justify-between text-2xl py-8  w-[80%] mx-auto items-center ">
        <div className="  w-[40%]">
          <p>
            Path Youth Organization, a Kenyan non-profit, empowers impoverished
            students to succeed in their academic pursuits. Through community
            outreach, volunteer programs, and partnerships with other
            organizations and schools, Path Youth provides mentorship,
            resources, and support to young people, helping them overcome
            obstacles and achieve their academic goals. Find out more about its
            impact in Mombasa.
          </p>
          <button className="bg-white rounded-lg font-normal  px-4 py-2 mt-4">View In Blog</button>
        </div>
        <div className="w-[50%] flex flex-col items-center justify-center text-center">
          <img src={youth} alt="youth" className="h-[400px]" />
          <p className="text-4xl font-bold alstoria w-[80%] mt-4">
            Youth Led Organization in Mombasa Paves the way for Educational
            empowerment
          </p>
        </div>
      </div>
      <div className="flex justify-between text-2xl py-8  w-[80%] mx-auto items-center ">
        <div className="  w-[40%]">
          <p>
            Path Youth Organization, a Kenyan non-profit, empowers impoverished
            students to succeed in their academic pursuits. Through community
            outreach, volunteer programs, and partnerships with other
            organizations and schools, Path Youth provides mentorship,
            resources, and support to young people, helping them overcome
            obstacles and achieve their academic goals. Find out more about its
            impact in Mombasa.
          </p>
          <button className="bg-white rounded-lg font-normal  px-4 py-2 mt-4">View In Blog</button>
        </div>
        <div className="w-[50%] flex flex-col items-center justify-center text-center">
          <img src={youth} alt="youth" className="h-[400px]" />
          <p className="text-4xl font-bold mt-4 alstoria w-[80%]">
            Youth Led Organization in Mombasa Paves the way for Educational
            empowerment
          </p>
        </div>
      </div>
      <div className="flex justify-between text-2xl py-8  w-[80%] mx-auto items-center ">
        <div className="  w-[40%]">
          <p>
            Path Youth Organization, a Kenyan non-profit, empowers impoverished
            students to succeed in their academic pursuits. Through community
            outreach, volunteer programs, and partnerships with other
            organizations and schools, Path Youth provides mentorship,
            resources, and support to young people, helping them overcome
            obstacles and achieve their academic goals. Find out more about its
            impact in Mombasa.
          </p>
          <button className="bg-white rounded-lg font-normal  px-4 py-2 mt-4">View In Blog</button>
        </div>
        <div className="w-[50%] flex flex-col items-center justify-center text-center">
          <img src={youth} alt="youth" className="h-[400px]" />
          <p className="text-4xl alstoria w-[80%] font-bold mt-4">
            Youth Led Organization in Mombasa Paves the way for Educational
            empowerment
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
