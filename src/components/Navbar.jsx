import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../images/top-logo.png";
import LanguageDropdown from "./LanguageDropdown";
import { Rotate as Hamburger } from "hamburger-react";
import { motion, AnimatePresence } from "framer-motion";
import MaxWidth from "../components/MaxWidth";
const Navbar = ({ setOverflow, pos }, ref) => {
  const [navOpen, setNavOpen] = useState(false);
  const [posY, setPosY] = useState(0);
  useEffect(() => {
    if (navOpen === true) {
      setPosY(pos);
    }
    window.scrollTo(0, posY);
  }, [navOpen]);
  const item = {
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.3,
        delay: 0.9,
      },
    },
  };
  return (
    <>
      <nav
        ref={ref}
        data-aos="fade-down"
        className="pt-[32px] pb-[8px] sticky top-0 z-10 bg-[#282C33] tablet-l:pt-[25px] mobile-l:pt-[15px] navbar__main"
      >
        <div className=" flex justify-between items-center">
          <Link to={"/"}>
            <div className="flex gap-[8px]">
              <img src={Logo} alt="logo" />
              <span className=" font-bold text-[16px] tablet-l:text-[15px] text-white">
                Abdullah
              </span>
            </div>
          </Link>
          <div className=" hidden tablet-s:block">
            <Hamburger
              direction="left"
              color="white"
              size={30}
              toggled={navOpen}
              toggle={setNavOpen}
              onToggle={(toggle) => {
                if (toggle) {
                  setOverflow({
                    height: "100vh",
                    overflowY: "hidden",
                  });
                  setNavOpen(!navOpen);
                } else {
                  setOverflow({
                    height: "auto",
                    overflowY: "visible",
                  });
                  setNavOpen(!navOpen);
                }
              }}
            />
          </div>
          <ul className="flex gap-[32px] tablet-l:gap-[20px] tablet-s:hidden">
            <li className=" nav__link after:transition-all font-medium text-[16px] tablet-l:text-[15px] text-[#ABB2BF]">
              <NavLink to="/" exact={"true"} activeclassname="active">
                <span className="text-[#C778DD] text-[16px] font-medium">
                  #
                </span>
                home
              </NavLink>
            </li>
            <li className="  nav__link after:transition-all font-medium text-[16px] text-[#ABB2BF]">
              <NavLink to="/projects" activeclassname="active">
                <span className="text-[#C778DD] text-[16px] font-medium">
                  #
                </span>
                works
              </NavLink>
            </li>
            <li className="  nav__link after:transition-all font-medium text-[16px] text-[#ABB2BF]">
              <NavLink to="/about" activeclassname="active">
                <span className="text-[#C778DD] text-[16px] font-medium">
                  #
                </span>
                about-me
              </NavLink>
            </li>
            <li className="  nav__link after:transition-all font-medium text-[16px] text-[#ABB2BF]">
              <NavLink to="/contact" activeclassname="active">
                <span className="text-[#C778DD] text-[16px] font-medium">
                  #
                </span>
                contacts
              </NavLink>
            </li>
            <LanguageDropdown />
          </ul>
        </div>
      </nav>
      <AnimatePresence>
        {navOpen && (
          <motion.div
            className=" absolute top-0 left-0 bg-[#282C33] w-full h-[100vh] z-[5]"
            variants={item}
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "100vh",
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
            }}
            exit={"exit"}
          >
            <div>
              <MaxWidth>
                <div className="pt-[116px]">
                  <ul className="text-[#ABB2BF] text-[32px] font-medium flex flex-col gap-[32px]">
                    <motion.li
                      onClick={() => {
                        setNavOpen(!navOpen);
                        setOverflow({
                          height: "auto",
                          overflowY: "visible",
                        });
                      }}
                      initial={{
                        y: 48,
                        opacity: 0,
                      }}
                      animate={{
                        y: 0,
                        opacity: 1,
                      }}
                      transition={{
                        duration: 0.4,
                        delay: 0.5,
                        type: "ease",
                      }}
                      exit={{
                        opacity: 0,
                        y: 48,
                        transition: {
                          ease: "easeInOut",
                          delay: 0.5,
                        },
                      }}
                    >
                      <NavLink to="/" exact={"true"} activeclassname="active">
                        <span className="text-[#C778DD] font-medium">#</span>
                        home
                      </NavLink>
                    </motion.li>
                    <motion.li
                      onClick={() => {
                        setNavOpen(!navOpen);
                        setOverflow({
                          height: "auto",
                          overflowY: "visible",
                        });
                      }}
                      initial={{
                        y: 48,
                        opacity: 0,
                      }}
                      animate={{
                        y: 0,
                        opacity: 1,
                      }}
                      transition={{
                        duration: 0.4,
                        delay: 0.4,
                        type: "ease",
                      }}
                      exit={{
                        opacity: 0,
                        y: 48,
                        transition: {
                          ease: "easeInOut",
                          delay: 0.4,
                        },
                      }}
                    >
                      <NavLink to="/projects" activeclassname="active">
                        <span className="text-[#C778DD] font-medium">#</span>
                        works
                      </NavLink>
                    </motion.li>
                    <motion.li
                      onClick={() => {
                        setNavOpen(!navOpen);
                        setOverflow({
                          height: "auto",
                          overflowY: "visible",
                        });
                      }}
                      initial={{
                        y: 48,
                        opacity: 0,
                      }}
                      animate={{
                        y: 0,
                        opacity: 1,
                      }}
                      transition={{
                        duration: 0.4,
                        delay: 0.3,
                        type: "ease",
                      }}
                      exit={{
                        opacity: 0,
                        y: 48,
                        transition: {
                          ease: "easeInOut",
                          delay: 0.3,
                        },
                      }}
                    >
                      <NavLink to="/about" activeclassname="active">
                        <span className="text-[#C778DD] font-medium">#</span>
                        about-me
                      </NavLink>
                    </motion.li>
                    <motion.li
                      onClick={() => {
                        setNavOpen(!navOpen);
                        setOverflow({
                          height: "auto",
                          overflowY: "visible",
                        });
                      }}
                      initial={{
                        y: 48,
                        opacity: 0,
                      }}
                      animate={{
                        y: 0,
                        opacity: 1,
                      }}
                      transition={{
                        duration: 0.4,
                        delay: 0.2,
                        type: "ease",
                      }}
                      exit={{
                        opacity: 0,
                        y: 48,
                        transition: {
                          ease: "easeInOut",
                          delay: 0.2,
                        },
                      }}
                    >
                      <NavLink to="/contact" activeclassname="active">
                        <span className="text-[#C778DD] font-medium">#</span>
                        contacts
                      </NavLink>
                    </motion.li>
                  </ul>
                </div>
              </MaxWidth>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default React.forwardRef(Navbar);
