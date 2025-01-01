"use client";
import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { AiFillMail } from "react-icons/ai";
import { FaEnvelope } from "react-icons/fa";
import { Hind } from "next/font/google";

const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function page() {
  const [state, setState] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setState({
      ...state,
      [key]: value,
    });
  };
  console.log(state);

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    const numbericValue = value.replace(/[]^0-9/g, "");
    setState({ ...state, phoneNumber: numbericValue });
  };

  const clearState = () => {
    setState({
      name: "",
      email: "",
      phoneNumber: "",
      subject: "",
      message: "",
    });
  };

  return (
    <React.Fragment>
      <div className="flex flex-col items-center justify-center w-full pt-[80px] pb-[-80px] mt-4">
        <div className="flex flex-col items-center justify-center bg-net bg-cover bg-center w-full h-[400px]">
          <div className="flex flex-col items-center justify-center w-full h-full bg-[#223740]/70 backdrop-brightness-50">
            <div href="#contact" className="cursor-pointer text-center bg-[#d60429] py-[5px] px-[10px] tracking-wide uppercase font-semibold text-[20px] text-white rounded-lg">
              <a className="cursor-pointer">Contact Form</a>
            </div>
            <div className="mt-[10px]">
              <h1 className="cursor-default recoletaBold text-5xl text-[#d60429] p-2 text-center tracking-wide">Hire Me</h1>
            </div>
            <div className="flex justify-center text-center mt-[10px] md:w-[700px] cursor-default">
              <p className="text-white font-[300] text-center text-xl">
                Are you looking for a dedicated and detail-oriented Full-Stack Developer? I'm eager to bring my expertise and problem-solving mindset to your team. Let's connect to
                discuss how I can contribute to your company's success.
              </p>
            </div>
          </div>
        </div>
        <div className="px-[20px]">
          <div className="sm:flex gap-[20px] mt-[50px] max-w-[1105px] w-full h-full">
            <div className="flex flex-col flex-1 xl:flex-row gap-[20px]">
              <div
                className="flex flex-col py-[35px] px-[45px] rounded-lg shadow-lg cursor-pointer transition-all transform duration-300 hover:bg-[#01161e] hover:text-white hover:-translate-y-4 bg-white"
                style={{ boxShadow: "#01161e -1px 1px 10px 0px" }}
              >
                <div className="flex items-center gap-[15px]">
                  <div>
                    <FaLocationDot size={40} color="#d60429" />
                  </div>
                  <div className="flex flex-col">
                    <div className="text-[#d60429] text-[16px]">
                      <p>Location...</p>
                    </div>
                    <div className="font-semibold text-[20px] tracking-wide">
                      <p>I Live in:</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="hover:text-white">Guanacaste, Costa Rica</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col flex-1 xl:flex-row gap-[20px]">
              <div
                className="flex flex-col py-[35px] px-[45px] rounded-lg shadow-lg cursor-pointer transition-all transform duration-300 hover:bg-[#01161e] hover:text-white hover:-translate-y-4 bg-white"
                style={{ boxShadow: "#01161e -1px 1px 10px 0px" }}
              >
                <div className="flex items-center gap-[15px]">
                  <div>
                    <FiPhoneCall size={40} color="#d60429" />
                  </div>

                  <div className="flex flex-col">
                    <div className="text-[#d60429] text-[16px]">
                      <p>Phone Number..</p>
                    </div>
                    <div className="font-semibold text-[20px] tracking-wide">
                      <p>Reach me at:</p>
                    </div>
                  </div>
                </div>
                <div className="justify-center text-center">
                  <p className="hover:text-white">+506 83080848</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col flex-1 xl:flex-row gap-[20px]">
              <div
                className="flex flex-col py-[35px] px-[45px] rounded-lg shadow-lg cursor-pointer transition-all transform duration-300 hover:bg-[#01161e] hover:text-white hover:-translate-y-4 bg-white"
                style={{ boxShadow: "#01161e -1px 1px 10px 0px" }}
              >
                <div className="flex items-center gap-[15px]">
                  <div>
                    <AiFillMail size={40} color="#d60429" />
                  </div>

                  <div className="flex flex-col">
                    <div className="text-[#d60429] text-[16px]">
                      <p>Email Address...</p>
                    </div>
                    <div className="font-semibold text-[20px] tracking-wide">
                      <p>Drop me an email at:</p>
                    </div>
                  </div>
                </div>
                <div className="justify-center text-center">
                  <p className="hover:text-white">jlam97@hotmail.es</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="contact" className="flex flex-col xl:flex-row justify-center gap-[60px] mt-[10px] px-[30px] max-w-[1105px] m-auto p-10">
        <div className="hidden md:block relative w-[50%] xl:w-[50%] h-[550px] rounded-xl md:w-full lg:w-[50%] bg-center bg-cover" style={{ backgroundImage: `url('/email.png')` }}>
          <div className="absolute-full h-full w-full bg-gradient-to-t from-[#223740] via-[#223740] shadow-inner opacity-70" style={{ borderRadius: "15px" }}></div>
          <div className="absolute inset-0 flex flex-col gap-[20px] items-center justify-center text-white shadow-lg p-6">
            <div className="text-4xl xl:mt-[150px] mt-0 rounded-full px-[15px] py-[15px] bg-[#01161e] text-[#d60429]">
              <FaEnvelope />
            </div>
            <div className="font-semibold text-[24px] rounded-full px-[10px] py-[10px] bg-[#01161e] cursor-default">Contact me via email!</div>
            <div>
              <p className="bg-[#223740]/10 backdrop-brightness-50 text-center text-xl mt-5 font-[200] px-4 py-2 rounded-lg shadow-md cursor-default">
                Interested in adding a committed Full-Stack Developer to your team? Send me an email, and let's talk about how I can bring value to your projects.
              </p>
            </div>
            <div>
              <div className="bg-[#d60429] text-white mb-[30px] px-4 py-2 hover:bg-[#01161e] transition-color rounded-xl cursor-default">Let's Talk</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[20px]">
          <div className="text-center w-[100px] text-white bg-[#d60429] py-[1px] tracking-wide uppercase font-300 font-sans text-[14px] rounded-lg cursor-default">
            Write an email
          </div>
          <div className="">
            <p className="text-[30px] text-[#01161e] cursor-default">Feel free to get in touch with me.</p>
          </div>
          <form className="flex flex-col gap-[20px]">
            <div className={`flex flex-col sm:flex-row gap-[20px] ${hind.className}`}>
              <input
                type="text"
                name="name"
                placeholder="Name..."
                required
                onChange={handleChange}
                value={state.name}
                className="px-[12px] outline-none rounded-md py-[12px] flex-1 bg-gray-200"
              />
              <input
                type="email"
                name="email"
                placeholder="Email..."
                required
                onChange={handleChange}
                value={state.email}
                className="px-[12px] outline-none rounded-md py-[12px] flex-1 bg-gray-200"
              />
            </div>
            <div className={`flex flex-col sm:flex-row gap-[20px] ${hind.className}`}>
              <input
                type="text"
                name="phoneNumber"
                placeholder="Phone Number (Optional)"
                onChange={handlePhoneChange}
                value={state.phoneNumber}
                className="px-[12px] outline-none rounded-md py-[12px] flex-1 bg-gray-200"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject..."
                required
                onChange={handleChange}
                value={state.subject}
                className="px-[12px] outline-none rounded-md py-[12px] flex-1 bg-gray-200"
              />
            </div>
            <div className={`${hind.className}`}>
              <textarea
                required
                name="message"
                placeholder="Type a Message..."
                onChange={handleChange}
                value={state.message}
                className="px-[12px] outline-none h-[180px] w-full rounded-md py-[12px] flex-1 bg-gray-200"
              />
            </div>
            <div>
              <button className="bg-[#d60429] w-full sm:w-auto px-[30px] py-[12px] hover:bg-[#01161e] transition-colors duration-300 font-semibold rounded-lg text-white "
              style={{ boxShadow: "#01161e -1px 1px 10px 0px" }}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}
