import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import purposeinquirypic from "../images/purposeinquirypic.png";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
const PurposeInquiry = () => {
  const form = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    if (!name || !email || !subject || !message) {
      toast.error("Email not sent ,Please fill in all fields", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      emailjs
        .sendForm(
          "service_abzd5cf",
          "template_ncd937d",
          form.current,
          "cea2TAaV7fu3Aqtyp"
        )
        .then(
          (result) => {
            setName("");
            setEmail("");
            setSubject("");
            setMessage("");

            setTimeout(() => {
              toast.success("Email Sent , I will get back to you soon", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });
            }, 1000);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <div className=" bg-white md:bg-[#FFD230] md:flex md:justify-between justify-center md:pt-20 mx-auto    md:p-24">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl md:text-5xl my-8 md:my-0 alstoria md:text-start text-center ">
          Got an inquiry <span className="quicksand-700">?</span>
        </h1>

        <p className="quicksand-500 text-xl md:text-start  text-center  font-medium">
          Learn more about our services.
        </p>
        <p className="quicksand-500 text-xl md:text-start  text-center font-medium">
          {" "}
          We'd love to help!
        </p>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex quicksand-400 flex-col gap-4  "
        >
          <div className="flex flex-col md:flex-row gap-[30px] ">
            <input
              type="text"
              name="client_name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-[315px] bg-[#FFD230] mx-auto md:mx-0 md:bg-white md:w-[299px] h-[42px] p-2  rounded-md"
            />
            <input
              type="text"
              placeholder="Email"
              name="client_email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-[315px] bg-[#FFD230]  mx-auto md:mx-0  md:bg-white  md:w-[299px] h-[42px] p-2  rounded-md"
            />
          </div>
          <div className="flex flex-col ">
            <input
              type="text"
              placeholder="Subject"
              name="client_subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="md:w-[628px] bg-[#FFD230]  mx-auto md:mx-0  md:bg-white w-[315px] h-[42px] p-2  rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <textarea
              cols="30"
              rows="10"
              placeholder="Message"
              name="client_message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="md:w-[628px] bg-[#FFD230]  mx-auto md:mx-0  md:bg-white w-[315px] h-[200px] p-2  rounded-md"
            ></textarea>
          </div>
          <div className="flex  mx-auto md:mx-0  w-[315px]  md:w-[628px] justify-between">
            <input
              type="checkbox"
              name=""
              id=""
              className="mr-2 h-6 w-6 text-5xl"
            />
            <p className="md:text-xl text-sm">
              I would love to receive information on newsletters and more offers
            </p>
          </div>
          <div className="flex md:justify-start justify-center">
            <button className="md:bg-white bg-black md:mr-24  hover:scale-105 transition-all duration-500 md:text-black text-white uppercase text-center py-4 px-8 justify-start  shadow-gray-300 rounded-md shadow-xl">
              Send Message
            </button>
          </div>
        </form>
      </div>
      <div>
        <img
          src={purposeinquirypic}
          alt="whatpic"
          className="h-[500px]  object-cover w-[500px] hidden md:block"
        />
      </div>
      <ToastContainer />
    </div>
  );
};

export default PurposeInquiry;
