import React from "react";
import "./Lead.css";
//import Carousel from "../Carousel/Carousel";
import Marquee2 from "../Marquee2/Marquee2";
//import Typer from "../Typer/Typer";
import check from "../images/check.png";
//import data from "../data/data";
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
        <button className="offer-button">
          <img src={check} alt="check" />
          <p className="offer-button__title">
            Отправить заявку и перезвонить мне
          </p>
        </button>
      </div>
      {/* <Carousel items={data} active={0} />  */}
      <Marquee2 />
    </section>
  );
}

export default Lead;
