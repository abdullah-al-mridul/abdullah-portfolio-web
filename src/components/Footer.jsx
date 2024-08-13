import React from "react";
import MaxWidth from "./MaxWidth";
import Logo from "../images/top-logo.png";
const Footer = ({}, ref) => {
  return (
    <div ref={ref} className="border-t border-[#ABB2BF]">
      <MaxWidth>
        <div className="py-[32px]">
          <div className=" flex justify-between mb-[48px] mobile-l:flex-wrap mobile-l:mb-[32px]">
            <div>
              <div className="text-[16px] mb-[16px] desktop-s:text-[15px] text-nowrap mobile-l:mb-[12px]">
                <span className="text-white  font-medium">
                  <img className=" inline mr-[9px]" src={Logo} alt="logo" />
                  Abdullah
                </span>
                <span className="text-[#ABB2BF] ml-[24px] desktop-s:ml-[20px] mobile-l:ml-[10px] mobile-l:text-[14px]">
                  <a
                    className="link__underline"
                    href="mailto:rim89987@gmail.com"
                  >
                    rim89987@gmail.com
                  </a>
                </span>
              </div>
              <div className="text-[16px] text-white desktop-s:text-[15px]">
                MERN Stack Web Developer
              </div>
            </div>
            <div>
              <h4 className="text-[24px] mb-[12px] font-medium text-white desktop-s:text-[22px] mobile-l:mt-[20px] mobile-l:mb-[8px]">
                Media
              </h4>
              <ul className="flex text-[#ABB2BF] hover__scale__down text-[24px] gap-[8px] desktop-s:text-[22px]">
                <li>
                  <a href="">
                    <i className="fa-brands fa-github"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fa-brands fa-whatsapp"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <footer className="text-center text-[16px] text-[#ABB2BF] desktop-s:text-[15px] mobile-l:text-[13px]">
            &copy; Copyright 2024. Made by{" "}
            <a
              href="https://www.facebook.com/abdullah.al.mridul.dev"
              className="link__underline"
              target="_blank"
            >
              Abdullah
            </a>{" "}
            | Design from{" "}
            <a
              href="https://www.figma.com/community/file/1164933568884615740/portfolio"
              className="link__underline"
              target="_blank"
            >
              Figma Community
            </a>
          </footer>
        </div>
      </MaxWidth>
    </div>
  );
};

export default React.forwardRef(Footer);
