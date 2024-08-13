import React, { useEffect, useState } from "react";
import SocialCard from "../components/SocialCard";
const Contact = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
      console.log("loaded");
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  if (loading) {
    return (
      <div className="page__loader  flex  justify-center items-center">
        <svg
          className="pl"
          viewBox="0 0 160 160"
          width="160px"
          height="160px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="grad" x1={0} y1={0} x2={0} y2={1}>
              <stop offset="0%" stopColor="#c778dd" />
              <stop offset="100%" stopColor="#c778dd" />
            </linearGradient>
            <mask id="mask1">
              <rect x={0} y={0} width={160} height={160} fill="url(#grad)" />
            </mask>
            <mask id="mask2">
              <rect x={28} y={28} width={104} height={104} fill="url(#grad)" />
            </mask>
          </defs>
          <g>
            <g className="pl__ring-rotate">
              <circle
                className="pl__ring-stroke"
                cx={80}
                cy={80}
                r={72}
                fill="none"
                stroke="#abb2bf"
                strokeWidth={16}
                strokeDasharray="452.39 452.39"
                strokeDashoffset={452}
                strokeLinecap="round"
                transform="rotate(-45,80,80)"
              />
            </g>
          </g>
          <g mask="url(#mask1)">
            <g className="pl__ring-rotate">
              <circle
                className="pl__ring-stroke"
                cx={80}
                cy={80}
                r={72}
                fill="none"
                stroke="#abb2bf"
                strokeWidth={16}
                strokeDasharray="452.39 452.39"
                strokeDashoffset={452}
                strokeLinecap="round"
                transform="rotate(-45,80,80)"
              />
            </g>
          </g>
          <g>
            <g
              strokeWidth={4}
              strokeDasharray="12 12"
              strokeDashoffset={12}
              strokeLinecap="round"
              transform="translate(80,80)"
            >
              <polyline
                className="pl__tick"
                stroke="#c778dd"
                points="0,2 0,14"
                transform="rotate(-135,0,0) translate(0,40)"
              />
              <polyline
                className="pl__tick"
                stroke="#c778dd"
                points="0,2 0,14"
                transform="rotate(-90,0,0) translate(0,40)"
              />
              <polyline
                className="pl__tick"
                stroke="#c778dd"
                points="0,2 0,14"
                transform="rotate(-45,0,0) translate(0,40)"
              />
              <polyline
                className="pl__tick"
                stroke="#c778dd"
                points="0,2 0,14"
                transform="rotate(0,0,0) translate(0,40)"
              />
              <polyline
                className="pl__tick"
                stroke="#c778dd"
                points="0,2 0,14"
                transform="rotate(45,0,0) translate(0,40)"
              />
              <polyline
                className="pl__tick"
                stroke="#c778dd"
                points="0,2 0,14"
                transform="rotate(90,0,0) translate(0,40)"
              />
              <polyline
                className="pl__tick"
                stroke="#c778dd"
                points="0,2 0,14"
                transform="rotate(135,0,0) translate(0,40)"
              />
              <polyline
                className="pl__tick"
                stroke="#c778dd"
                points="0,2 0,14"
                transform="rotate(180,0,0) translate(0,40)"
              />
            </g>
          </g>
          <g mask="url(#mask1)">
            <g
              strokeWidth={4}
              strokeDasharray="12 12"
              strokeDashoffset={12}
              strokeLinecap="round"
              transform="translate(80,80)"
            >
              <polyline
                className="pl__tick"
                stroke="#c778dd"
                points="0,2 0,14"
                transform="rotate(-135,0,0) translate(0,40)"
              />
              <polyline
                className="pl__tick"
                stroke="#c778dd"
                points="0,2 0,14"
                transform="rotate(-90,0,0) translate(0,40)"
              />
              <polyline
                className="pl__tick"
                stroke="#c778dd"
                points="0,2 0,14"
                transform="rotate(-45,0,0) translate(0,40)"
              />
              <polyline
                className="pl__tick"
                stroke="#c778dd"
                points="0,2 0,14"
                transform="rotate(0,0,0) translate(0,40)"
              />
              <polyline
                className="pl__tick"
                stroke="#c778dd"
                points="0,2 0,14"
                transform="rotate(45,0,0) translate(0,40)"
              />
              <polyline
                className="pl__tick"
                stroke="#c778dd"
                points="0,2 0,14"
                transform="rotate(90,0,0) translate(0,40)"
              />
              <polyline
                className="pl__tick"
                stroke="#c778dd"
                points="0,2 0,14"
                transform="rotate(135,0,0) translate(0,40)"
              />
              <polyline
                className="pl__tick"
                stroke="#c778dd"
                points="0,2 0,14"
                transform="rotate(180,0,0) translate(0,40)"
              />
            </g>
          </g>
          <g>
            <g transform="translate(64,28)">
              <g className="pl__arrows" transform="rotate(45,16,52)">
                <path
                  fill="#c778dd"
                  d="M17.998,1.506l13.892,43.594c.455,1.426-.56,2.899-1.998,2.899H2.108c-1.437,0-2.452-1.473-1.998-2.899L14.002,1.506c.64-2.008,3.356-2.008,3.996,0Z"
                />
                <path
                  fill="#abb2bf"
                  d="M14.009,102.499L.109,58.889c-.453-1.421,.559-2.889,1.991-2.889H29.899c1.433,0,2.444,1.468,1.991,2.889l-13.899,43.61c-.638,2.001-3.345,2.001-3.983,0Z"
                />
              </g>
            </g>
          </g>
          <g mask="url(#mask2)">
            <g transform="translate(64,28)">
              <g className="pl__arrows" transform="rotate(45,16,52)">
                <path
                  fill="#c778dd"
                  d="M17.998,1.506l13.892,43.594c.455,1.426-.56,2.899-1.998,2.899H2.108c-1.437,0-2.452-1.473-1.998-2.899L14.002,1.506c.64-2.008,3.356-2.008,3.996,0Z"
                />
                <path
                  fill="#abb2bf"
                  d="M14.009,102.499L.109,58.889c-.453-1.421,.559-2.889,1.991-2.889H29.899c1.433,0,2.444,1.468,1.991,2.889l-13.899,43.61c-.638,2.001-3.345,2.001-3.983,0Z"
                />
              </g>
            </g>
          </g>
        </svg>
      </div>
    );
  }
  return (
    <>
      <div>
        <h1
          data-aos="fade-down"
          className="pt-[53px] mb-[46px] text-[#ffffff] text-[32px] font-semibold desktop-s:text-[30px] desktop-s:mb-[36px] tablet-l:text-[26px] mobile-l:text-[22px]"
        >
          <span className="text-[#c778dd]">/</span>
          contacts
          <p
            data-aos="fade-right"
            className="text-[16px] font-normal mt-[14px] desktop-s:text-[15px] mobile-l:text-[14px]"
          >
            Who am i?
          </p>
        </h1>
        <div className=" flex gap-[117px] text-[#ABB2BF] mb-[25px] desktop-s:flex-col desktop-s:gap-[35px]">
          <div>
            <p
              data-aos="fade-left"
              className=" font-medium desktop-s:text-[15px]  mobile-l:text-[14px]"
            >
              I’m interested in freelance opportunities. However, if you have
              other request or question, don’t hesitate to contact me
            </p>
          </div>
          <div className="flex gap-[11px] desktop-s:gap-[20px] mobile-l:flex-wrap">
            <div data-aos="zoom-in" className=" mobile-l:flex-1">
              <div className=" border p-[16px] border-[#ABB2BF] desktop-s:text-[15px] mobile-l:w-full mobile-l:text-center">
                <h6
                  data-aos="fade-down"
                  className=" font-semibold text-white mb-[8px]"
                >
                  Call me here
                </h6>
                <p data-aos="fade-up">
                  <a href="tel:+8801576969706">+8801576969706</a>
                </p>
              </div>
            </div>
            <div
              data-aos="zoom-in"
              className="text-[16px] desktop-s:text-[15px] mobile-l:flex-1"
            >
              <div className="border border-[#ABB2BF] p-[16px] flex flex-col gap-[8px] mobile-l:w-full mobile-l:text-center">
                <h6 data-aos="fade-up" className="text-white font-semibold">
                  Message me here
                </h6>
                <ul className=" flex flex-col gap-[8px]">
                  <li
                    data-aos="fade-right"
                    className=" flex items-center gap-[5.5px] mobile-l:justify-center"
                  >
                    <i className="fa-brands fa-facebook text-[20px] desktop-s:text-[18px]"></i>
                    abdullah.dev
                  </li>
                  <li
                    data-aos="fade-left"
                    className=" flex items-center gap-[5.5px] mobile-l:justify-center"
                  >
                    <i className="fa-solid fa-envelope-open text-[20px] desktop-s:text-[18px]"></i>
                    rim89987@gmail.com
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1
            data-aos="fade-down"
            className="text-[#ffffff] text-[32px] font-semibold mb-[25px] desktop-s:text-[30px] desktop-s:mb-[20px] tablet-l:text-[26px] mobile-l:text-[22px]"
          >
            <span className="text-[#c778dd]">#</span>
            all-media
          </h1>
          <div className="pb-[64px] desktop-s:pb-[44px]">
            <div className=" flex  mobile-l:flex-wrap mobile-l:gap-[15px]">
              <SocialCard
                link="https://www.facebook.com/abdullah.al.mridul.dev"
                icon={"fa-brands fa-facebook"}
                userName={"facebook"}
              />
              <SocialCard
                link="https://github.com/abdullah-al-mridul"
                icon={"fa-brands fa-github"}
                userName={"github"}
              />
              <SocialCard
                link="https://github.com/abdullah-al-mridul"
                icon={"fa-brands fa-twitter"}
                userName={"twitter"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
