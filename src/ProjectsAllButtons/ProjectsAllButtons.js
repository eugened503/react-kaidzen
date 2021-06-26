import React, { useState } from "react";
import "./ProjectsAllButtons.css";
function ProjectsAllButtons({ gogo, gogo2 }) {
  const [button, setButton] = useState(false);
  const [button2, setButton2] = useState(false);

  const hhh = () => {
    gogo();
    setButton2(!button2);
  };

  const hhh2 = () => {
    gogo2();
    setButton(!button);
  };

  const pof = button
    ? "projects-all__buttons-item_hidden"
    : "projects-all__buttons-item2";

  const pof3 = button2
    ? "projects-all__buttons-item_hidden"
    : "projects-all__buttons-item1";

  return (
    <>
      <div className="projects-all__buttons">
        <div
          className="projects-all__buttons-container"
          onMouseEnter={hhh}
          onMouseLeave={hhh}
        >
          <button className={pof3} />
        </div>

        <div
          className="projects-all__buttons-container "
          onMouseEnter={hhh2}
          onMouseLeave={hhh2}
        >
          <button className={pof} />
        </div>
      </div>
    </>
  );
}

export default ProjectsAllButtons;
