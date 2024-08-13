import React from "react";

const SkillsCard = ({ heading, listItems, dataAos = "" }) => {
  const __listAnimation__ = dataAos.listItems;
  const __finalAnimation__ = [];
  if (__listAnimation__ !== undefined) {
    for (let i = 0; i < __listAnimation__.length; i++) {
      __finalAnimation__.push(__listAnimation__[i]);
      __finalAnimation__;
    }
  }
  return (
    <div
      data-aos={dataAos.body}
      className="border h-[max-content] border-[#ABB2BF] max-w-[180px] mobile-l:min-w-full"
    >
      <h6
        data-aos={dataAos.heading}
        className="p-[8px] border-b border-[#ABB2BF] text-white font-semibold text-[16px] desktop-s:text-[15px]"
      >
        {heading}
      </h6>
      <div className="p-[8px]">
        <ul className="flex flex-wrap gap-[8px] text-[#ABB2BF] text-[16px] desktop-s:text-[15px] desktop-s:gap-[6px]">
          {listItems.map((item, idx) => (
            <li data-aos={__finalAnimation__[idx]} key={item}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SkillsCard;
