import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Popup from "./components/Popup/Popup";
import SearchPopup from "./components/SearchPopup/SearchPopup";
import ProjectsAll from "./components/ProjectsAll/ProjectsAll";
import Screen from "./components/Screen/Screen";
import Main from "./components/Main/Main";
import Page404 from "./components/Page404/Page404";

function App() {
  const [projects, setProjects] = useState("all-projects");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalSearchIsOpen, setIsModalSearchIsOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [currentPage, setcurrentPage] = useState(null);
  const [scrollEvent, setScrollEvent] = useState(0);

  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = scroll ? "hidden" : "auto";
  }, [scroll]);

  useEffect(() => {
    setScroll(true);
    setTimeout(() => setScroll(false), 5000);
  }, []);

  function openModal() {
    setIsOpen(true);
    setScroll(true);
  }

  function openSearchModal() {
    setIsModalSearchIsOpen(true);
    setScroll(true);
  }

  function closeMyModal() {
    setIsOpen(false);
    setScroll(false);
  }

  function closeSearchModal() {
    setIsModalSearchIsOpen(false);
    setScroll(false);
  }

  function openContent() {
    const content =
      projects === "all-projects_visible"
        ? "all-projects"
        : "all-projects_visible";

    setProjects(content);
  }

  useEffect(() => {
    window.addEventListener("scroll", (e) => handleScroll(e));
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (e) => {
    setScrollEvent(e);
  };

  const handlePageChange = (number) => {
    setcurrentPage(number);
  };

  return (
    <BrowserRouter>
      <Screen />
      <div className="app">
        <div className="page">
          <Header
            openSearchModal={openSearchModal}
            handlePageChange={handlePageChange}
          />
          <Switch>
            <Route exact path="/">
              <Main
                openContent={openContent}
                openModal={openModal}
                scrollEvent={scrollEvent}
                currentPage={currentPage}
                handlePageChange={handlePageChange}
              />
            </Route>
            <Route exact path="/all-projects">
              <ProjectsAll
                projects={projects}
                handlePageChange={handlePageChange}
              />
            </Route>

            <Route exact path="/page-404">
              <Page404 handlePageChange={handlePageChange} />
            </Route>
          </Switch>
          <Popup modalIsOpen={modalIsOpen} closeMyModal={closeMyModal} />
          <SearchPopup
            modalIsOpen={modalSearchIsOpen}
            handlePageChange={handlePageChange}
            closeMyModal={closeSearchModal}
          />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
