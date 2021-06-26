import React, { useState, useEffect } from "react";
import "./Projects.css";
import ProjectsInfo from "../ProjectsInfo/ProjectsInfo";
import SwiperJs from "../SwiperJs/SwiperJs";
import classNames from "classnames";

function Projects({ scroll, openContent }) {
  const [navigationMenuVisibleState, setNavigationMenuVisibleState] =
    useState(true);
  const [navigationMenuVisibleState2, setNavigationMenuVisibleState2] =
    useState(true);
  const [navigationMenuVisibleState3, setNavigationMenuVisibleState3] =
    useState(true);


  const [xTrailing, setxTrailing] = useState(null);
  const [yTrailing, setyTrailing] = useState(null);

  const [xTrailing2, setxTrailing2] = useState(null);
  const [yTrailing2, setyTrailing2] = useState(null);

  const [button, setButton] = useState(false);
  const [button2, setButton2] = useState(false);
  const [button3, setButton3] = useState(false);

  const buttonContainerStyle = button3
    ? "projects-all__buttons-item_hidden"
    : "button-container__blue";

  const classStyle = !button3 ? "projects-all__buttons-item_hidden" : "button-container__item";

  useEffect(() => {
    const flag = scroll >= 1200 ? true : false;

    setNavigationMenuVisibleState(flag);

    setTimeout(() => {
      setNavigationMenuVisibleState2(flag);
    }, 500);
    setTimeout(() => {
      setNavigationMenuVisibleState3(flag);
    }, 800);
  }, [scroll]);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;

    setTimeout(() => {
      setxTrailing(clientX);
      setyTrailing(clientY);
    }, 100);
  };

  const handleMouseMove2 = (e) => {
    const { clientX, clientY } = e;
    setTimeout(() => {
      setxTrailing2(clientX);
      setyTrailing2(clientY);
    }, 300);
  };

  const gogo = () => {
    setButton2(!button2);
  };

  const gogo2 = () => {
    setButton(!button);
  };

  return (
    <section className="projects" id="projects">
      <ProjectsInfo
        navigationMenuVisibleState={navigationMenuVisibleState}
        navigationMenuVisibleState2={navigationMenuVisibleState2}
        title={"НАШИ ПРОЕКТЫ"}
        subtitle={"256+ в портфолио"}
      />
      <div
        className={classNames("navigation-menu3", {
          visible: navigationMenuVisibleState3,
        })}
      >
        <div className="projects-all" onMouseMove={(e) => handleMouseMove(e)}>
          <SwiperJs
            gogo={gogo}
            gogo2={gogo2}
            xTrailing={xTrailing}
            yTrailing={yTrailing}
          />
        </div>

        <div
          className="button-container"
          onMouseEnter={() => setButton3(!button3)}
          onMouseLeave={() => setButton3(!button3)}
          onMouseMove={(e) => handleMouseMove2(e)}
          onClick={openContent}
        >
          <button className={buttonContainerStyle} />
        </div>
      </div>

      <button
        className={classStyle}
        style={{
          left: xTrailing2,
          top: yTrailing2,
        }}
      />
    </section>
  );
}

export default Projects;
