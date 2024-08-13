import React, { useState, useRef, useEffect } from "react";

const LanguageDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <li
      ref={dropdownRef}
      className="relative tracking-[0.5px] font-semibold cursor-pointer text-[16px] text-[#ABB2BF]"
    >
      <span onClick={toggleDropdown} className="flex gap-[5px]">
        EN{" "}
        <p
          className={` transition-all ${
            !isOpen ? "rotate-90" : " rotate-[270deg]"
          }`}
        >
          {">"}
        </p>
      </span>
      {isOpen && (
        <div className="z-50 rounded-[4px] absolute top-[30px] text-[#282C33] text-center left-0 w-full p-[2px] box-border bg-[#C778DD]">
          <p
            onClick={() => setIsOpen(!isOpen)}
            className="tracking-[0.5px] hover:bg-[#282C33] transition-all rounded-[4px] hover:text-[#C778DD]"
          >
            BN
          </p>
          <p
            onClick={() => setIsOpen(!isOpen)}
            className="hover:bg-[#282C33] tracking-[0.5px] transition-all rounded-[4px] hover:text-[#C778DD]"
          >
            EN
          </p>
        </div>
      )}
    </li>
  );
};

export default LanguageDropdown;
