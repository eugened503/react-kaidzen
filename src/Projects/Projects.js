import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Projects.css";
import ProjectsInfo from "../ProjectsInfo/ProjectsInfo";
import SwiperJs from "../SwiperJs/SwiperJs";
import classNames from "classnames";

function Projects({ openContent, backToTop }) {
  const [navigationTitle, setNavigationTitle] = useState(true);
  const [navigationSubtitle, setNavigationSubtitle] = useState(true);
  const [navigationProjects, setNavigationProjects] = useState(true);
  const containerRef = useRef(null);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const buttonBlue = [...document.querySelectorAll(".button-container__blue")];
  const images = [...document.querySelectorAll(".data-img")];

  const backToTopAllProjects = () => {
    openContent();
    backToTop();
  };

  useEffect(() => {
    const flag = isVisible ? true : false;
    setNavigationTitle(flag);
    setTimeout(() => {
      setNavigationSubtitle(flag);
    }, 500);
    setTimeout(() => {
      setNavigationProjects(flag);
    }, 800);
  }, [isVisible]);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    buttonBlue.forEach((i) => {
      let hw = i.clientWidth / 2;
      let hh = i.clientHeight / 2;
      let x = i.offsetLeft + hw - clientX;
      let y = i.offsetTop + hh - clientY;
      if (Math.abs(x) > hw || Math.abs(y) > hh) return;
      i.style.backgroundPosition = 50 - x / 5 + "% " + (50 - y / 5) + "%";
    });
  };

  const handleMouseMoveButtons = (e) => {
    const { clientX, clientY } = e;
    images.forEach((i) => {
      let hw = i.clientWidth / 2;
      let hh = i.clientHeight / 2;
      let x = i.offsetLeft + hw - clientX;
      let y = i.offsetTop + hh - clientY;
      if (Math.abs(x) > hw || Math.abs(y) > hh) return;
      i.style.backgroundPosition = 50 - x / 5 + "% " + (50 - y / 2) + "%";
    });
  };

  const back = () => {
    images.forEach((i) => {
      i.style.backgroundPosition = 50 + "% " + 50 + "%";
    });
  };

  const backbuttonBlue = () => {
    buttonBlue.forEach((i) => {
      i.style.backgroundPosition = 50 + "% " + 50 + "%";
    });
  };

  const callbackFunction = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const currentRef = containerRef.current;
    const observer = new IntersectionObserver(callbackFunction);
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [containerRef]);

  return (
    <>
      <section className="projects" id="projects" ref={containerRef}>
        <ProjectsInfo
          navigationTitle={navigationTitle}
          navigationSubtitle={navigationSubtitle}
          title={"НАШИ ПРОЕКТЫ"}
          subtitle={"256+ в портфолио"}
        />
        <div
          className={classNames("projects-all__buttons-navigation", {
            visible: navigationProjects,
          })}
        >
          <div className="projects-all__buttons projects-all__buttons_display">
            <div
              ref={navigationPrevRef}
              className="projects-all__buttons-left data-img"
              onMouseMove={(e) => handleMouseMoveButtons(e)}
              onMouseLeave={back}
            />
            <div
              className="projects-all__buttons-right data-img"
              onMouseMove={(e) => handleMouseMoveButtons(e)}
              onMouseLeave={back}
              ref={navigationNextRef}
            />
          </div>
        </div>
        <div
          className={classNames("navigation-lead", {
            visible: navigationProjects,
          })}
        >
          <div className="projects-all">
            <SwiperJs
              navigationPrevRef={navigationPrevRef}
              navigationNextRef={navigationNextRef}
              sliderStyle={"projects-slider_height"}
            />
          </div>

          <div className="button-container">
            <Link to="/all-projects">
              <div
                className="button-container__blue"
                onMouseMove={(e) => handleMouseMove(e)}
                onMouseLeave={backbuttonBlue}
                onClick={backToTopAllProjects}
              />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
