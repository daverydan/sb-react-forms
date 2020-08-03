import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

const BoxList = () => {
  const [boxes, setBoxes] = useState([
    { bgColor: "red", height: 50, width: 100 },
    { bgColor: "green", height: 100, width: 50 },
    { bgColor: "blue", height: 50, width: 50 },
  ]);

  const addBox = (bgColor, height, width) => {
    setBoxes((boxes) => [
      ...boxes,
      { bgColor, height: parseInt(height), width: parseInt(width) },
    ]);
  };

  const removeBox = (idx) => {
    const newBoxes = [...boxes];
    newBoxes.splice(idx, 1);
    setBoxes(newBoxes);
  };

  return (
    <>
      <NewBoxForm addBox={addBox} />
      <hr />
      <div className="BoxList" data-testid="box-list">
        {boxes.map((b, idx) => (
          <Box
            key={idx}
            id={idx}
            bgColor={b.bgColor}
            height={b.height}
            width={b.width}
            removeBox={() => removeBox(idx)}
          />
        ))}
      </div>
    </>
  );
};

export default BoxList;
