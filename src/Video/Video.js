import React, { useRef } from "react";
import "./Video.css";
import video from "../images/video.mp4";

const Video = ({ handleCursorHidden, handleCursorBlock }) => {
  const videoRef = useRef(null);

  //const [isVisible, setIsVisible] = useState(false);
  // useEffect(() => {
  //   if (!isVisible) {
  //     handleCursorHidden();
  //   } else {
  //     handleCursorBlock();
  //   }
  // }, [handleCursorBlock, handleCursorHidden, isVisible]);

  // const callbackFunction = (entries) => {
  //   const [entry] = entries;
  //   setIsVisible(entry.isIntersecting);
  // };

  // useEffect(() => {
  //   const currentRef = containerRef.current;
  //   const observer = new IntersectionObserver(callbackFunction);
  //   if (currentRef) observer.observe(currentRef);

  //   return () => {
  //     if (currentRef) observer.unobserve(currentRef);
  //   };
  // }, [containerRef]);


const videoWheel = (e) => {
if(e) {
  handleCursorHidden()
}
}


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

  return (
    <div
      onMouseOver={handleCursorBlock}
      onMouseOut={handleCursorHidden}
      className="container"
      onClick={toggleButon}
      onWheel={(e) => videoWheel(e)}
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
