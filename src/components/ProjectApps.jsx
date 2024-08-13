import React from "react";
import ProjectCard from "./ProjectCard";
import ChatApp from "../images/chatapp.png";
import Game from "../images/2048-game.png";
import QuizApp from "../images/quiz-app.png";
import LittleLemon from "../images/little-lemon.jpg";
import OldP from "../images/old-p.jpg";
import ToDo from "../images/todo-app.jpg";
import ShortProjectCard from "./ShortProjectCard";
import Abdullah from "../images/abdullah-p.png";
const ProjectApps = () => {
  return (
    <div>
      <h4
        data-aos="fade-right"
        className="text-[#ffffff] text-[32px] font-medium pb-[48px] desktop-s:text-[30px] desktop-s:pb-[38px] tablet-l:text-[26px] mobile-l:text-[22px]"
      >
        <span className="text-[#c778dd]">#</span>
        complete-apps
      </h4>
      <div className="grid grid-cols-3 pb-[80px] gap-[16px] tablet-l:grid-cols-2 tablet-l:pb-[50px] mobile-l:grid-cols-1">
        <ProjectCard
          imgLink={ChatApp}
          imgAlt="chat-app"
          techStackList={["HTML", "CSS", "JS", "React", "Firebase", "SCSS"]}
          header="Chat App"
          bio="Web chat app for messaging"
          verified
          git__link="https://github.com/abdullah-al-mridul/m-chat-app"
          link="https://m-chat-bd.netlify.app"
        />
        <ProjectCard
          imgLink={Game}
          imgAlt="2048-game"
          techStackList={["HTML", "CSS", "JS", "React", "SCSS"]}
          header="2048 Game"
          bio="Web based 2048 game"
          verified
          link="https://2048-game-vite.netlify.app"
          git__link="https://github.com/abdullah-al-mridul/2048-game"
        />
        <ProjectCard
          imgLink={QuizApp}
          imgAlt="quiz-app"
          techStackList={["HTML", "CSS", "JS", "React", "SCSS"]}
          header="Quiz App"
          bio="Web based frontend quiz app"
          verified
          link="https://frontend-quizs.netlify.app/"
          git__link="https://github.com/abdullah-al-mridul/frontend-quiz"
        />
        <ProjectCard
          imgLink={LittleLemon}
          imgAlt="little-lemon"
          techStackList={[
            "HTML",
            "CSS",
            "JS",
            "React",
            "SCSS",
            "Firebase",
            "Formik",
            "Chakra UI",
          ]}
          header="Little Lemon"
          bio="Web app for little lemon restaurant"
          verified
          link="https://little-lemon-kitchen.netlify.app/"
          git__link="https://github.com/abdullah-al-mridul/little-lemon-restaurant"
        />
        <ProjectCard
          imgLink={OldP}
          imgAlt="old-p"
          techStackList={["HTML", "CSS", "JS", "React", "SCSS"]}
          header="Portfolio Old"
          bio="Web based old portfolio"
          verified
          link="https://abdullah-al-mridul.netlify.app/"
          git__link="https://github.com/abdullah-al-mridul/portfolio-old-production"
        />
        <ProjectCard
          imgLink={ToDo}
          imgAlt="to-do"
          techStackList={["HTML", "CSS", "JS", "React", "SCSS"]}
          header="ToDo App"
          bio="Web based local todo app"
          verified
          link="https://todo-app-v5.netlify.app/"
          git__link="https://todo-app-v5.netlify.app/"
        />
        <ProjectCard
          imgLink={Abdullah}
          imgAlt="abdullah"
          techStackList={[
            "HTML",
            "CSS",
            "JS",
            "React",
            "SCSS",
            "TailwindCSS",
            "Routing",
          ]}
          header="Abdullah"
          bio="Web based Abdullah's portfolio"
          verified
          link="#"
          git__link="https://github.com/abdullah-al-mridul/abdullah-portfolio-web"
        />
      </div>
      <h4
        data-aos="fade-up"
        className="text-[#ffffff] text-[32px] font-medium pb-[48px] desktop-s:text-[30px] tablet-l:text-[26px] tablet-l:pb-[38px] mobile-l:text-[22px]"
      >
        <span className="text-[#c778dd]">#</span>
        small-projects
      </h4>
      <div className="pb-[187px] mobile-l:pb-[120px]">
        <div className="grid grid-cols-3 gap-[16px] tablet-l:grid-cols-2 mobile-l:grid-cols-1">
          <ShortProjectCard
            techStackList={["HTML", "CSS", "TailwindCSS", "JS"]}
            header="Web Clone"
            bio="A simple portfolio clone"
            link="https://clone-portfolio-theme.netlify.app/"
          />
          <ShortProjectCard
            techStackList={["HTML", "CSS", "JS"]}
            header="Slider JS"
            bio="A web based slider"
            link="https://slider-js-123.netlify.app/"
          />
          <ShortProjectCard
            techStackList={["HTML", "CSS", "React"]}
            header="Notification"
            bio="A very simple notification panel"
            link="https://notification-panel-v4.netlify.app/"
          />
          <ShortProjectCard
            techStackList={["HTML", "CSS"]}
            header="Social Link"
            bio="A simple social link list panel"
            link="https://social-link-bd.netlify.app/"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectApps;
