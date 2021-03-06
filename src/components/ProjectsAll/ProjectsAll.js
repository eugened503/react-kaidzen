import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import "./ProjectsAll.css";
import ProjectsInfo from "../ProjectsInfo/ProjectsInfo";
import arrowArcRight from "../../images/arrowArcRight.png";
import britannica2 from "../../images/britannica2.jpg";
import AllProjectsSlider from "../AllProjectsSlider/AllProjectsSlider";

function ProjectsAll({handlePageChange}) {
  const history = useHistory();
  const data = [
    {
      image: britannica2,
      title: "Britannica project",
      date: "2021",
      info: "Разработка сервиса для создания чек листов Auditor-Pro Автоматизация HR отдела на базе Битрикс24 и других сервисов",
    },
    {
      image: britannica2,
      title: "Britannica project",
      date: "2021",
      info: "Разработка сервиса для создания чек листов Auditor-Pro Автоматизация HR отдела на базе Битрикс24 и других сервисов",
    },
    {
      image: britannica2,
      title: "Britannica project",
      date: "2021",
      info: "Разработка сервиса для создания чек листов Auditor-Pro Автоматизация HR отдела на базе Битрикс24 и других сервисов",
    },
  ];

  const [navigationMenuVisibleState, setNavigationMenuVisibleState] =
    useState(false);

  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const flag = isVisible ? true : false;

    setTimeout(() => {
      setNavigationMenuVisibleState(flag);
    }, 300);
  }, [isVisible]);

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

const backToLead = () => {
  history.push('/');
  handlePageChange(4)
}


  return (
    <section className="all-projects_visible" ref={containerRef}>
      <ProjectsInfo
        navigationTitle={navigationMenuVisibleState}
        title={"НАШИ ПРОЕКТЫ"}
        projectsMobile={"all-projects_mobile"}
  
      />
      <div className="all-projects__container">
        <button className="all-projects__button all-projects__button_none">
          <img src={arrowArcRight} alt="arrowArcRight" />
          <div className="all-projects__item" onClick={backToLead}>связаться с нами</div>
        </button>

       <div className="all-projects__block">
          {data.map((item, index) => {
            return (
              <AllProjectsSlider
                key={index}
                image={item.image}
                title={item.title}
                date={item.date}
                info={item.info}
              />
            );
          })}
        </div>  
      </div>
      <p className="all-projects__load">Загружаем, подождите</p>
      <div className="donut"></div>
    </section>
  );
}

export default ProjectsAll;
