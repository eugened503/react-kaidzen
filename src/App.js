import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import "./App.css";
import Header from "./Header/Header";
import Popup from "./Popup/Popup";
import SearchPopup from "./SearchPopup/SearchPopup";
import ProjectsAll from "./ProjectsAll/ProjectsAll";
import Footer from "./Footer/Footer";
import Screen from "./Screen/Screen";
import Main from "./Main/Main";
import Page404 from "./Page404/Page404";

function App() {
  const [projects, setProjects] = useState("all-projects");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalSearchIsOpen, setIsModalSearchIsOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  //  const history = useHistory();
  //  history.push("/");

  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = scroll ? "hidden" : "auto";
  }, [scroll]);

  //  useEffect(() => {
  //    setScroll(true);
  //    setTimeout(() => setScroll(false), 5000);
  //  }, []);

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

  const backToTop = () => {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -80);
      setTimeout(backToTop, 0);
    }
  };

  return (
    <BrowserRouter>
      {/* <Screen />    */}
      <div className="app">
        <div className="page">
          <Header openSearchModal={openSearchModal} />
          <Switch>
            <Route exact path="/">
              <Main
                openContent={openContent}
                openModal={openModal}
                backToTop={backToTop}
              />

              <Footer backToTop={backToTop} />
            </Route>
            <Route exact path="/all-projects">
              <ProjectsAll projects={projects} />
            </Route>

            <Route exact path="/page-404">
              <Page404 />
            </Route>
          </Switch>
          <Popup modalIsOpen={modalIsOpen} closeMyModal={closeMyModal} />
          <SearchPopup
            modalIsOpen={modalSearchIsOpen}
            closeMyModal={closeSearchModal}
          />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
