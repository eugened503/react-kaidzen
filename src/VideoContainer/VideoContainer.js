import React from "react";
import Cursor from "../Cursor/Cursor";
import DoubleMarquee from "../DoubleMarquee/DoubleMarquee";

function VideoContainer({scrollEvent}) {

  return (
    <section className="video">
      <DoubleMarquee />
      <Cursor scrollEvent={scrollEvent}/>
    </section>
  );
}

export default VideoContainer;
