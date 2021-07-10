import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./Page404.css";
function Page404() {
  return (

    <div id="notfound">
		<div className="notfound-bg"></div>
		<div className="notfound">
			<div className="notfound-404">
				<h1>404</h1>
			</div>
			<h2>we are sorry, but the page you requested was not found</h2>
			<Link to="/" className="home-btn">Go Home</Link>
			<Link to="/#application" className="contact-btn">Contact us</Link>
		</div>
	</div>
  );
}

export default Page404;
