"use client";
import HomeComponent from "./components/HomeComponent/HomeComponent";
import { Hind } from "next/font/google";
import MySlider from "./components/SliderCard/MySlider";
import AboutMe from "./components/AboutMe/AboutMe";

const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <HomeComponent />
      <div id="portfolio" className="mt-0 pt-5 -mb-40" style={{ backgroundImage: "linear-gradient(-62deg, #f5f3f4 0 60%, white 0% 100%)", width: "100%" }}>
        <div className="container m-auto">
          <p className="text-[300px] text-[#f7fbfd] md:pl-[50px] px-5 max-w-[750px] w-[100%] overflow-hidden" style={{ transform: "translate(0px, -20px)" }}>
            portfolio
          </p>
          <div style={{ transform: "translate(0px, -250px)" }}>
            <p className="text-[#d90429] md:pl-[80px] px-5 font-semibold text-5xl">Recent Projects</p>
            <p className={`max-w-2xl md:pl-[80px] px-5 text-[18px] text-[#47626d] leading-8 mt-5 ${hind.className}`}>
              As a <strong>Full Stack Developer,</strong> I combine creativity with functionality
              to build intuitive and modern user interfaces using <strong>HTML, CSS and JavaScript</strong>. On the backend, I
              develop robust and scalable applications with <strong>Java and Jakarta EE{" "}</strong> 
              leveraging frameworks like <strong>JSF and Hibernate,{" "}</strong> 
              integrated seamlessly with <strong>MySQL</strong> databases. My
              commitment to clean, maintainable code ensures innovative, efficient
              and performance-driven solutions in every project I deliver.
            </p>
          </div>
        </div>
        <div
        style={{ transform: "translate(0px, -170px)" }}
        >
          <MySlider/>
        </div>
      </div>
      <AboutMe/>

    </main>
  );
}
