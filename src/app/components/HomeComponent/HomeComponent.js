import React from "react";
import { Hind } from "next/font/google";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function HomeComponent() {

    var settings = {
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        speed: 2000,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        loop: true,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1760,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            },
          },
          {
            breakpoint: 1460,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            },
          },
          {
            breakpoint: 1290,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            },
          },
          {
            breakpoint: 1100,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            },
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            },
          },
    
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              initialSlide: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
        ],
    
    };


  return (
    <React.Fragment>
      <div
        id="home"
        style={{
          backgroundImage: "linear-gradient(62deg, #f5f3f4 0 50%, #01161e 0% 100%)",
          minHeight: "500px",
          maxHeight: "1200px",
          height: "100%",
          width: "100%",
        }}
      >
        <div className="container m-auto">
          <div className="grid grid-cols-12">
            <div className="bg-white flex flex-col justify-center col-span-12 md:col-span-5 md:bg-transparent">
              <div className="container m-auto">
                <div className="lg:pl-24 sm:pl-10 pl-0 py-20 md:py-0 md:text-start text-center">
                  <p className={`text-[#d90429] text-3xl md:text-base lg:text-2xl ${hind.className}`}>Hi There!</p>
                  <h1 className="text-[#01161e] font-recoletaBlack text-5xl md:text-5xl lg:text-7xl xl:text-7xl mt-5 md:mt-3">I'm Jose Alvarez</h1>
                  <h2 className={`text-[#01161e] py-2 font-bold uppercase md:text-xl ${hind.className}`}>Computer Engineer & Passionate Programmer</h2>
                  <a href="https://github.com/Joselam97" target="_blank" rel="noopener noreferrer" 
                    className={`cursor-pointer inline-block bg-[#d90429] transition-all duration-300 ease-in-out rounded-lg text-white py-3 px-5 font-bold mt-8 uppercase
                            md:py-2 lg:py-3 lg:px-8 md:text-xs lg:text-base md:mt-5 xl:mt-10 hover:bg-[#01161e] hover:show-lg transform hover:translate-y-1 ${hind.className}`}
                  >
                    github 
                  </a>
                  <a
                    href="/CV_JoseAlvarez.pdf"
                    download="CV_JoseAlvarez.pdf"
                    className={`ml-10 cursor-pointer inline-block bg-[#d90429] transition-all duration-300 ease-in-out rounded-lg text-white py-3 px-5 font-bold mt-8 uppercase
                            md:py-2 lg:py-3 lg:px-8 md:text-xs lg:text-base md:mt-5 xl:mt-10 hover:bg-[#01161e] hover:show-lg transform hover:translate-y-1 ${hind.className}`}
                  >
                    My Resume
                  </a>
                </div>
              </div>
            </div>
            <div className="col-span-12 pt-[50px] md:bg-transparent bg:-[#f5f3f4] md:pt-[130px] md:col-span-7">
              <div className="container m-auto">
                <img src="/JoseImage.png" decoding="async" alt="profile pics"></img>
              </div>
            </div>
          </div>
          <div className="container m-auto absolute">
            <div className="px-3">
                <div className="relative max-w-sm bottom-[70px] md:max-w-5xl xl:max-w-6xl px-5 lg:px-14 overflow:auto mx-auto bg-white rounded-2xl z-20 "
                style={{
                    boxShadow: "#01161e -10px 25px 50px 10px"
                }}>
                    <div className="lg:py-5 md:py-6 sm:py-6 cursor-all-scroll">
                        <Slider {...settings}>
                        <img src='/JavaScript.png' alt="javascript" className="h-12"/>
                        <img src='/html.png' alt="html" className="h-12"/>
                        <img src='/css.png' alt="css" className="h-12"/>
                        <img src='/nextjs.png' alt="nextjs" className="h-12"/>
                        <img src='/java.png' alt="java" className="h-12"/>
                        <img src='/python.png' alt="python" className="h-12"/>
                        <img src='/oracle.png' alt="oracle" className="h-12"/>
                        <img src='/mysql.png' alt="mysql" className="h-12"/>
                        </Slider>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
