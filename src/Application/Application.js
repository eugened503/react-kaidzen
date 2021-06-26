import React from "react";
import check from "../images/check.png";
import "./Application.css";

function Application({ openModal }) {
  return (
    <section className="application" id="application">
      <h2 className="projects-title">НАПИШИ НАМ, И РЕАЛИЗУЕМ ТВОЮ ИДЕЮ</h2>

      <div className="application-info">
        <div className="application-info__item">
          <p className="application-info__content">Организация</p>
          <input type="text" className="application-info__input" />
        </div>
        <div className="application-info__item application-info__item_box-shadow">
          <p className="application-info__content application-info__content_mod">
            Эл. адрес (E-mail)
          </p>
          <input type="email" className="application-info__input" />
        </div>
        <div className="application-info__item application-info__item_box-shadow">
          <p className="application-info__content application-info__content_mod">
            Телефон
          </p>
          <input type="text" className="application-info__input" />
        </div>
      </div>

      <div className="application-info__item application-info__item_height">
        <p className="application-info__content application-info__content_mod application-info__content_height">
          Краткое описание задачи
        </p>
        <input type="text" className="application-info__input application-info_height" />
      </div>

      <button className="offer-button application-button" onClick={openModal}>
        <img src={check} alt="check" />
        <p className="offer-button__title">
          Отправить заявку и перезвонить мне
        </p>
        <p className="offer-button__title-min">Отправить</p>
      </button>
    </section>
  );
}

export default Application;
