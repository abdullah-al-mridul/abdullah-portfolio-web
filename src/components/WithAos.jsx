import React from "react";

const WithAos = ({ children, animation, display = "block" }) => {
  return (
    <div
      style={{
        display,
      }}
      data-aos={animation}
    >
      {children}
    </div>
  );
};

export default WithAos;
