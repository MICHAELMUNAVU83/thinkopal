import React from "react";
import youth from "../images/youth.png";

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      title:
        "Youth Led Organization in Mombasa Paves the way for Educational empowerment",
      image: youth,
      paragraph1:
        "Path Youth Organization, a Kenyan non-profit, empowers impoverished students to succeed in their academic pursuits.",
      paragraph2:
        "Through community outreach, volunteer programs, and partnerships with other organizations and schools, Path Youth provides mentorship, resources, and support to young people, helping them overcome obstacles and achieve their academic goals. Find out more about its impact in Mombasa.",
      button: "View In Blog",
    },
    {
      id: 2,
      title:
        "Youth Led Organization in Mombasa Paves the way for Educational empowerment",
      image: youth,
      paragraph1:
        "Path Youth Organization, a Kenyan non-profit, empowers impoverished students to succeed in their academic pursuits.",
      paragraph2:
        "Through community outreach, volunteer programs, and partnerships with other organizations and schools, Path Youth provides mentorship, resources, and support to young people, helping them overcome obstacles and achieve their academic goals. Find out more about its impact in Mombasa.",
      button: "View In Blog",
    },
    {
      id: 3,
      title:
        "Youth Led Organization in Mombasa Paves the way for Educational empowerment",
      image: youth,
      paragraph1:
        "Path Youth Organization, a Kenyan non-profit, empowers impoverished students to succeed in their academic pursuits.",
      paragraph2:
        "Through community outreach, volunteer programs, and partnerships with other organizations and schools, Path Youth provides mentorship, resources, and support to young people, helping them overcome obstacles and achieve their academic goals. Find out more about its impact in Mombasa.",
      button: "View In Blog",
    },
  ];
  return (
    <div className="bg-[#FFD230] pt-20">
      {blogs.map((blog) => (
        <div className="flex flex-col-reverse md:flex-row justify-between text-xl py-8  md:w-[80%] px-6 md:mx-auto items-center ">
          <div className="">
            <div className="h-[364px]">
              <p className=" my-4  md:w-[442px] text-[20px] leading-[25.5px] quicksand-500">
                {blog.paragraph1}
              </p>
              <p className=" md:w-[442px] text-[20px] leading-[25.5px] quicksand-500">
                {blog.paragraph2}
              </p>
            </div>
            <button
              className="bg-white  quicksand-700   hover:scale-105 duration-500 transition-all  h-[57px] w-[225px] text-[20px] font-semibold flex justify-center items-center uppercase  mt-4"
              style={{
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                borderRadius: "5px",
              }}
            >
              {blog.button}
            </button>
          </div>
          <div className="md:w-[50%] flex flex-col items-center justify-center text-center">
            <img src={blog.image} alt="youth" className="h-[539px]" />
            <p className="md:text-[48px] leading-[45.6px]  font-bold alstoria md:w-[80%] mt-4">
              {blog.title}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
