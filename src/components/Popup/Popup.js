import React from "react";
import Modal from "react-modal";
import checkCircle from "../../images/checkCircle.png";
import magnifyingGlass from "../../images/magnifyingGlass.png";
import "./Popup.css";

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
  },
};

function Popup({ modalIsOpen, closeMyModal }) {
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
        <button className="modal__close" onClick={closeModal}>
          <img
            className="modal__image"
            src={magnifyingGlass}
            alt="checkCircle"
          />
        </button>

        <div className="form">
          <img className="form__image" src={checkCircle} alt="checkCircle" />
          <h2 className="form__title">Заявка успешно отправлена</h2>
          <p className="form__subtitle">
            Ожидайте, С ВАМИ СВЯЖИТСЯ НАШ МЕНЕДЖЕР ДЛЯ УТОЧНЕНИЯ ДЕТАЛЕЙ
          </p>
        </div>
      </Modal>
    </div>
  );
}

export default Popup;
