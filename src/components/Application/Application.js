import React from "react";
import check from "../../images/check.png";
import "./Application.css";
import Footer from "../Footer/Footer";

function Application({ openModal, handlePageChange }) {
  return (
    <>
    <div className="application" id="application">
      <h2 className="projects-title application-title">НАПИШИТЕ НАМ</h2>
      <div className="application-info">
        <div className="application-info__block-lead">
          <div className="cool-link">
            <div className="field">
              <input
                className="field__input"
                type="text"
                autoComplete="off"
                id="text"
              />
              <label
                className="field__label"
                htmlFor="text"
                title="Организация"
                data-title="Организация"
              ></label>
            </div>
          </div>

          <div className="cool-link">
            <div className="field">
              <input
                className="field__input"
                type="email"
                autoComplete="off"
                id="email"
              />
              <label
                className="field__label field__label_margin"
                htmlFor="email"
                title="Эл. адрес (E-mail)"
                data-title="Эл. адрес (E-mail)"
              ></label>
            </div>
          </div>

          <div className="cool-link">
            <div className="field">
              <input
                className="field__input"
                type="text"
                autoComplete="off"
                id="phone"
              />
              <label
                className="field__label"
                htmlFor="phone"
                title="Телефон"
                data-title="Телефон"
              ></label>
            </div>
          </div>
        </div>

        <div className="application-info__block-last">
          <div className="cool-link cool-link_margin">
            <div className="field field_margin">
              <input
                className="field__input field__input_margin"
                type="text"
                autoComplete="off"
                id="case"
              />
              <label
                className="field__label"
                htmlFor="case"
                title="Краткое описание задачи"
                data-title="Краткое описание задачи"
              ></label>
            </div>
          </div>
        </div>
      </div>

      <button className="offer-button application-button" onClick={openModal}>
        <img src={check} alt="check" />
        <p className="offer-button__title">
          Отправить заявку и перезвонить мне
        </p>
      </button>
    </div>
    <Footer  handlePageChange={handlePageChange}/>
    </>
  );
}

export default Application;
