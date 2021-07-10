import React, { useState, useEffect } from "react";
import Video from "../Video/Video";
import "./Cursor.css";

const Cursor = ({ scrollEvent }) => {
  // const [xTrailing, setxTrailing] = useState("-50%");
  // const [yTrailing, setyTrailing] = useState("80%");
  // console.log('scrollEvent', scrollEvent)
  const [xTrailing, setxTrailing] = useState("-100%");
  const [yTrailing, setyTrailing] = useState("-100%");
  const [btn, setbtn] = useState("cursor-hidden");
  //const [cursorPosition, setCursorPosition] = useState(false);
  // console.log("cursorPosition",cursorPosition)

  const handleCursorHidden = () => {
    //  console.log("не видно")
    setbtn("cursor-hidden");
    setxTrailing("-100%");
    setyTrailing("-100%");
    // setTimeout(() => {
    //   setxTrailing("-50%");
    //   setyTrailing("80%");
    // }, 0);
  };

  const handleCursorBlock = () => {
    //   console.log("видно")
    setxTrailing("-100%");
    setyTrailing("-100%");
    setbtn("cursor-block");
    //  setxTrailing("0");
    //   setyTrailing("-100%");
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
      // onMouseOver={console.log("onMouseOver")}
      // onMouseOut={console.log("onMouseOut")}
      //onMouseEnter={console.log("onMouseEnter")}
      //onMouseLeave={console.log("onMouseLeave")}
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
        //  setCursorPosition={setCursorPosition}
      />
    </div>
  );
};

export default Cursor;
