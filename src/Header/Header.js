import React from "react";
import "./Header.css";
import kaidzen from "../images/kaidzen.svg";
import search from "../images/search.svg";
import searchMobile from "../images/search-mobile.svg";
import Navigation from "../Navigation/Navigation";
import { HashLink as Link } from "react-router-hash-link";

function Header({ headerClass, openSearchModal }) {
  let prevScrollpos = window.pageYOffset;

  window.onscroll = function () {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.querySelector(".header-background").style.top = "0";
    } else {
      document.querySelector(".header-background").style.top = "-150px";
    }
    prevScrollpos = currentScrollPos;
  };

  return (
    <div className="header-background">
      <header className={`${headerClass} header`}>
        <Link to="/#lead">
          <img className="header__image" src={kaidzen} alt="kaidzen" />
        </Link>
        <Navigation item={"Оставить заявку"} />
        <img
          className="header__search"
          src={search}
          alt="search"
          onClick={openSearchModal}
        />
        <img
          className="header__search-mobile"
          src={searchMobile}
          alt="search-mobile"
          onClick={openSearchModal}
        />
      </header>
    </div>
  );
}

export default Header;
