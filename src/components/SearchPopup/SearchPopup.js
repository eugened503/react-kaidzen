import React, { useEffect, useState } from "react";
import "./SearchPopup.css";
import Modal from "react-modal";
import { useIsMounted } from "../../utils/utils";
import magnifyingGlass from "../../images/magnifyingGlass.png";
import kaidzen from "../../images/kaidzen.svg";
import Navigation from "../Navigation/Navigation";
import ReactTyping from "../ReactTyping/ReactTyping";

function SearchPopup({ modalIsOpen, closeMyModal, handlePageChange }) {
  const flexDirection = window.screen.width <= 1176 ? "column" : "row";
  const isMounted = useIsMounted();
  const text = ["PROSTAFF", "Britannica project", "WonderTask"];

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
      minHeight: "614px",
      display: "flex",
      justifyContent: "space-between",
      flexDirection: flexDirection,
      width: "85%",
    },
  };

  const [typing, setTyping] = useState(false);

  useEffect(() => {
    if (isMounted.current)
      setTimeout(() => {
        setTyping(true);
      }, 1500);
  }, [isMounted]);

  function closeModal() {
    closeMyModal();
  }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <img src={kaidzen} className="form-logo" alt="kaidzen" />
        <button
          className="form-close modal__close modal__close_top"
          onClick={closeModal}
        >
          <img
            className="modal__image"
            src={magnifyingGlass}
            alt="checkCircle"
          />
        </button>

        <div className="form-seach">
          <Navigation
            margin={"menu_margin"}
            direction={"menu-container_column"}
            size={"menu-container__link_size"}
            closeMyModal={closeMyModal}
            item={"Контакты"}
            handlePageChange={handlePageChange}
            navigationFlag={true}
          />
        </div>

        <div className="form-container">
          <div className="form-input" onClick={() => setTyping(false)}>
            <div className="form-typing">
              {typing ? (
                <ReactTyping
                  text={text}
                  styleTitle={"form-container__type"}
                  styleSubtitle={"form-container__subtitle"}
                />
              ) : null}
            </div>

            <div className="cool-link cool-link__width">
              <div className="field">
                <input
                  className="field__input field__input_top"
                  type="text"
                  autoComplete="off"
                  id="text"
                />
                <label
                  className="field__label field__label_top"
                  htmlFor="text"
                  title="Поиск по сайту"
                  data-title="Поиск по сайту"
                ></label>
              </div>
            </div>
          </div>
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

            <div className="form-container__tag form-container__tag_margin">
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
