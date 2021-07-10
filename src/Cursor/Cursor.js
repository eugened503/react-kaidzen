import React, { useState } from "react";
import Video from "../Video/Video";
import "./Cursor.css";

const Cursor = () => {
  // const [xTrailing, setxTrailing] = useState("-50%");
  // const [yTrailing, setyTrailing] = useState("80%");

    const [xTrailing, setxTrailing] = useState("-100%");
   const [yTrailing, setyTrailing] = useState("-100%");

  const [btn, setbtn] = useState("cursor-hidden");

 

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


  
  return (
    <div className="cursor-container" onMouseMove={(e) => handleMouseMove(e)}
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
      />
    </div>
  );
};

export default Cursor;
