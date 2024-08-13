import React from "react";

const SocialCard = ({ icon, userName, iconSize = "20px", link = "#" }) => {
  return (
    <div>
      <div
        data-aos="zoom-in"
        className="p-[5.5px] mr-[15px] transition-all social__card inline-block border border-[#ABB2BF] text-[#ABB2BF] desktop-s:text-[15px] mobile-l:mr-0"
      >
        <a
          target="_blank"
          href={`${link}`}
          className="flex items-center gap-[7px]"
        >
          <i
            style={{
              fontSize: iconSize,
            }}
            className={`${icon} social__icon transition-all`}
          ></i>{" "}
          <span>{`@${userName}`}</span>
        </a>
      </div>
    </div>
  );
};

export default SocialCard;
