import React, { useRef } from "react";
import "./Video.css";
import video from "../images/video.mp4";

const Video = ({ handleCursorHidden, handleCursorBlock }) => {
  const videoRef = useRef(null);

  const toggleButon = () => {
    if (videoRef.current.muted) {
      videoRef.current.play();
      videoRef.current.muted = false;
    } else {
      videoRef.current.pause();
      videoRef.current.muted = true;
    }
  };

  return (
    <div
       onMouseEnter={handleCursorBlock}
       onMouseLeave={handleCursorHidden}
      className="container"
      onClick={toggleButon}
    >
      <video
        ref={videoRef}
        className="video__container"
        preload="auto"
        autoPlay={true}
        loop={true}
        muted={true}
      >
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;
