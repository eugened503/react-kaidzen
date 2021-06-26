import React, { useState, useEffect } from "react";
import "./Team.css";
import ProjectsInfo from "../ProjectsInfo/ProjectsInfo";
import classNames from "classnames";
import SwiperJs2 from "../SwiperJs2/SwiperJs2";



function Team({ scroll, startProjects }) {
  
  const [navigationMenuVisibleState4, setNavigationMenuVisibleState4] =
    useState(false);

  const [navigationMenuVisibleState5, setNavigationMenuVisibleState5] =
    useState(false);

  const [navigationMenuVisibleState6, setNavigationMenuVisibleState6] =
    useState(false);

  useEffect(() => {
    const flag =
      (scroll >= 1200 && !startProjects) || (scroll >= 3971 && startProjects)
        ? true
        : false;

    setNavigationMenuVisibleState4(flag);

    setTimeout(() => {
      setNavigationMenuVisibleState5(flag);
    }, 500);

    setTimeout(() => {
      setNavigationMenuVisibleState6(flag);
    }, 800);
  }, [scroll, startProjects]);

  return (
    <section className="team" id="team">
      <ProjectsInfo
        navigationMenuVisibleState={navigationMenuVisibleState4}
        navigationMenuVisibleState2={navigationMenuVisibleState5}
        title={"КОМАНДА"}
        subtitle={"ИЗ БОЛЕЕ 100 профессионалов"}
      />
      <div
        className={classNames("navigation-menu3", {
          visible: navigationMenuVisibleState6,
        })}
      >
        <div
          className="team-container_1"
        >
          <SwiperJs2 />
        </div>
      </div>
    </section>
  );
}

export default Team;
