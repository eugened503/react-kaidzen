import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header/Header";
import Popup from "./Popup/Popup";
import SearchPopup from "./SearchPopup/SearchPopup";
import Lead from "./Lead/Lead";
import VideoContainer from "./VideoContainer/VideoContainer";
import Projects from "./Projects/Projects";

import ProjectsAll from "./ProjectsAll/ProjectsAll";
import Team from "./Team/Team";
import Application from "./Application/Application";
import Footer from "./Footer/Footer";
import Screen from "./Screen/Screen";

function App() {
  const [projects, setProjects] = useState("all-projects");
  const [startProjects, setStartProjects] = useState(false);
  const [scroll, setScroll] = useState(0);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalSearchIsOpen, setIsModalSearchIsOpen] = useState(false);


  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function openModal() {
    setIsOpen(true);
  }

  function openlSearchModal() {
    setIsModalSearchIsOpen(true);
  }

  function closeMyModal() {
    setIsOpen(false);
  }

  function closeSearchModal() {
    setIsModalSearchIsOpen(false);
  }

  function openContent() {
    const content =
      projects === "all-projects_visible"
        ? "all-projects"
        : "all-projects_visible";

    setProjects(content);
    setStartProjects(!startProjects);
  }

  return (
    <>
       <Screen />
      <div className="app">
        <div className="page">
          <Header openlSearchModal={openlSearchModal} />
          <main className="content">
            <Lead />
            <VideoContainer />
            <Projects scroll={scroll} openContent={openContent} />
            <ProjectsAll projects={projects} startProjects={startProjects} />
            <Team scroll={scroll} startProjects={startProjects} />
            <Application openModal={openModal} />
          </main>
          <Footer />
          <Popup modalIsOpen={modalIsOpen} closeMyModal={closeMyModal} />
          <SearchPopup
            modalIsOpen={modalSearchIsOpen}
            closeMyModal={closeSearchModal}
          />
        </div>
      </div>
    </>
  );
}

export default App;
