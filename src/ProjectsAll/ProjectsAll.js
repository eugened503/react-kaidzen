import React, { useState, useEffect } from "react";
import "./ProjectsAll.css";
import ProjectsInfo from "../ProjectsInfo/ProjectsInfo";
import arrowArcRight from "../images/arrowArcRight.png";
import britannica2 from "../images/britannica2.jpg";

function ProjectsAll({ projects, startProjects }) {

  
  const [navigationMenuVisibleState, setNavigationMenuVisibleState] =
    useState(false);
  

  useEffect(() => {
    const gg = startProjects ? true : false;

    setTimeout(() => {
      setNavigationMenuVisibleState(gg);
    }, 300);
 

  }, [startProjects]);

  return (
    <section className={projects}>
      <ProjectsInfo
        navigationMenuVisibleState={navigationMenuVisibleState}
        
        title={"НАШИ ПРОЕКТЫ"}
      />
      <div className="all-projects__container">
        <button className="all-projects__button">
          <img src={arrowArcRight} alt="arrowArcRight" />
          <p className="all-projects__item">связаться с нами</p>
        </button>

        <div className="all-projects__block">
          <div className="all-projects__slider">
            <img
              className="all-projects__image"
              alt="project"
              src={britannica2}
            />

            <div className="projects-container">
              <div className="project-name project-name_align">
                <h3 className="project-name__title">Britannica project</h3>
                <p className="project-name__date">2021</p>
              </div>
            </div>
            <p className="project-name__info">
              Разработка сервиса для создания чек листов Auditor-Pro
              Автоматизация HR отдела на базе Битрикс24 и других сервисов
            </p>
          </div>

          <div className="all-projects__slider">
            <img
              className="all-projects__image"
              alt="project"
              src={britannica2}
            />

            <div className="projects-container">
              <div className="project-name project-name_align">
                <h3 className="project-name__title">Britannica project</h3>
                <p className="project-name__date">2021</p>
              </div>
            </div>
            <p className="project-name__info">
              Разработка сервиса для создания чек листов Auditor-Pro
              Автоматизация HR отдела на базе Битрикс24 и других сервисов
            </p>
          </div>

          <div className="all-projects__slider">
            <img
              className="all-projects__image"
              alt="project"
              src={britannica2}
            />

            <div className="projects-container">
              <div className="project-name project-name_align">
                <h3 className="project-name__title">Britannica project</h3>
                <p className="project-name__date">2021</p>
              </div>
            </div>
            <p className="project-name__info">
              Разработка сервиса для создания чек листов Auditor-Pro
              Автоматизация HR отдела на базе Битрикс24 и других сервисов
            </p>
          </div>
        </div>
      </div>
      <p className="all-projects__load">Загружаем, подождите</p>
    </section>
  );
}

export default ProjectsAll;
