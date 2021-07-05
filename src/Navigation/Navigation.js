import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./Navigation.css";

function Navigation({ margin, direction, size, closeMyModal, item }) {
  return (
    <nav className={`${margin} menu`}>
      <ul className={`${direction} menu-container`}>
        <li className="menu-container__item">
          <Link
            to="/#lead"
            className={`${size} menu-container__link`}
            onClick={closeMyModal}
          >
            Главная
          </Link>
        </li>
        <li className="menu-container__item">
          <Link
            to="/#projects"
            className={`${size} menu-container__link`}
            onClick={closeMyModal}
          >
            Проекты
          </Link>
        </li>
        <li className="menu-container__item">
          <Link
            to="/#team"
            className={`${size} menu-container__link`}
            onClick={closeMyModal}
          >
            Команда
          </Link>
        </li>
        <li className="menu-container__item">
          <Link
            to="/#application"
            className={`${size} menu-container__link`}
            onClick={closeMyModal}
          >
            {item}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
