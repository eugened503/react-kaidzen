import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./Header/Header";
import Popup from "./Popup/Popup";
import SearchPopup from "./SearchPopup/SearchPopup";
import ProjectsAll from "./ProjectsAll/ProjectsAll";
import Footer from "./Footer/Footer";
import Screen from "./Screen/Screen";
import Main from "./Main/Main";

function App() {
  const [projects, setProjects] = useState("all-projects");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalSearchIsOpen, setIsModalSearchIsOpen] = useState(false);

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
  }

  const backToTop = () => {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -80);
      setTimeout(backToTop, 0);
    }
  };

  return (
    <BrowserRouter>
      <Screen />
      <div className="app">
        <div className="page">
          <Header openlSearchModal={openlSearchModal} />
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
