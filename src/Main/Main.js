import React from "react";
import "./Main.css";
import Lead from "../Lead/Lead";
import VideoContainer from "../VideoContainer/VideoContainer";
import Projects from "../Projects/Projects";
import Team from "../Team/Team";
import Application from "../Application/Application";

function Main({ openContent, openModal,  backToTop, scrollEvent }) {
  return (
    <main className="content">
    
      <Lead />
      <VideoContainer scrollEvent={scrollEvent}/>
      <Projects openContent={openContent}  backToTop={backToTop}/>
      <Team />
      <Application openModal={openModal} />
    </main>
  );
}

export default Main;
