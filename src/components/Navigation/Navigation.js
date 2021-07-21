import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import "./Navigation.css";

function Navigation({
  margin,
  direction,
  size,
  closeMyModal,
  item,
  handlePageChange,
  navigationFlag,
}) {
  const { pathname } = useLocation();
  const history = useHistory();

  const getBlock = (e) => {
    if (navigationFlag) {
      closeMyModal();
    }
    if (pathname === "/all-projects" || pathname === "/page-404") {
      history.push("/");
    }

    handlePageChange(Number(e.target.id));
  };

  return (
    <nav className={`${margin} menu`}>
      <ul className={`${direction} menu-container`}>
        <li className="menu-container__item">
          <div
            className={`${size} menu-container__link`}
            onClick={getBlock}
            id="0"
          >
            Главная
          </div>
        </li>
        <li className="menu-container__item">
          <div
            className={`${size} menu-container__link`}
            id="2"
            onClick={getBlock}
          >
            Проекты
          </div>
        </li>
        <li className="menu-container__item">
          <div
            className={`${size} menu-container__link`}
            id="3"
            onClick={getBlock}
          >
            Команда
          </div>
        </li>
        <li className="menu-container__item">
          <div
            className={`${size} menu-container__link`}
            id="4"
            onClick={getBlock}
          >
            {item}
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
