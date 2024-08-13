import React from "react";
import SkillsAnimate from "../images/skills-animat.png";
import SkillsCard from "./SkillsCard";
const SkillsContainer = () => {
  return (
    <div className="pb-[112px]">
      <div className="flex mb-[30px] gap-[16px] items-center text-[32px] desktop-s:text-[30px] tablet-l:text-[26px] tablet-s:text-[22px]">
        <p data-aos="fade-right" className="text-[white]">
          <span className="text-[#C778DD]">#</span>skills
        </p>
        <div
          data-aos="fade-left"
          className="w-[300px] h-[1px] bg-[#C778DD] tablet-s:w-[150px]"
        ></div>
      </div>
      <div>
        <div className="flex gap-[20px] tablet-s:gap-0 justify-between">
          <div>
            <img
              className=" tablet-s:hidden"
              data-aos={"zoom-in"}
              src={SkillsAnimate}
              alt="animations"
            />
          </div>
          <div className=" flex gap-[16px] tablet-s:flex-wrap tablet-s:justify-center">
            <div className="flex tablet-s:basis-[100%] tablet-s:justify-center">
              <SkillsCard
                heading={"Languages"}
                listItems={["JavaScript", "JSX", "React Native"]}
                dataAos={{
                  body: "fade-right",
                  heading: "zoom-in",
                  listItems: ["fade-left", "fade-right", "fade-up"],
                }}
              />
            </div>
            <div className="flex flex-col gap-[20px] mobile-l:basis-full">
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
            </div>
            <div className="flex flex-col gap-[20px] mobile-l:basis-full">
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
        </div>
      </div>
    </div>
  );
};

export default SkillsContainer;
