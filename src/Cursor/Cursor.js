import React, { useState } from "react";
import Video from "../Video/Video";
import "./Cursor.css";

const Cursor = () => {
  const [xTrailing, setxTrailing] = useState("-50%");
  const [yTrailing, setyTrailing] = useState("80%");
  const [btn, setbtn] = useState("cursor-block");

  const handleCursorHidden = () => {
    setbtn("cursor-hidden");
  };

  const handleCursorBlock = () => {
    setbtn("cursor-block");
  };

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setTimeout(() => {
      setxTrailing(clientX);
      setyTrailing(clientY);
    }, 100);
  };

  return (
    <div className="cursor-container" onMouseMove={(e) => handleMouseMove(e)}>
      <div className="cursors-container">
        <div
          className={btn}
          style={{
            left: xTrailing,
            top: yTrailing,
          }}
        />
      </div>
      <Video
        handleCursorHidden={handleCursorHidden}
        handleCursorBlock={handleCursorBlock}
      />
    </div>
  );
};

export default Cursor;
