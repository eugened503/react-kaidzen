import React, { useRef } from "react";
import "./Video.css";
import video from "../../images/video.mp4";

const Video = ({ handleCursorHidden, handleCursorBlock }) => {
  const videoRef = useRef(null);

  const toggleButon = () => {
    handleCursorBlock();
    if (videoRef.current.muted) {
      videoRef.current.play();
      videoRef.current.muted = false;
    } else {
      videoRef.current.pause();
      videoRef.current.muted = true;
    }
  };


  const onMouseOver = () => {
    handleCursorBlock();
  };

  const onMouseOut = () => {
    handleCursorHidden();
  };

  return (
    <div
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      className="container"
      onClick={toggleButon}
      onWheel={handleCursorBlock}
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
