import React from "react";
import { Link } from "react-router-dom";

function AllProjectsSlider({ image, title, date, info }) {
  return (
    <div className="all-projects__slider">
      <Link to="/page-404">
        <div className="projects-image">
          <div className="projects-image__frame">
            <img alt="project" src={image} className="projects-image__item" />

            <div />
          </div>
        </div>
      </Link>

      <div className="projects-container">
        <div className="project-name project-name_align">
          <h3 className="project-name__title">{title}</h3>
          <p className="project-name__date">{date}</p>
        </div>
      </div>
      <p className="project-name__info project-name__info_mobile">{info}</p>
    </div>
  );
}

export default AllProjectsSlider;
