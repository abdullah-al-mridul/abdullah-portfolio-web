import React, { useEffect, useState } from "react";
import AboutPhoto from "../images/about-me-tab.png";
import SkillsCard from "../components/SkillsCard";
import FunCard from "../components/FunCard";
import FunFaceImage from "../images/fun-fact-img.png";

const About = () => {
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
    <div>
      <h1
        data-aos="fade-down"
        className="pt-[53px]  text-[#ffffff] text-[32px] font-semibold tablet-l:text-[26px] mobile-l:text-[22px]"
      >
        <span className="text-[#c778dd]">/</span>
        about-me
        <p
          data-aos="fade-left"
          className="text-[16px] font-normal mt-[14px] desktop-s:mb-[25px] desktop-s:text-[15px] mobile-l:text-[14px]"
        >
          Who am i?
        </p>
      </h1>
      <div className="flex justify-between gap-[172px] items-center pb-[112px] desktop-s:gap-0 tablet-l:pb-[70px]">
        <div className="text-[#ABB2BF] text-[16px] font-normal desktop-s:text-[15px] mobile-l:text-[14px]">
          <p data-aos="fade-right" className="mb-[25px]">
            Hello, I’m Abdullah!
          </p>
          <p className="mb-[30px]" data-aos="fade-left">
            As a 16-year-old MERN stack developer from Bangladesh, I craft
            responsive web applications that deliver seamless user experiences.
            With a strong foundation in MongoDB, Express, React, and Node.js, I
            bring web projects to life from concept to deployment.
          </p>
          <p data-aos="fade-up">
            With a passion for web development, I craft unique online solutions
            that exceed client expectations. As a 16-year-old MERN stack
            developer, I help diverse clients establish a strong online
            presence. I'm committed to continuous learning, staying current with
            the latest technologies to drive innovation.
          </p>
        </div>
        <div className=" shrink-0">
          <img
            src={AboutPhoto}
            className=" desktop-s:hidden"
            alt="sample__pic"
          />
        </div>
      </div>
      <div>
        <h1
          data-aos="fade-right"
          className="text-[32px] font-medium text-white mb-[48px] desktop-s:text-[30px] desktop-s:mb-[38px] tablet-l:text-[26px] tablet-l:mb-[30px] mobile-l:text-[22px]"
        >
          <span className="text-[#c778dd]">#</span>skills
        </h1>
        <div className="flex justify-between flex-wrap pb-[83px] gap-[15px]">
          <SkillsCard
            heading={"Languages"}
            listItems={["JavaScript", "JSX", "React Native"]}
            dataAos={{
              body: "fade-right",
              heading: "zoom-in",
              listItems: ["fade-left", "fade-right", "fade-up"],
            }}
          />
          <SkillsCard
            heading={"Databases"}
            listItems={["SQLite", "PostgreSQL", "MongoDB"]}
            dataAos={{
              body: "fade-down",
              heading: "zoom-out",
              listItems: ["fade-left", "fade-up", "fade-right"],
            }}
          />
          <SkillsCard
            heading={"Other"}
            listItems={["HTML", "CSS", "SCSS", "TailwindCSS", "Bootstrap"]}
            dataAos={{
              body: "fade-up",
              heading: "fade-right",
              listItems: [
                "fade-right",
                "fade-down",
                "fade-left",
                "fade-right",
                "fade-left",
              ],
            }}
          />
          <SkillsCard
            heading={"Tools"}
            listItems={["VSCode", "Linux", "Figma", "Git", "Font Awesome"]}
            dataAos={{
              body: "fade-down-left",
              heading: "fade-left",
              listItems: [
                "fade-down",
                "fade-up",
                "fade-right",
                "fade-left",
                "fade-up",
              ],
            }}
          />
          <SkillsCard
            heading={"Frameworks"}
            listItems={["React", "Express.js", "Mongoose"]}
            dataAos={{
              body: "fade-up-left",
              heading: "fade-down-left",
              listItems: ["fade-left", "fade-right", "fade-down"],
            }}
          />
        </div>
      </div>
      <div className="pb-[162px] desktop-s:pb-[80px]">
        <h1
          data-aos="fade-left"
          className="text-[32px] font-medium text-white mb-[48px] desktop-s:text-[30px] desktop-s:mb-[38px] tablet-l:text-[26px] tablet-l:mb-[30px] mobile-l:text-[22px]"
        >
          <span className="text-[#c778dd]">#</span>my-fun-facts
        </h1>
        <div className="flex gap-[155px] justify-between desktop-s:gap-0">
          <div>
            <FunCard text={"I like winter more than summer"} />
            <FunCard text={"I often bike with my friends"} />
            <FunCard text={"I like pizza and pasta"} />
            <FunCard text={"I was in Egypt, Poland and Turkey"} />
            <FunCard text={"My favorite movie is The Green Mile"} />
            <FunCard text={"I am still in school"} />
            <FunCard text={"I don’t have any siblings"} />
          </div>
          <div className=" shrink-0">
            <img
              className=" desktop-s:hidden"
              data-aos="zoom-in"
              src={FunFaceImage}
              alt="sample__image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
