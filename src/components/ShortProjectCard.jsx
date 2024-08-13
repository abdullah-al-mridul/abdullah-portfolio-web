import React from "react";

const ShortProjectCard = ({
  techStackList = ["xxx", "xxx", "xxx"],
  header = "Header",
  bio = "This is description",
  link = "#",
}) => {
  return (
    <div data-aos="zoom-in-right" className="w-full border border-[#ABB2BF]">
      <div data-aos="fade-down" className="p-[8px] border-b  border-[#ABB2BF]">
        <ul className="flex flex-wrap gap-[8px] text-[16px] text-[#ABB2BF] desktop-s:text-[15px] desktop-s:gap-[6px]">
          {techStackList.map((text, idx) => {
            return <li key={idx}>{text}</li>;
          })}
        </ul>
      </div>
      <div data-aos="zoom-in-left" className="p-[16px]">
        <h3
          data-aos="fade-right"
          className="text-[24px] font-medium text-white mb-[16px] desktop-s:text-[22px] desktop-s:mb-[14px] mobile-l:text-[20px] mobile-l:mb-[8px]"
        >
          {header}
        </h3>
        <p
          data-aos="fade-left"
          className="text-[16px] text-[#ABB2BF] mb-[16px] desktop-s:text-[15px]"
        >
          {bio}
        </p>
        <div className="flex gap-[16px] font-medium">
          <a href={link} target="_blank">
            <button
              data-aos="zoom-in-right"
              className="px-[16px] after:transition-all text-white py-[8px] border-[#c778dd] project__btn border desktop-s:text-[15px] mobile-l:py-[6px] mobile-l:px-[12px] mobile-l:text-[14px]"
            >
              <span>Live {"<~>"}</span>
            </button>
          </a>
          <a href={link} target="_blank">
            <button
              data-aos="zoom-in-left"
              className="px-[16px] after:transition-all text-[#ABB2BF] py-[8px] border-[#ABB2BF] project__btn__gray border mobile-l:py-[6px] mobile-l:px-[12px] mobile-l:text-[14px]"
            >
              <span>Code {">="}</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ShortProjectCard;
