import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
const ContextMenu = ({ onClass, showContextMenu, setShowContextMenu }) => {
  const [menuPosition, setMenuPosition] = useState({ left: 0, top: 0 });
  const menuRef = useRef(null);

  useEffect(() => {
    function handleContextMenu(event) {
      event.preventDefault();

      const { clientX: mouseX, clientY: mouseY } = event;
      const { current: menu } = menuRef;

      if (menu) {
        const { offsetWidth: menuWidth, offsetHeight: menuHeight } = menu;

        const maxX = window.innerWidth - menuWidth;
        const maxY = window.innerHeight - menuHeight;

        const left = Math.min(mouseX, maxX);
        const top = Math.min(mouseY, maxY);

        setMenuPosition({ left, top });
      }
    }

    if (showContextMenu) {
      window.addEventListener("contextmenu", handleContextMenu);
    }

    return () => {
      window.removeEventListener("contextmenu", handleContextMenu);
    };
  }, [showContextMenu]);

  return (
    <div
      ref={menuRef}
      className={onClass}
      style={{
        position: "fixed",
        left: menuPosition.left,
        top: menuPosition.top,
        zIndex: 20,
      }}
    >
      <ul>
        <Link to={"/"}>
          <li
            className=" transition-all"
            onClick={() => setShowContextMenu(false)}
          >
            <span className="text-[#b82ddf] text-[16px] font-medium">#</span>
            home
          </li>
        </Link>
        <Link to={"/projects"}>
          <li
            className=" transition-all"
            onClick={() => setShowContextMenu(false)}
          >
            <span className="text-[#b82ddf] text-[16px] font-medium">#</span>
            works
          </li>
        </Link>
        <Link to={"/about"}>
          <li
            className=" transition-all"
            onClick={() => setShowContextMenu(false)}
          >
            <span className="text-[#b82ddf] text-[16px] font-medium">#</span>
            about-me
          </li>
        </Link>
        <Link to={"/contact"}>
          <li
            className=" transition-all"
            onClick={() => setShowContextMenu(false)}
          >
            <span className="text-[#b82ddf] text-[16px] font-medium">#</span>
            contacts
          </li>
        </Link>
      </ul>
      <div className="bg-[#282c33] w-full h-[1px] mb-[2px]"></div>
      <p className="text-[10px]">
        Developed by{" "}
        <a
          target="_blank"
          className="context-menu-hover after:transition-all"
          href="https://facebook.com/abdullah.al.mridul.dev"
        >
          Abdullah
        </a>
      </p>
    </div>
  );
};

export default ContextMenu;
