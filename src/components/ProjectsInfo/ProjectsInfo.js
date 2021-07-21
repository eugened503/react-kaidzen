import React from "react";
import classNames from "classnames";

function ProjectsInfo({
  projectsMobile,
  teamInfo,
  title,
  subtitle,
  navigationTitle,
  navigationSubtitle,
  children,
}) {
  return (
    <>
      <div className={`${teamInfo} projects-info all-info`}>
        <div
          className={classNames("navigation-title", {
            visible: navigationTitle,
          })}
        >
          <h2 className={`${projectsMobile} projects-title all-title`}>
            {title}
          </h2>
        </div>

        <div
          className={classNames("navigation-subtitle", {
            visible: navigationSubtitle,
          })}
        >
          <h2 className="projects-subtitle">{subtitle}</h2>
        </div>
      </div>

      {children}
    </>
  );
}

export default ProjectsInfo;
