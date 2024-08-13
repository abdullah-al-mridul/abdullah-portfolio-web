import React from "react";
import SamplePic from "../images/sample-pic.png";
import { Typewriter } from "react-simple-typewriter";
import HeadingText from "./HeadingText";

const HeroContainer = () => {
  const typeWriterWords = [
    "He crafts responsive websites where technologies meet creativity",
    "Where technology meets imagination, he crafts websites that are as innovative as they are user-friendly",
    "With a blend of tech-savvy skills and creative finesse, he designs websites that inspire and perform",
    "Harnessing technology to fuel creativity, he delivers websites that are both functional and visually stunning",
    "From code to creativity, he builds websites that harmonize cutting-edge technology with captivating design",
    "Combining technical expertise with artistic vision, he creates websites that elevate user experience to new heights",
  ];
  const __headingText__ =
    "Abdullah is a MERN stack developer specializing in full-stack web development";
  const __headerArr__ = __headingText__.split(" ");
  return (
    <div>
      <div className="mt-[62px] flex gap-[20px] tablet-l:gap-[50px] tablet-l:flex-col mobile-l:mt-[35px]">
        <div className="flex flex-col justify-center">
          <div
            data-aos="zoom-in"
            className="wow animate-animated block animate__rollIn"
          >
            <h1 className="text-white text-[32px]  font-semibold desktop-s:text-[28px] desktop-m:text-[30px] tablet-l:text-[25px] mobile-l:text-[23px]">
              {__headerArr__.map((word, index) => (
                <HeadingText key={index} word={word} />
              ))}
            </h1>
          </div>
          <p
            data-aos="fade-right"
            className="mt-[32px] desktop-s:mt-[26px] desktop-m:text-[15px] text-[#ABB2BF] animate__rubberBand wow animate__animated min-h-[80px] mobile-l:text-[13px]"
          >
            <Typewriter
              words={typeWriterWords}
              loop={0}
              typeSpeed={20}
              deleteSpeed={10}
            />
          </p>
          <div data-aos="zoom-in" className="wow animate__flip">
            <button
              href="#contact"
              className="wow animate__animated animate__flip contact__me__btn w-[max-content] cursor-pointer after:transition-all transition-all py-[8px] px-[16px] border border-[#C778DD] mt-[24px] text-[16px] font-medium text-white  hover:scale-110 hover:rotate-2 desktop-s:text-[15px] mobile-l:hover:rotate-0"
              // data-aos="fade-up-right"
            >
              Contact me!!
            </button>
          </div>
        </div>
        <div className="flex-shrink-0 desktop-m:w-[400px] desktop-s:w-[350px] relative tablet-l:w-full tablet-l:flex tablet-l:justify-center">
          <img
            // data-aos="zoom-in-left"
            className="wow animate__animated animate__bounceInDown tablet-l:hidden"
            src={SamplePic}
            alt="sample-pic"
          />

          <p className=" absolute w-[80%] ml-[50%] translate-x-[-50%] border border-[#ABB2BF] px-[8px] py-[8px] bg-[#282C33] flex items-center text-[#ABB2BF] desktop-s:text-[14px] tablet-l:static tablet-l:ml-0 tablet-l:translate-x-0 mobile-l:text-[13px]">
            <span className="mr-[8px] bg-[#C778DD] block h-[16px] w-[16px]"></span>
            Currently working on{" "}
            <span className="text-white after:transition-all cursor-pointer text__practice ml-[8px]">
              Practice
            </span>
          </p>
        </div>
      </div>
      <div className="mt-[152px] flex flex-col items-center tablet-l:mt-[80px]">
        <div className=" absolute desktop-l:hidden right-0  pt-8">
          <div className="w-[90px] h-[90px] border-r-0 border border-[#ABB2BF]"></div>
        </div>
        <div className=" w-[max-content] mobile-l:w-[90%]">
          <p
            data-aos="flip-right"
            className="motto__text after:transition-all p-[32px] font-medium text-[24px] desktop-m:text-[22px] border border-[#ABB2BF] text-white tablet-l:text-[18px] tablet-l:p-[26px] tablet-s:p-[14px] tablet-s:text-[14px] mobile-l:w-full"
          >
            With great power comes great electricity bill
          </p>
          <div className="w-full flex justify-end">
            <div data-aos="zoom-in-up">
              <p
                data-aos="flip-up"
                className="p-[16px] w-[max-content] border-t-0 desktop-m:text-[22px] text-[24px] font-medium border border-[#ABB2BF] text-white tablet-l:text-[18px] tablet-l:p-[14px] tablet-s:text-[15px]"
              >
                {"- Dr. Who"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContainer;
