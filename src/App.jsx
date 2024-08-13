import React, { useEffect, useRef, useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MaxWidth from "./components/MaxWidth";
import ContextMenu from "./components/ContextMenu";
import Projects from "./pages/Projects";
import AOS from "aos";
import "aos/dist/aos.css";
import WOW from "wow.js";
import TawkTo from "./components/TalkTo";
import "animate.css/animate.min.css";
import BubbleCursor from "./components/BubbleCursor";
import Footer from "./components/Footer";

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  useEffect(() => {
    AOS.init({
      disable: false,
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,
      offset: 120,
      delay: 200,
      duration: 800,
      easing: "ease-in-out",
      once: false,
    });
    const __WowInstance__ = new WOW();
    __WowInstance__.init();
    return () => {
      AOS.refresh();
    };
  }, []);
  const [contextMenuPosition, setContextMenuPosition] = useState({
    xPos: "0px",
    yPos: "0px",
  });
  const [showContextMenu, setShowContextMenu] = useState(false);

  const handleContextMenu = (e) => {
    e.preventDefault();
    setContextMenuPosition({ xPos: `${e.pageX}px`, yPos: `${e.pageY}px` });
    setShowContextMenu(true);
  };

  useEffect(() => {
    const handleClick = (e) => {
      if (showContextMenu && !e.target.closest(".context-menu")) {
        setShowContextMenu(false);
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [showContextMenu]);
  const navbarRef = useRef(null);
  const footerRef = useRef(null);
  useEffect(() => {
    const handleResize = () => {
      const navbarHeight = navbarRef.current.offsetHeight;
      const footerHeight = footerRef.current.offsetHeight;
      document.documentElement.style.setProperty(
        "--navbar-height",
        `${navbarHeight}px`
      );
      document.documentElement.style.setProperty(
        "--footer-height",
        `${footerHeight}px`
      );
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [navbarRef, footerRef]);
  const [overflow, setOverflow] = useState({
    height: "auto",
    overflowY: "visible",
  });
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);
  return (
    <div className="main__cont" style={overflow}>
      <BubbleCursor />
      <div
        onContextMenu={handleContextMenu}
        className="bg-[#282C33] min-h-[100vh]"
      >
        <MaxWidth>
          <Navbar ref={navbarRef} setOverflow={setOverflow} pos={scrollY} />
          <div className="main__outlet">
            <Outlet />
          </div>
        </MaxWidth>
        {/* {showContextMenu && ( */}
        <ContextMenu
          xPos={contextMenuPosition.xPos}
          yPos={contextMenuPosition.yPos}
          onClass={`context-menu ${showContextMenu ? "open" : ""}`}
          showContextMenu={showContextMenu}
          setShowContextMenu={setShowContextMenu}
        />
        {/* )} */}
        <div className="">
          <div className=" fixed desktop-l:hidden top-0 left-[17px] flex flex-col items-center">
            <div className="h-[190px] w-[1px] bg-[#ABB2BF] mb-[8px]"></div>
            <ul className="flex flex-col items-center gap-1">
              <li>
                <a className="px-[5px] py-[6px]" href="">
                  <i className="fa-brands hover:rotate-[-15deg] transition-all hover:text-[#C778DD] fa-github-alt  text-[#ABB2BF] text-[20px]"></i>
                </a>
              </li>
              <li>
                <a className="px-[5px] py-[6px]" href="">
                  <i className="fa-brands hover:rotate-[-15deg] transition-all fa-whatsapp  hover:text-[#C778DD] text-[#ABB2BF] text-[20px]"></i>
                </a>
              </li>
              <li>
                <a className="px-[5px] py-[6px]" href="">
                  <i className="fa-brands hover:rotate-[-15deg] transition-all fa-facebook  hover:text-[#C778DD] text-[#ABB2BF] text-[20px]"></i>
                </a>
              </li>
            </ul>
          </div>
          <Footer ref={footerRef} />
        </div>
        <TawkTo />
      </div>
    </div>
  );
};

// Define the router configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Use the Layout component
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
