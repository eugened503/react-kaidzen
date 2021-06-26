import React from "react";
import "./Footer.css";
import top from "../images/top.png";

function Footer() {
  const backToTop = () => {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -80);
      setTimeout(backToTop, 0);
    }
  };

  return (
    <footer className="footer">
      <button className="footer-button" onClick={backToTop}>
        <img src={top} alt="top" />
        <p className="footer__text footer__text_margin">Вверх</p>
      </button>
      <p className="footer__text">7 (800) 350-20-54</p>
      <p className="footer__text">
        198302, г. Санкт-Петербург, пр-кт Маршала Жукова, д. 21 литера а, помещ.
        №205
      </p>

      <p className="footer__text">
        © 2021 &nbsp; &nbsp; Kaizen — Design Product Agency
      </p>
    </footer>
  );
}

export default Footer;
