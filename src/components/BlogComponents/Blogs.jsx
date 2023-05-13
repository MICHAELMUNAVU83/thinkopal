import React from "react";
import curvedblog from "../images/curvedblog.png";
import blogimage1 from "../images/blogs/blogimage1.png";
import blogimage2 from "../images/blogs/blogimage2.png";
import blogimage3 from "../images/blogs/blogimage3.png";
import curvedblogimage1 from "../images/blogs/curvedblogimage1.png";
import curvedblogimage2 from "../images/blogs/curvedblogimage2.png";
import curvedblogimage3 from "../images/blogs/curvedblogimage3.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "../splide.min.css";

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      title: "Data Driven Livestock Management",
      image: blogimage1,
      curved_image: curvedblogimage1,
      paragraph1:
        "With a passion for agriculture and a keen eye for innovation, Wanjohi Bernard has harnessed the power of technology to help farmers overcome the challenges they face in their daily lives. ",
      paragraph2:
        "His company Imfuyo, offers a range of services that are designed to improve productivity and increase profitability for farmers, while also promoting sustainable practices that are good for the environment.",
      button: "View In Blog",
      link: "https://medium.com/@thinkopal/data-driven-livestock-management-how-an-agri-fintech-company-is-revolutionizing-livestock-farming-a3bfab30f8b9",
    },
    {
      id: 2,
      curved_image: curvedblogimage2,
      title: "Breaking the Cycle",
      image: blogimage2,
      paragraph1:
        "Through her tireless efforts, Jackline Saleiyan has helped countless girls in Kajiado overcome some of the most pressing challenges of their young lives. ",
      paragraph2:
        "From providing access to education and counseling services, to distributing sanitary pads to those who need them, her work has had a profound impact on the lives of many.",
      button: "View In Blog",
      link: "https://medium.com/@thinkopal/providing-a-safe-space-for-young-girls-the-incredible-impact-of-a-womans-organization-on-early-1604fd503020",
    },
    {
      id: 3,
      curved_image: curvedblogimage3,
      title: "Empowering Young Women",
      image: blogimage3,
      paragraph1:
        "Knight Muteti is the founder and Executive Director of Daughters of Kenya (DoK). The mission of DoK is to create sustainable models that rescue,",
      paragraph2:
        "educate and empower vulnerable girls and young mothers in Kenya. They believe that empowerment of women and girls make them catalysts of change.",
      button: "View In Blog",
      link: "https://medium.com/@thinkopal/empowering-young-women-how-one-ladys-social-enterprise-is-making-a-difference-974e4c8ff904",
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
              <img
                src={blog.image}
                alt="youth"
                className="h-[400px] bg-center w-[400px] rounded-full"
              />
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
              className="bg-cover bg-center h-[900px] mt-4 flex flex-col justify-center items-center"
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
