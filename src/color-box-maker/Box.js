import React from "react";
import "./Box.css";

const Box = ({
  id = 0,
  bgColor = "green",
  height = 50,
  width = 50,
  removeBox,
}) => {
  return (
    <div
      id={`box-${id}`}
      className="Box"
      style={{ backgroundColor: bgColor, height: height, width: width }}
    >
      <button onClick={removeBox} data-testid={`box-btn-${id}`}>
        x
      </button>
    </div>
  );
};

export default Box;
