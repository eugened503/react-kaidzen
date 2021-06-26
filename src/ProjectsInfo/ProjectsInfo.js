import React from "react";
import "./ProjectsInfo.css";
import classNames from "classnames";

function ProjectsInfo({title, subtitle, navigationMenuVisibleState,  navigationMenuVisibleState2, children}) {
 
  return (  
 
<>
          <div className="projects-info all-info">
            <div
              className={classNames("navigation-menu", {
                visible: navigationMenuVisibleState,
              })}
            >
              <h2 className="projects-title all-title">{title}</h2>
            </div>

            <div
              className={classNames("navigation-menu2", {
                visible: navigationMenuVisibleState2,
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
