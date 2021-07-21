import React from "react";
import "./Header.css";
import kaidzen from "../../images/kaidzen.svg";
import search from "../../images/search.svg";
import searchMobile from "../../images/search-mobile.svg";
import Navigation from "../Navigation/Navigation";


function Header({ headerClass, openSearchModal, handlePageChange }) {
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
        <div onClick={() => handlePageChange(0)}>
          <img className="header__image" src={kaidzen} alt="kaidzen" />
        </div>
        <Navigation item={"Оставить заявку"}
         navigationFlag={false}
        handlePageChange={handlePageChange}/>
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
