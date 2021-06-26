import React from "react";
import "./Lead.css";
import Carousel from "../Carousel/Carousel";
import Typer from "../Typer/Typer";
import check from "../images/check.png";
import data from "../data/data";

function Lead() {

  return (
    <section className="offer" id="lead">
    <div className="offer-container">
      <h1 className="offer-title">
        Мы разрабатываем профессиональные IT решения для вашего бизнеса
      </h1>
      <Typer dataText={["Мобильные приложения", "Фронтенд", "Бэкенд"]} />,
      <p className="offer-message">
        Наши решения экономят клиентам сотни миллионов рублей
      </p>
      <button className="offer-button">
        <img src={check} alt="check" />
        <p className="offer-button__title">
          Отправить заявку и перезвонить мне
        </p>
      </button>
    </div>
     <Carousel items={data} active={0} /> 
  </section>

  );
}

export default Lead;
