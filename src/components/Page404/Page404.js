import React from "react";
import { useHistory } from "react-router-dom";
import "./Page404.css";
function Page404({ handlePageChange }) {
  const history = useHistory();

  const goHome = (e) => {
    history.push("/");
    handlePageChange(Number(e.target.id));
  };

  return (
    <div id="notfound">
      <div className="notfound-bg"></div>
      <div className="notfound">
        <div className="notfound-404">
          <h1>404</h1>
        </div>
        <h2>we are sorry, but the page you requested was not found</h2>
        <div className="home-btn" onClick={goHome} id="0">
          Go Home
        </div>
        <div className="contact-btn" onClick={goHome} id="4">
          Contact us
        </div>
      </div>
    </div>
  );
}

export default Page404;
