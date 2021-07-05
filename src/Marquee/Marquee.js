import React from "react";
import "./Marquee.css";
function Marquee() {
  return (
    <div className="marquee">
      <div className="marquee-inner">
        <span className="marquee-inner__span">
          {/* <p className="marquee-inner__item">E-commerce</p> */}
          <p className="marquee-inner__item">FinTech</p>
          <p className="marquee-inner__item">EdTech</p>
          <p className="marquee-inner__item">HoReca</p>
          <p className="marquee-inner__item">eSport</p>
        </span>
        <span className="marquee-inner__span">
       
          <p className="marquee-inner__item">FinTech</p>
          <p className="marquee-inner__item">EdTech</p>
          <p className="marquee-inner__item">HoReca</p>
          <p className="marquee-inner__item">eSport</p>
        </span>
      
        
      </div>
    </div>
  );
}

export default Marquee;
