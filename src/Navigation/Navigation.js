import React from "react";
import "./Navigation.css";

function Navigation({ margin, direction, size, closeMyModal }) {
  const anchors = document.querySelectorAll('a[href*="#"]');
  for (let anchor of anchors) {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const blockID = anchor.getAttribute("href").substr(1);
      const yOffset = -40; // не доезжаем 40px
      const element = document.getElementById(blockID);
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    });
  }

  return (
    <nav className={`${margin} menu`}>
      <ul className={`${direction} menu-container`}>
        <li className="menu-container__item">
          <a
            className={`${size} menu-container__link`}
            href="#lead"
            onClick={closeMyModal}
          >
            Главная
          </a>
        </li>
        <li className="menu-container__item">
          <a
            className={`${size} menu-container__link`}
            href="#projects"
            onClick={closeMyModal}
          >
            Проекты
          </a>
        </li>
        <li className="menu-container__item">
          <a
            className={`${size} menu-container__link`}
            href="#team"
            onClick={closeMyModal}
          >
            Команда
          </a>
        </li>
        <li className="menu-container__item">
          <a
            className={`${size} menu-container__link`}
            href="#application"
            onClick={closeMyModal}
          >
            Оставить заявку
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
