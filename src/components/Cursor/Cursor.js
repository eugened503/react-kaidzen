import React, { useState, useEffect } from "react";
import Video from "../Video/Video";
import "./Cursor.css";

const Cursor = ({ scrollEvent }) => {
  const [xTrailing, setxTrailing] = useState("-100%");
  const [yTrailing, setyTrailing] = useState("-100%");
  const [btn, setbtn] = useState("cursor-hidden");
 
  const handleCursorHidden = () => {
    setbtn("cursor-hidden");
    setxTrailing("-100%");
    setyTrailing("-100%");
  };

  const handleCursorBlock = () => {
    setxTrailing("-100%");
    setyTrailing("-100%");
    setbtn("cursor-block");
  };

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;

    setTimeout(() => {
      setxTrailing(clientX);
      setyTrailing(clientY);
    }, 100);
  };

  useEffect(() => {
    if (scrollEvent) {
      handleCursorHidden();
    }
  }, [scrollEvent]);

  return (
    <div
      className="cursor-container"
      onMouseMove={(e) => handleMouseMove(e)}
    >
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
