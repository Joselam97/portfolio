"use client";
import React, { useEffect, useState } from "react";
import Drawer from "./DiagonalDrawer";
import '../Header/DiagonalDrawer.css'


export default function Header() {
  const [selectedIndex1, setSelectedIndex1] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSmallDevice, setIsSmallDevice] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };

    const handleResize = () => {
      setIsSmallDevice(window.innerWidth <= 640); 
    };


    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const openDrawer = () => {
    setIsOpen(true);
  };

  
  return (
    <React.Fragment>
      <div className={`diagonal-drawer ${isOpen ? "open" : ""}`}>
        <Drawer
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        selectedIndex1={selectedIndex1}
        setSelectedIndex1={setSelectedIndex1}
        />
      </div>
      <header
        className={`${isScrolled ? "headerShow" : ""} 
          w-full fixed top-0 z-50 h-0 sm:h-24 transition-all duration-500`}
       style={{
         backgroundColor: isScrolled
           ? "#fff"
           : isSmallDevice
           ? "transparent" 
           : "white",   
         boxShadow: isScrolled ? "#01161e -50px 1px 100px 10px" : "",
       }}
      >


        <div className="relative">
            <div
            onClick={openDrawer}
            className="z-30 absolute cursor-pointer w-14 h-14 lg:w-24 lg:h-24 bg-[#d90429] flex justify-center items-center rounded-br-3xl">
                <div className="relative w-7 lg:w-10 h-7 lg:h-10 flex justify-center items-center">
                    <img src="/drawer.png" alt="drawer item" className="w-[150px] h-10"/>
                </div>
            </div>
        </div>

        <nav className="invisible xl:visible xl:max-w-4xl 2xl:max-w-7xl mx-auto">
          <ul className="flex font-recoletaBlack flex-row items-center h-24">
            <li className="group text-2xl relative font-bold mr-20">
              {selectedIndex1 === 1 ? (
                <span className="menu-effect transform opacity-100 -rotate-12 group-hover:-rotate-12 group-hover:opacity-100"></span>
              ) : (
                <span className="menu-effect transform opacity-100 rotate-12 group-hover:-rotate-12 group-hover:opacity-100"></span>
              )}
              <a className={`menu-item ${selectedIndex1 === 0 ? "text-[#01161e]" : ""} text-[#01161e] group-hover:text-[#495057]`}
                 href="/#home" 
                 onClick={() => selectedIndex1(1)}>
                Home
              </a>
            </li>

            <li className="group text-2xl relative font-bold mr-20">
              {selectedIndex1 === 2 ? (
                <span className="menu-effect transform opacity-100 -rotate-12 group-hover:-rotate-12 group-hover:opacity-100"></span>
              ) : (
                <span className="menu-effect transform opacity-100 rotate-12 group-hover:-rotate-12 group-hover:opacity-100"></span>
              )}
              <a
                className={`menu-item ${selectedIndex1 === 0 ? "text-[#01161e]" : ""} text-[#01161e] group-hover:text-[#495057]`}
                href="/#portfolio"
                onClick={() => selectedIndex1(2)}
              >
                Portfolio
              </a>
            </li>

            <li className="group text-2xl relative font-bold mr-20">
              {selectedIndex1 === 3 ? (
                <span className="menu-effect transform opacity-100 -rotate-12 group-hover:-rotate-12 group-hover:opacity-100"></span>
              ) : (
                <span className="menu-effect transform opacity-100 rotate-12 group-hover:-rotate-12 group-hover:opacity-100"></span>
              )}
              <a
                className={`menu-item ${selectedIndex1 === 0 ? "text-[#01161e]" : ""} text-[#01161e] group-hover:text-[#495057]`}
                href="/#about-me-component"
                onClick={() => selectedIndex1(3)}
              >
                About Me
              </a>
            </li>

            <li className="group text-2xl relative font-bold mr-20">
              {selectedIndex1 === 4 ? (
                <span className="menu-effect transform opacity-100 -rotate-12 group-hover:-rotate-12 group-hover:opacity-100"></span>
              ) : (
                <span className="menu-effect transform opacity-100 rotate-12 group-hover:-rotate-12 group-hover:opacity-100"></span>
              )}
              <a
              className={`menu-item ${selectedIndex1 === 0 ? "text-[#01161e]" : ""} text-[#01161e] group-hover:text-[#495057]`}
                 /*className={`menu-item ${isScrolled ? "text-[#01161e]" : "text-[#f5f3f4]"
                    } group-hover:text-[#495057]`} */
                href="/page/contactme"
                onClick={() => selectedIndex1(4)}
              >
                Hire Me
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </React.Fragment>
  );
}
