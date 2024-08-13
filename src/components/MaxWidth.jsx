import React from "react";

const MaxWidth = ({ children }) => {
  return (
    <div className="max-w-[1024px] desktop-s:px-[20px] desktop-m:max-w-[900px]  desktop-s:!max-w-[750px]  mx-auto ">
      {children}
    </div>
  );
};

export default MaxWidth;
