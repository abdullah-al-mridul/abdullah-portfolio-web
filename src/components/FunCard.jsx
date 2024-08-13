import React from "react";

const FunCard = ({ text }) => {
  return (
    <div
      data-aos={"zoom-in"}
      className=" inline-block mr-[16px] mb-[16px] p-[8px] border text-[#ABB2BF] border-[#ABB2BF] desktop-s:text-[15px] desktop-s:mb-[12px] desktop-s:mr-[12px] mobile-l:p-[6px] mobile-l:text-[14px]"
    >
      {text}
    </div>
  );
};

export default FunCard;
