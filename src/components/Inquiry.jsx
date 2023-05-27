import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Inquiry = () => {
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
    <div
      className="
    bg-[#FFD230] flex-col-reverse md:flex-row  flex justify-between py-12 md:p-24"
    >
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex quicksand-400 flex-col gap-4 w-[90%] mx-auto md:ml-0 md:mr-0"
      >
        <div className="flex flex-col md:flex-row gap-[30px]">
          <input
            type="text"
            placeholder="Name"
            name="client_name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="md:w-[299px]  w-[95%] mx-auto md:ml-0 md:mr-0 h-[42px] p-2  rounded-md"
          />
          <input
            type="email"
            placeholder="Email"
            name="client_email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="md:w-[299px]  w-[95%] mx-auto md:ml-0 md:mr-0 h-[42px] p-2  rounded-md"
          />
        </div>
        <div className="flex flex-col ">
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Subject.."
            name="client_subject"
            className="md:w-[628px] w-[95%] mx-auto md:ml-0 md:mr-0 h-[42px] p-2  rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <textarea
            id=""
            cols="30"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="10"
            placeholder="Message"
            name="client_message"
            className="md:w-[628px] w-[95%] mx-auto md:ml-0 md:mr-0 h-[200px] p-2  rounded-md"
          ></textarea>
        </div>
        <div className="flex md:w-[628px] w-[95%] mx-auto md:mx-0  py-4 justify-start">
          <input
            type="checkbox"
            name=""
            id=""
            className="mr-2 h-6 w-6 text-5xl"
          />
          <p className="text-xl">
            I would love to receive information on newsletters and more offers
          </p>
        </div>
        <div className="flex md:justify-start justify-center">
          <button
            className="bg-white md:mr-24  hover:scale-105 transition-all duration-500 text-black uppercase text-center py-4 px-8 justify-start  shadow-[#00000040] rounded-md shadow-xl"
            type="submit"
          >
            Send Message
          </button>
        </div>
      </form>
      <div className="flex flex-col font-normal text-center md:text-end gap-4 justify-center ">
        <div className="flex justify-center md:block">
          <h1 className="md:text-7xl text-4xl alstoria ">Got An</h1>
          <h1 className="md:text-7xl text-4xl alstoria">
            Inquiry <span className="quicksand-700">?</span>
          </h1>
        </div>

        <p className="font-normal quicksand-700  text-xl md:text-3xl ">
          Learn more about our services
        </p>
        <p className="font-normal quicksand-700 md:mb-0 mb-4   text-2xl">
          We'd love to help!
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Inquiry;
