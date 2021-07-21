import React from "react";
import Lead from "../Lead/Lead";
import VideoContainer from "../VideoContainer/VideoContainer";
import Projects from "../Projects/Projects";
import Team from "../Team/Team";
import Application from "../Application/Application";
import ReactPageScroller from "react-page-scroller";

function Main({
  openContent,
  openModal,
  scrollEvent,
  currentPage,
  handlePageChange,
}) {
  return (
    <main className="content">
      <ReactPageScroller
        pageOnChange={handlePageChange}
        customPageNumber={currentPage}
        transitionTimingFunction={"cubic-bezier(.30,0,0.30,1)"}
        renderAllPagesOnFirstRender={true}
      >
        <Lead />
        <VideoContainer scrollEvent={scrollEvent} />
        <Projects
          openContent={openContent}
          handlePageChange={handlePageChange}
        />
        <Team />
        <Application
          openModal={openModal}
          handlePageChange={handlePageChange}
        />
      </ReactPageScroller>
    </main>
  );
}

export default Main;
