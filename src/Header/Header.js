import React from "react";
import "./Header.css";
import kaidzen from "../images/kaidzen.svg";
import search from "../images/search.svg";
import Navigation from "../Navigation/Navigation";

function Header({ headerClass, openlSearchModal }) {
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
    <div  className="header-background">
    <header className={`${headerClass} header`}>
      <img src={kaidzen} alt="kaidzen" />
      <Navigation />
      <img src={search} alt="search" onClick={openlSearchModal} />
    </header>

</div>
  );
}

export default Header;
