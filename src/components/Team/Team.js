import React, { useState, useEffect, useRef } from "react";
import "./Team.css";
import ProjectsInfo from "../ProjectsInfo/ProjectsInfo";
import classNames from "classnames";
import SwiperTeam from "../SwiperTeam/SwiperTeam";
import {useIsMounted} from '../../utils/utils'

function Team() {
  const isMounted = useIsMounted();
  const [navigationTitle, setNavigationTitle] = useState(true);
  const [navigationSubtitle, setNavigationSubtitle] = useState(true);

  const [navigationMenuVisibleState, setNavigationMenuVisibleState] =
    useState(false);

  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

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

  useEffect(() => {
    const flag = isVisible ? true : false;

    if (isMounted.current) setNavigationTitle(flag);

    setTimeout(() => {
      if (isMounted.current)
      setNavigationSubtitle(flag);
    }, 500);

    setTimeout(() => {
      if (isMounted.current)
      setNavigationMenuVisibleState(flag);
    }, 800);
  }, [isMounted, isVisible]);

  return (
    <section className="team" id="team" ref={containerRef}>
      <ProjectsInfo
        navigationTitle={navigationTitle}
        navigationSubtitle={navigationSubtitle}
        title={"КОМАНДА"}
        subtitle={"ИЗ БОЛЕЕ 100 профессионалов"}
        teamInfo={"team-info"}
      />
      <div
        className={classNames("team-lead", {
          visible: navigationMenuVisibleState,
        })}
      >
       <SwiperTeam /> 
      </div>
    </section>
  );
}

export default Team;
