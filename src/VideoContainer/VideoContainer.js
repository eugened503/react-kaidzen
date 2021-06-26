import React from "react";
import "./VideoContainer.css";
import Marquee from "../Marquee/Marquee";
import Cursor from "../Cursor/Cursor";

function VideoContainer() {
  return (
    <section className="video">
      <Marquee />
       <Cursor /> 
    </section>
  );
}

export default VideoContainer;
