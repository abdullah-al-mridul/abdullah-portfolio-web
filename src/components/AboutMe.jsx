import React from "react";
import WithAos from "./WithAos";
import AboutMeImage from "../images/about-me-img.png";
import SideBubble from "../images/side-bubble.png";
import { Link } from "react-router-dom";
const AboutMe = () => {
  return (
    <>
      <div className="pb-[112px]">
        <div className="text-[32px] flex items-center gap-[16px] mb-[25px] desktop-s:text-[30px] tablet-l:text-[26px] tablet-s:text-[22px]">
          <WithAos animation={"fade-up"}>
            <div className="text-white">
              <span className="text-[#c778dd]">#</span>
              <span>about-me</span>
            </div>
          </WithAos>
          <WithAos animation={"fade-down"}>
            <div className="h-[1px] w-[325px] tablet-l:w-[220px] bg-[#c778dd] tablet-s:w-[120px]"></div>
          </WithAos>
        </div>
        <div className="flex gap-[160px]">
          <div
            data-aos="zoom-in-right"
            className=" desktop-l:hidden pt-[50px] absolute left-0"
          >
            <div className="h-[155px] w-[77px] border border-white border-l-0"></div>
          </div>
          <div
            data-aos="zoom-in"
            className="pt-[350px] absolute desktop-l:hidden right-0"
          >
            <img src={SideBubble} alt="side-bubble" />
          </div>
          <div className="text-[16px] text-[#ABB2BF] desktop-s:text-[15px] tablet-s:text-[14px]">
            <WithAos animation={"fade-right"}>
              <div className="mb-[20px] desktop-s:mb-[15px]">
                <h6>Hello, I'm Abdullah</h6>
              </div>
            </WithAos>
            <WithAos animation={"fade-left"}>
              <div className="mb-[20px] desktop-s:mb-[15px]">
                <p>
                  As a 16-year-old MERN stack developer from Bangladesh, I craft
                  responsive web applications that deliver seamless user
                  experiences. With a strong foundation in MongoDB, Express,
                  React, and Node.js, I bring web projects to life from concept
                  to deployment.
                </p>
              </div>
            </WithAos>
            <WithAos animation={"fade-right"}>
              <div>
                <p>
                  With a passion for web development, I craft unique online
                  solutions that exceed client expectations. As a 16-year-old
                  MERN stack developer, I help diverse clients establish a
                  strong online presence. I'm committed to continuous learning,
                  staying current with the latest technologies to drive
                  innovation.
                </p>
              </div>
            </WithAos>
            <div className="mt-[27px] desktop-s:mt-[25px]">
              <WithAos animation={"fade-up"}>
                <Link to={"/about"}>
                  <button className="border text-white font-medium gap-[8px] py-[8px] px-[16px] border-[#C778DD] flex items-center justify-center read__more__btn after:transition-all desktop-s:text-[15px] tablet-s:text-[14px]">
                    Read More <i className="fa-light fa-arrow-right-long"></i>
                  </button>
                </Link>
              </WithAos>
            </div>
          </div>
          <div className=" shrink-0 desktop-s:hidden">
            <WithAos animation={"zoom-in"}>
              <img src={AboutMeImage} alt="sample-img" />
            </WithAos>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
