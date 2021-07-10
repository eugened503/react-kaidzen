import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./Lead.css";
import Marquee from "../Marquee/Marquee";
import check from "../images/check.png";
import ReactTyping from "../ReactTyping/ReactTyping";

function Lead() {
  const text = [
    "Мобильные приложения",
    "Сайты / Web проекты",
    "IOT",
    "Голосовые интерфейсы",
  ];

  return (
    <section className="offer" id="lead">
      <div className="offer-container">
        <h1 className="offer-title">
          Мы разрабатываем профессиональные IT решения для вашего бизнеса
        </h1>

        <div className="offer-typing">
          <p className="offer-subtitle offer-subtitle_size">|</p>
          <ReactTyping
            text={text}
            styleTitle={"offer-subtitle offer-subtitle_padding"}
            styleSubtitle={"cursor-none"}
          />
          <p className="offer-subtitle cursor">|</p>
        </div>

        <p className="offer-message">
          Наши решения экономят клиентам сотни миллионов рублей
        </p>
        <Link  className="offer-link" to="/#application">
        <button className="offer-button offer-button_width">
          <img src={check} alt="check" />
          <p className="offer-button__title">
            Отправить заявку и перезвонить мне
          </p>
        </button>
        </Link>
      </div>
      <Marquee />
    </section>
  );
}

export default Lead;
