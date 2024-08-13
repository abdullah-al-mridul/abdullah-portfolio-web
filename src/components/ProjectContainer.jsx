import React from "react";
import ChatApp from "../images/chatapp.png";
import GamePhoto from "../images/2048-game.png";
import QuizPhoto from "../images/quiz-app.png";
const ProjectContainer = () => {
  return (
    <div className=" mt-[74px] mb-[106px]">
      <div className=" absolute desktop-l:hidden right-0 pt-[250px]">
        <div
          data-aos="zoom-in"
          className=" border border-r-0 border-[#ABB2BF] h-[155px] w-[125px]"
        ></div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-[16px]">
          <p
            data-aos="zoom-in-right"
            className=" text-[32px] desktop-s:text-[30px] text-white font-medium tablet-l:text-[26px] tablet-s:text-[22px]"
          >
            <span className="text-[#c778dd] ">#</span>
            projects
          </p>
          <div
            data-aos="fade-down"
            className="w-[500px] desktop-s:w-[350px] bg-[#c778dd]  h-[2px] tablet-l:w-[200px] tablet-s:w-[100px] mobile-l:w-[50px]"
          ></div>
        </div>
        <div>
          <button
            data-aos="zoom-in-left"
            className="text-[16px] desktop-s:text-[15px] after:transition-all view__all__btn font-medium text-white tablet-s:text-[14px]"
          >
            View All<span>{"~~>"}</span>
          </button>
        </div>
      </div>
      <div className="mt-[48px] tablet-l:mt-[30px]">
        <div className="w-full gap-[16px] flex tablet-s:flex-wrap">
          <div
            data-aos="zoom-in-right"
            className="w-full border border-[#ABB2BF] tablet-s:basis-[calc(50%-16px)] mobile-l:basis-[100%]"
          >
            <div className="w-full h-[200px] desktop-s:h-[170px] tablet-l:h-[150px] ">
              <img
                className="h-[100%] object-fill w-full"
                src={ChatApp}
                data-aos="zoom-in"
                alt="chat__app"
              />
            </div>
            <div
              data-aos="fade-down"
              className="p-[8px] border-b border-t border-[#ABB2BF]"
            >
              <ul className="flex flex-wrap gap-[8px] desktop-s:gap-[6px] desktop-s:text-[15px] text-[16px] text-[#ABB2BF] tablet-l:gap-[4px]">
                <li>HTML</li>
                <li>CSS</li>
                <li>JS</li>
                <li>React</li>
                <li>Firebase</li>
                <li>SCSS</li>
              </ul>
            </div>
            <div data-aos="zoom-in-left" className="p-[16px]">
              <h3
                data-aos="fade-right"
                className="text-[24px] desktop-s:text-[22px] font-medium text-white mb-[16px] desktop-s:mb-[14px] tablet-l:mb-[10px] tablet-l:text-[20px] tablet-s:text-[19px]"
              >
                Chat App
              </h3>
              <p
                data-aos="fade-left"
                className="text-[16px] desktop-s:text-[15px] text-[#ABB2BF] mb-[16px] desktop-s:mb-[14px]"
              >
                Web chat app for messaging
              </p>
              <div className="flex gap-[16px] font-medium desktop-s:text-[15px]">
                <button
                  data-aos="zoom-in-right"
                  className="px-[16px] after:transition-all text-white py-[8px] border-[#c778dd] project__btn border tablet-l:py-[4px] tablet-l:px-[14px] tablet-l:text-[14px]"
                >
                  <a target="_blank" href="https://m-chat-app.vercel.app">
                    Live {"<~>"}
                  </a>
                </button>
                <button
                  data-aos="zoom-in-left"
                  className="px-[16px] after:transition-all text-[#ABB2BF] py-[8px] border-[#ABB2BF] project__btn__gray border tablet-l:px-[14px] tablet-l:py-[4px] tablet-l:text-[14px]"
                >
                  <a
                    target="_blank"
                    href="https://github.com/abdullah-al-mridul/m-chat-app"
                  >
                    Code {">="}
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div
            data-aos="zoom-in-down"
            className="w-full border border-[#ABB2BF] tablet-s:basis-[calc(50%-16px)] mobile-l:basis-full"
          >
            <div className="w-full h-[200px] desktop-s:h-[170px] tablet-l:h-[150px]">
              <img
                data-aos="zoom-in"
                className="h-[100%] object-fill w-full"
                src={GamePhoto}
                alt="chat__app"
              />
            </div>
            <div
              data-aos="fade-down"
              className="p-[8px] border-b border-t border-[#ABB2BF]"
            >
              <ul className="flex flex-wrap gap-[8px] text-[16px] text-[#ABB2BF] desktop-s:gap-[6px] desktop-s:text-[15px]">
                <li>HTML</li>
                <li>CSS</li>
                <li>JS</li>
                <li>React</li>
                <li>SCSS</li>
              </ul>
            </div>
            <div data-aos="zoom-in-left" className="p-[16px]">
              <h3
                data-aos="fade-right"
                className="text-[24px] desktop-s:text-[22px] font-medium text-white mb-[16px] desktop-s:mb-[14px] tablet-l:mb-[10px] tablet-l:text-[20px] tablet-s:text-[19px]"
              >
                2048 Game
              </h3>
              <p
                data-aos="fade-left"
                className="text-[16px] desktop-s:text-[15px] text-[#ABB2BF] mb-[16px] desktop-s:mb-[15px]"
              >
                Web based 2048 game
              </p>
              <div className="flex gap-[16px] desktop-s:text-[15px] font-medium">
                <button
                  data-aos="zoom-in-right"
                  className="px-[16px] after:transition-all text-white py-[8px] border-[#c778dd] project__btn border tablet-l:py-[4px] tablet-l:px-[14px] tablet-l:text-[14px]"
                >
                  <a
                    target="_blank"
                    href="https://2048-game-ashen-pi.vercel.app/"
                  >
                    Live {"<~>"}
                  </a>
                </button>
                <button
                  data-aos="zoom-in-left"
                  className="px-[16px] after:transition-all text-[#ABB2BF] py-[8px] border-[#ABB2BF] project__btn__gray border tablet-l:px-[14px] tablet-l:py-[4px] tablet-l:text-[14px]"
                >
                  <a
                    target="_blank"
                    href="https://github.com/abdullah-al-mridul/2048-game"
                  >
                    Code {">="}
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div
            data-aos="zoom-in-left"
            className="w-full border border-[#ABB2BF] tablet-s:basis-[calc(50%-16px)] mobile-l:basis-full"
          >
            <div className="w-full h-[200px] desktop-s:h-[170px]">
              <img
                className="h-[100%] object-fill w-full"
                data-aos="zoom-in"
                src={QuizPhoto}
                alt="chat__app"
              />
            </div>
            <div
              data-aos="fade-down"
              className="p-[8px] border-b border-t border-[#ABB2BF]"
            >
              <ul className="flex flex-wrap gap-[8px] text-[16px] text-[#ABB2BF] desktop-s:text-[15px] desktop-s:gap-[6px]">
                <li>HTML</li>
                <li>CSS</li>
                <li>JS</li>
                <li>React</li>
                <li>SCSS</li>
              </ul>
            </div>
            <div data-aos="zoom-in-left" className="p-[16px]">
              <h3
                data-aos="fade-right"
                className="text-[24px] font-medium text-white mb-[16px] desktop-s:text-[22px] desktop-s:mb-[14px] tablet-s:text-[19px]"
              >
                Quiz App
              </h3>
              <p
                data-aos="fade-left"
                className="text-[16px] text-[#ABB2BF] mb-[16px] desktop-s:text-[15px] desktop-s:mb-[14px]"
              >
                Web based frontend quiz app
              </p>
              <div className="flex gap-[16px] font-medium desktop-s:text-[15px]">
                <button
                  data-aos="zoom-in-right"
                  className="px-[16px] after:transition-all text-white py-[8px] border-[#c778dd] project__btn border tablet-l:py-[4px] tablet-l:px-[14px] tablet-l:text-[14px]"
                >
                  <a
                    target="_blank"
                    href="https://quiz-app-ashen-tau.vercel.app/"
                  >
                    Live {"<~>"}
                  </a>
                </button>
                <button
                  data-aos="zoom-in-left"
                  className="px-[16px] after:transition-all text-[#ABB2BF] py-[8px] border-[#ABB2BF] project__btn__gray border tablet-l:px-[14px] tablet-l:py-[4px] tablet-l:text-[14px]"
                >
                  <a
                    target="_blank"
                    href="https://github.com/abdullah-al-mridul/frontend-quiz"
                  >
                    Code {">="}
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectContainer;
