import React from "react";
import background4 from "../images/background4.png";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";
import productsbg from "../images/productsbg.jpeg";
const ProductsHero = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${productsbg})`,
      }}
      className="h-[100vh] bg-cover md:bg-top bg-[90%] "
    >
      <div className="bg-white/30 h-[100vh] flex justify-between p-4">
        <Link className=" flex justify-center items-center " to="/mission">
          <MdArrowBackIosNew className=" text-2xl bg-gray-300 h-8 w-8 p-2 rounded-full cursor-pointer" />
        </Link>
        <div className="w-10/12 hidden md:flex flex-col   justify-end items-end ">
          <div className="bg-white h-[500px] w-[500px] rounded-full flex  justify-center items-center flex-col absolute bottom-7 left-1/2 transform -translate-x-1/2 mb-4">
            <p className="text-6xl font-bold alstoria">Our Products</p>
            <div className="quicksand-500 p-8 text-xl text-center">
              At Think Opal, we're dedicated to providing innovative solutions
              to help social enterprises and impactful startups in East Africa
              thrive. Our products are designed to support entrepreneurs who are
              committed to making a positive impact on society and the
              environment while generating sustainable profits.
            </div>
          </div>
        </div>
        <div className="bg-white/70 h-[277px] w-[277px] rounded-full flex md:hidden justify-center items-center flex-col absolute bottom-7 left-1/2 transform -translate-x-1/2 mb-4">
          <p className="text-center text-5xl md:text-xl tracking-wide p-4 pt-6 alstoria">
            Our Products
          </p>
        </div>
        <Link className=" flex justify-center items-center " to="/blog">
          <MdArrowForwardIos className=" text-2xl bg-gray-300 h-8 w-8 p-2 rounded-full cursor-pointer" />
        </Link>
      </div>
    </div>
  );
};

export default ProductsHero;
