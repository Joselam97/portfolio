import React from "react";

export default function Footer() {
  return (
    <div id="footer">
      <div className="bg-white pt-0 ">
        <div className="max-w-[1140px] bg-[#01161e] rounded-xl px-[20px] sm:px-[64px] py-[64px] m-auto" style={{ transform: "translate(0px, 70px)" }}>
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-9">
              <p className="text-[30px] text-[#47626d] text-center lg:text-start">Looking for a Team Player? Let's Connect</p>
              <p className="text-[#f5f3f4] font-sans text-center lg:text-start">
              Every successful journey starts with a conversation. Let's explore how my skills and experience can contribute to your team's success.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-3">
              <div className="flex justify-center mt-5 lg:mt-0">
                <a
                  className="font-sans cursor-pointer px-10 py-5 bg-[#d90429] rounded-xl text-[#f5f3f4] font-medium text-lg hover:bg-[#47626d] hover:show-lg transform hover:translate-y-1"
                  href="/#hire-me"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-[#223740]">
        <div className="mx-auto max-w-screen-xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center space-x-10 mt-12">
            <a className="group flex flex-col items-center justify-center" target="_blank" href="https://github.com/Joselam97">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 496 512"
                className="w-8 h-8 text-gray-300 transition-colors duration-300 group-hover:text-[#d90429]"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z"></path>
              </svg>
              <span className="mt-2 text-sm font-sans text-gray-300 group-hover:text-[#d90429]">GitHub</span>
            </a>

            <a className="group flex flex-col items-center justify-center" target="_blank" href="https://www.linkedin.com/in/jose-alvarez-003ba818b/">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                className="w-8 h-8 text-gray-300 transition-colors duration-300 group-hover:text-[#d90429]"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
              </svg>
              <span className="mt-2 text-sm font-sans text-gray-300 group-hover:text-[#d90429]">LinkedIn</span>
            </a>

            <a className="group flex flex-col items-center justify-center" target="_blank" href="https://www.instagram.com/joselam__/">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 448 512"
                class="w-8 h-8 text-gray-300 transition-colors duration-300 group-hover:text-[#d90429]"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
              </svg>
              <span className="mt-2 text-sm font-sans text-gray-300 group-hover:text-[#d90429]">Instagram</span>
            </a>
            <a className="group flex flex-col items-center justify-center" target="_blank" href="mailto:jlam97@hotmail.es">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                class="w-8 h-8 text-gray-300 transition-colors duration-300 group-hover:text-[#d90429]"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
              </svg>
              <span className="mt-2 text-sm font-sans text-gray-300 group-hover:text-[#d90429]">Email</span>
            </a>
          </div>
          <p className="mt-10 text-gray-300 font-sans text-center">Let's Build Something Together!</p>
          <p className="text-xs text-gray-300 font-sans text-center">&copy; 2024. Jose Alvarez</p>
        </div>
      </footer>
    </div>
  );
}
