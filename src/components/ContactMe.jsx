import React from "react";
import WithAos from "./WithAos";
import SideBubble from "../images/side-bubble.png";
const ContactMe = () => {
  return (
    <div className="pb-[200px] tablet-l:pb-[100px]">
      <div className="absolute desktop-l:hidden left-0 pt-[80px]">
        <img src={SideBubble} data-aos="zoom-out" alt="side-bubble" />
      </div>
      <div className="text-[32px] flex items-center gap-[16px] mb-[45px] desktop-s:mb-[35px] desktop-s:text-[30px] tablet-l:text-[26px] tablet-s:text-[22px]">
        <WithAos animation={"fade-up"}>
          <div className="text-white">
            <span className="text-[#c778dd]">#</span>
            <span>contacts</span>
          </div>
        </WithAos>
        <WithAos animation={"fade-down"}>
          <div className="h-[1px] w-[125px] bg-[#c778dd]"></div>
        </WithAos>
      </div>
      <div className="flex justify-between gap-[20px] desktop-s:gap-[30px] tablet-s:flex-wrap tablet-s:gap-[40px]">
        <div>
          <WithAos animation={"fade-up"}>
            <p className="max-w-[505px] text-[16px] font-medium text-[#ABB2BF] desktop-s:text-[15px]">
              I’m interested in freelance opportunities. However, if you have
              other request or question, don’t hesitate to contact me
            </p>
          </WithAos>
        </div>
        <div className=" tablet-s:flex-1">
          <WithAos animation={"zoom-out"}>
            <div className=" border border-[#ABB2BF] p-[16px] tablet-s:text-center">
              <WithAos animation={"fade-down"}>
                <h6 className="text-white text-[16px] font-semibold mb-[16px]">
                  Message me here
                </h6>
              </WithAos>
              <ul className="text-[#ABB2BF] flex flex-col gap-[6px] text-[16px] contact__chember text-nowrap">
                <WithAos animation={"fade-right"}>
                  <li>
                    <a href="tel:+8801576969706">
                      <i className="fa-solid fa-mobile-retro mr-[8px]"></i>
                      <span className="link__underline">+8801576969706</span>
                    </a>
                  </li>
                </WithAos>
                <WithAos animation={"fade-left"}>
                  <li>
                    <i className="fa-brands fa-whatsapp mr-[8px]"></i>
                    <span className="link__underline">+8801576969706</span>
                  </li>
                </WithAos>
                <WithAos animation={"fade-up"}>
                  <li>
                    <a href="mailto:rim89987@gmail.com">
                      <i className="fa-solid fa-envelopes mr-[8px]"></i>
                      <span className="link__underline">
                        rim89987@gmail.com
                      </span>
                    </a>
                  </li>
                </WithAos>
              </ul>
            </div>
          </WithAos>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
