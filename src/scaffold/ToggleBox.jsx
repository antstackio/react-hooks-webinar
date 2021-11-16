import React from "react";

const ToggleBox = ({ isDark }) => {
  return (
    <div className={`toggle-box ${isDark ? "dark" : "light"}`}>
      <p className="box-text">This is text</p>
    </div>
  );
};

export default ToggleBox;
