import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { AiFillMail, AiOutlineFieldTime } from "react-icons/ai";
import { FaHeadphones } from "react-icons/fa";

export default function page() {
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
            <div className="flex justify-center text-center mt-[10px] md:w-[700px]">
              <p className="text-white font-[300] text-center text-xl">
                Are you looking for a dedicated and detail-oriented Full-Stack Developer? I'm eager to bring my expertise and problem-solving mindset to your team. Let's connect to
                discuss how I can contribute to your company's success.
              </p>
            </div>
          </div>
        </div>
        <div className="px-[20px]">
          <div className="sm:flex gap-[20px] mt-[50px] max-w[1105px] w-full h-full">
            <div className="flex flex-col flex-1 xl:flex-row gap-[20px]">
              <div
                className="flex flex-col py-[35px] px-[45px] rounded-lg shadow-lg cursor-pointer transition-all transform duration-300 hover:bg-[#223740] hover:text-white hover:-translate-y-4 bg-white"
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
                    <p className="hover:bg-[#223740] hover:text-white hover:-translate-y-4 bg-white]">Guanacaste, Costa Rica</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col flex-1 xl:flex-row gap-[20px]">
              <div
                className="flex flex-col py-[35px] px-[45px] rounded-lg shadow-lg cursor-pointer transition-all transform duration-300 hover:bg-[#223740] hover:text-white hover:-translate-y-4 bg-white"
                style={{ boxShadow: "#01161e -1px 1px 10px 0px" }}
              >
                <div className="flex items-center gap-[15px]">
                  <div>
                    <FaLocationDot size={40} color="#d60429" />
                  </div>

                  <div className="flex flex-col">
                    <div className="text-[#d60429] text-[16px]">
                      <p>Email Me</p>
                    </div>
                    <div className="font-semibold text-[20px] tracking-wide">
                      <p>I Live in:</p>
                    </div>
                  </div>
                </div>
                <div>
                    <p className="hover:bg-[#223740] hover:text-white hover:-translate-y-4 bg-white]">Guanacaste, Costa Rica</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col flex-1 xl:flex-row gap-[20px]">
              <div
                className="flex flex-col py-[35px] px-[45px] rounded-lg shadow-lg cursor-pointer transition-all transform duration-300 hover:bg-[#223740] hover:text-white hover:-translate-y-4 bg-white"
                style={{ boxShadow: "#01161e -1px 1px 10px 0px" }}
              >
                <div className="flex items-center gap-[15px]">
                  <div>
                    <FaLocationDot size={40} color="#d60429" />
                  </div>

                  <div className="flex flex-col">
                    <div className="text-[#d60429] text-[16px]">
                      <p>Call Me</p>
                    </div>
                    <div className="font-semibold text-[20px] tracking-wide">
                      <p>I Live in:</p>
                    </div>
                  </div>
                </div>
                <div>
                    <p className="hover:bg-[#223740] hover:text-white hover:-translate-y-4 bg-white]">Guanacaste, Costa Rica</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
