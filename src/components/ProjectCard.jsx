import React from "react";

const ProjectCard = ({
  imgLink = "",
  techStackList = ["xxx", "xxx", "xxx"],
  header = "Header",
  bio = "This is description",
  imgAlt = "img",
  verified = false,
  link = "#",
  git__link = "#",
}) => {
  return (
    <div data-aos="zoom-in-right" className="w-full border border-[#ABB2BF]">
      <div className="w-full h-[200px] desktop-s:h-[170px]">
        <img
          className="h-[100%] w-full object-fill"
          src={imgLink}
          data-aos="zoom-in"
          alt={imgAlt}
        />
      </div>
      <div
        data-aos="fade-down"
        className="p-[8px] border-b border-t border-[#ABB2BF]"
      >
        <ul className="flex flex-wrap gap-[8px] text-[16px] text-[#ABB2BF] desktop-s:text-[15px] desktop-s:gap-[6px]">
          {techStackList.map((text, idx) => {
            return <li key={idx}>{text}</li>;
          })}
        </ul>
      </div>
      <div data-aos="zoom-in-left" className="p-[16px]">
        <h3
          data-aos="fade-right"
          className="text-[24px] flex font-medium text-white mb-[16px] items-center desktop-s:text-[22px] tablet-s:text-[21px]"
        >
          {header}
          {verified && (
            <span className="text-[10px] ml-[15px] font-extralight border border-[#c778dd] py-[2px] px-[4px] text-nowrap flex items-center tablet-s:border-0 tablet-s:ml-[5px] tablet-s:text-[16px] mobile-l:border mobile-l:ml-[15px] mobile-l:text-[12px]">
              <span className="tablet-s:hidden mobile-l:inline">Exclusive</span>
              <i className="fa-solid fa-badge-check ml-[4px] text-[#c778dd]"></i>
            </span>
          )}
        </h3>
        <p
          data-aos="fade-left"
          className="text-[16px] text-[#ABB2BF] mb-[16px] desktop-s:text-[15px] desktop-s:mb-[14px]"
        >
          {bio}
        </p>
        <div className="flex gap-[16px] font-medium desktop-s:text-[15px]">
          <a href={link} target="_blank">
            <button
              data-aos="zoom-in-right"
              className="px-[16px] after:transition-all text-white py-[8px] border-[#c778dd] project__btn border tablet-s:py-[6px] tablet-s:px-[12px] tablet-s:text-[14px]"
            >
              <span>Live {"<~>"}</span>
            </button>
          </a>
          <a href={git__link} target="_blank">
            <button
              data-aos="zoom-in-left"
              className="px-[16px] after:transition-all text-[#ABB2BF] py-[8px] border-[#ABB2BF] project__btn__gray border tablet-s:py-[6px] tablet-s:px-[12px] tablet-s:text-[14px]"
            >
              <span>Code {">="}</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
