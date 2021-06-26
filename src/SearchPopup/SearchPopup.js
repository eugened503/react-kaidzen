import React, { useEffect, useState } from "react";
import "./SearchPopup.css";
import Modal from "react-modal";

import magnifyingGlass from "../images/magnifyingGlass.png";
import kaidzen from "../images/kaidzen.svg";
import Navigation from "../Navigation/Navigation";
import ReactTypingEffectDemo from "../ReactTypingEffectDemo/ReactTypingEffectDemo";

function SearchPopup({ modalIsOpen, closeMyModal }) {
  const flexDirection = window.screen.width <= 1176 ? "column" : "row";

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "inherit",
      overflow: "none",
        border: "none",
      //border: "green solid 1px",
      minHeight: "614px",
      display: "flex",
      justifyContent: "space-between",
      flexDirection: flexDirection,
      width: "85%",
    },
  };

  const [typing, setTyping] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTyping(true);
    }, 1500);
  }, []);

  function closeModal() {
    closeMyModal();
  }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        //onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <img src={kaidzen} className="form-logo" alt="kaidzen" />
        <button className="modal__close modal__close_top" onClick={closeModal}>
          <img
            className="modal__image"
            src={magnifyingGlass}
            alt="checkCircle"
          />
        </button>

        <form className="form-seach">
          <Navigation
            margin={"menu_margin"}
            direction={"menu-container_column"}
            size={"menu-container__link_size"}
            closeMyModal={closeMyModal}
          />
        </form>

        <div className="form-container">
          <h3 className="form-container__title">Поиск по сайту</h3>
          {typing ? <ReactTypingEffectDemo /> : null}

          <input
            className="application-info__input form-container__input"
            onClick={() => setTyping(!typing)}
          />
          <p className="form-container__subtitle">Самое популярное</p>
          <div className="form-container__tags">
            <div className="form-container__tag">
              <p className="form-container__tag-content">Приложения</p>
            </div>

            <div className="form-container__tag">
              <p className="form-container__tag-content">Сайты</p>
            </div>

            <div className="form-container__tag">
              <p className="form-container__tag-content">PROSTAFF</p>
            </div>

            <div className="form-container__tag">
              <p className="form-container__tag-content">Mriya resort & spa</p>
            </div>

            <div className="form-container__tag">
              <p className="form-container__tag-content">Britannica project</p>
            </div>

            <div className="form-container__tag">
              <p className="form-container__tag-content">Айдентика</p>
            </div>

            <div className="form-container__tag">
              <p className="form-container__tag-content">Брендинг</p>
            </div>

            <div className="form-container__tag">
              <p className="form-container__tag-content">Логотипы</p>
            </div>

            <div className="form-container__tag">
              <p className="form-container__tag-content">WonderTask</p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default SearchPopup;
