import React from "react";
import Cursor from "../Cursor/Cursor";
//import Marquee from "../Marquee/Marquee";
import DoubleMarquee from "../DoubleMarquee/DoubleMarquee";

function VideoContainer() {
  return (
    <section className="video">
      <DoubleMarquee />
      {/* <Marquee />    */}
      <Cursor />
    </section>
  );
}

export default VideoContainer;
