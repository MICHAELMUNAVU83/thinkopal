import React from "react";
import youth from "../images/youth.png";
import curvedblog from "../images/curvedblog.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "../splide.min.css";

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      title:
        "Youth Led Organization in Mombasa Paves the way for Educational empowerment",
      image: youth,
      curved_image: curvedblog,
      paragraph1:
        "Path Youth Organization, a Kenyan non-profit, empowers impoverished students to succeed in their academic pursuits.",
      paragraph2:
        "Through community outreach, volunteer programs, and partnerships with other organizations and schools, Path Youth provides mentorship, resources, and support to young people, helping them overcome obstacles and achieve their academic goals. Find out more about its impact in Mombasa.",
      button: "View In Blog",
      link: "https://medium.com/@thinkopal",
    },
    {
      id: 2,
      curved_image: curvedblog,
      title:
        "Youth Led Organization in Mombasa Paves the way for Educational empowerment",
      image: youth,
      paragraph1:
        "Path Youth Organization, a Kenyan non-profit, empowers impoverished students to succeed in their academic pursuits.",
      paragraph2:
        "Through community outreach, volunteer programs, and partnerships with other organizations and schools, Path Youth provides mentorship, resources, and support to young people, helping them overcome obstacles and achieve their academic goals. Find out more about its impact in Mombasa.",
      button: "View In Blog",
      link: "https://medium.com/@thinkopal",
    },
    {
      id: 3,
      curved_image: curvedblog,
      title:
        "Youth Led Organization in Mombasa Paves the way for Educational empowerment",
      image: youth,
      paragraph1:
        "Path Youth Organization, a Kenyan non-profit, empowers impoverished students to succeed in their academic pursuits.",
      paragraph2:
        "Through community outreach, volunteer programs, and partnerships with other organizations and schools, Path Youth provides mentorship, resources, and support to young people, helping them overcome obstacles and achieve their academic goals. Find out more about its impact in Mombasa.",
      button: "View In Blog",
      link: "https://medium.com/@thinkopal",
    },
  ];
  return (
    <>
      <div className="hidden md:block bg-[#FFD230] pt-20">
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
              <a
                className="bg-white  quicksand-700   hover:scale-105 duration-500 transition-all  h-[57px] w-[225px] text-[20px] font-semibold flex justify-center items-center uppercase  mt-4"
                style={{
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  borderRadius: "5px",
                }}
                href={blog.link}
                rel="noreferrer"
                target="_blank"
              >
                {blog.button}
              </a>
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
      <div className="md:hidden py-24 bg-[#FFD230]">
        <p className="w-[274px] py-8 text-center mx-auto quicksand-500 text-[20px]">
          Join the impact revolution with our weekly blog, featuring social
          entrepreneurs creating positive change. Educate, inspire, and empower
          yourself to make a difference. Discover Africa's changemakers and take
          ownership of their stories.
        </p>
        <Splide
          className=" flex w-[100%]   md:hidden"
          options={{
            type: "loop",
            perPage: 1,
            perMove: 1,
            pagination: false,

            gap: "0.5rem",

            arrows: true,
            autoplay: true,
            interval: 6000,
          }}
        >
          {blogs.map((blog) => (
            <SplideSlide
              style={{
                backgroundImage: `url(${blog.curved_image})`,
              }}
              className="bg-cover bg-center h-[900px] flex flex-col justify-center items-center"
            >
              <div className="flex flex-col items-center justify-center">
                <p className="alstoria w-[70%] pt-16 text-4xl text-center mx-auto">
                  {blog.title}
                </p>

                <a
                  className="bg-white  quicksand-700   hover:scale-105 duration-500 transition-all  h-[57px] w-[225px] text-[20px] font-semibold flex justify-center items-center uppercase  mt-4"
                  style={{
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    borderRadius: "5px",
                  }}
                  href={blog.link}
                  rel="noreferrer"
                  target="_blank"
                >
                  {blog.button}
                </a>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </>
  );
};

export default Blogs;
