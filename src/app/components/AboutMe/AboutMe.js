"use client";
import React, { useState } from "react";
import { Hind } from "next/font/google";
import { AboutData } from "../../data";
import "./aboutme.css"

const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function AboutMe() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isFaded, setIsFaded] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [mapData, setMapData] = useState(AboutData[0]);

  const myFunctions = (data) => {
    setIsFlipped(false);
    setIsFaded(false);
    setMapData(data);
  };

  const handleCardClick = (data, index) => {
    setIsFlipped(true);
    setIsFaded(true);
    setSelectedIndex(index);

    setTimeout(() => myFunctions(data), 600);
  };

  const handleMouseLeave = () => {
    setSelectedIndex(null);
  };

  return (
    <React.Fragment>
      <div id="about-me-component" className="bg-[#f5f3f4] pt-[250px] mt-10 pb-[100px] lg:pb-[600px] relative lg:h-[800px]">
        <div className="container m-auto">
          <h1 className="text-[240px] w-[80%] overflow-hidden absolute lg:left-40 md:left-30 top-[-30px]  text-[#f7fbfd]">About Me</h1>
          <h1 className="relative font-recoletaBlack text-5xl text-[#d90429] mb-5 -mt-40 md:px-24 px-5">About Myself</h1>
          <h4 className="relative w-full font-[300] md:w-3/4 lg:w-2/3 xl:w-1/2 font-recoleta text-[#01161e] text-2xl mb-10 px-5 md:px-24">Full-Stack Web Developer</h4>
          <section className="relative flex flex-col lg:flex-row px-5 md:px-24">
            <p className={`text-[17px] leading-8 w-full lg:w-1/3 text-[#47626d] mr-0 mb-5 lg:mr-20 ${hind.className}`}>
              I specialize in Full Stack development, working with backend technologies like <strong>Java, Jakarta EE, Hibernate, Python</strong> and frontend tools like{" "}
              <strong>HTML, CSS, JavaScript, JSF, PrimeFaces and Bootstrap.</strong> I'm skilled in creating responsive designs, building RESTful APIs, implementing MVC patterns
              and managing databases with <strong>MySQL and Oracle SQL.</strong> With experience in <strong>Git</strong> and agile methodologies, I bring a structured and
              collaborative approach to software development.
            </p>
            <p className={`text-[17px] leading-8 w-full lg:w-1/3 text-[#47626d] mr-0 mb-5 lg:mr-4 ${hind.className}`}>
              <strong>I am a Computer Engineering student</strong> passionate about programming and driven by a constant desire to learn. Through my academic journey and hands-on
              experience with <strong>over 10 projects on GitHub</strong>, I've developed the skills to tackle real-world challenges in web development. As a result, it's not
              unexpected that I've listed a lot of abilities here:
            </p>
            <p></p>
          </section>
        </div>
      </div>

      <div
        style={{
          backgroundImage: "linear-gradient(45deg, white 0 70%, #d90429 30%)",
          width: "100%",
          paddingTop: "70px",
        }}
        className="lg:-mt-60"
      >
        <section className="container flex flex-col m-auto sm:flex-row px-5 md:px-24 mt-[50px sm:mt-0] transform translate-y-[-100px]">
          <div className=" flex-wrap w-full sm:w-1/2 lg:w-7/12">
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 mr-0 lg:mr-10">
              {AboutData.map((item, index) => (
                <a
                  key={index}
                  onClick={() => handleCardClick(item, index)}
                  onMouseLeave={handleMouseLeave}
                  style={{ boxShadow: "#01161e -5px 10px 20px 0px" }}
                  className={`relative cursor-pointer transition-all transform duration-300 group rounded-xl center p-6 lg:p-10 flex flex-col justify-center items-center ${
                    selectedIndex === index ? " -translate-y-2 bg-[#01161e]" : "hover:bg-[#01161e] hover:shadow-xl hover:-translate-y-2 bg-white"
                  }`}
                >
                  <div className="w-16 h-16 sm:w-10 sm:h-10 lg:w-16 lg:h-16">
                    <img src={item.img} />
                  </div>
                  <h4
                    className={`text-center text-sm lg:text-xl font-recoletaBold transition-colors duration-500 group-hover:text-white text-[#01161e] mt-3 ${
                      selectedIndex === index ? "text-[#01161e]" : ""
                    }`}
                  >
                    {item.title}
                  </h4>

                  <div
                    className={`absolute -top-2 -right-2 transform transition-all duration-500 opacity-0 group-hover:opacity-100 shadow-xl w-12 h-12 rounded-lg bg-[#d90429] flex justify-center items-center font-bold text-white font-recoletaBold text-xl ${
                      selectedIndex === index ? "opacity-100 rotate-12" : "group-hover:rotate-12"
                    }`}
                  >
                    {item.count}
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-5/12 overflow-visible px-0 sm:pl-6 xl:px-10">
            <div className="bg-[#01161e] rounded-xl p-10 xl:p-12 shadow-accent-color relative">
              <section className={`fade-left overflow-hidden ${isFaded ? "fade-out" : ""}`}>
                <p className={`text-[#d90429] ${hind.className} text-lg sm:text-base lg:text-xl transition duration-500 transform opacity-100`}>My Tech Skills are:</p>
                <h2 className="font-recoletaBold text-[#47626d] text-3xl sm:text-2xl md:text-3xl mb-6 w-44 md:w-56 transition duration-500 transform opacity-100">
                  {mapData.title}
                </h2>
                <ul className={`${hind.className} font-[300] list-disc text-white ml-8 lg:ml-8 text-base lg:text-lg transition duration-500 transform opacity-100`}>
                  {mapData.array.map((skills, index) => (
                    <li key={index}>{skills}</li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
}
