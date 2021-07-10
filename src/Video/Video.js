import React, { useRef } from "react";
import "./Video.css";
import video from "../images/video.mp4";

const Video = ({ handleCursorHidden, handleCursorBlock }) => {
  const videoRef = useRef(null);
  //const [aaa, setaaa] = useState(0);
  // const [cursorPosition, setCursorPosition] = useState(false);
  // const videoWheel = (e) => {
  //setaaa(e);
  //   console.log(e)
  //  if(e) {
  //   handleCursorBlock();
  //  }
  // };
  // useEffect(() => {
  //   if (aaa && cursorPosition) {
  //     handleCursorBlock();
  //   }
  // }, [aaa, cursorPosition, handleCursorBlock]);

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

  // console.log(cursorPosition)
  // const onMouseMove = () => setCursorPosition(true);
  // const videoScroll = (e) => {
  //   console.log(e)
  // }

  const onMouseOver = () => {
    handleCursorBlock();
    //  setCursorPosition(true)
  };

  const onMouseOut = () => {
    handleCursorHidden();
    // setCursorPosition(false)
  };

  return (
    <div
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      className="container"
      onClick={toggleButon}
      onWheel={handleCursorBlock}
      //onScroll={(e) => videoScroll(e)}
      //  onMouseMove={onMouseOver}
    >
      <video
        ref={videoRef}
        className="video__container"
        preload="auto"
        autoPlay={true}
        loop={true}
        muted={true}
        //  onMouseMove={onMouseOver}
        //  onMouseMove={() => setCursorPosition(true)}
      >
        <source src={video} type="video/mp4" />
      </video>
      {/* <div className="video__outline"   onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}/> */}
    </div>
  );
};

export default Video;
