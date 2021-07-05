import React from "react";
import "./DoubleMarquee.css";

export default function DoubleMarquee() {
  return (
    <>
      <div className="marquee-double">
        <div className="marquee-double__span marquee-double__span1">
          <span className=" marquee-double__span-item">E-commerce</span>
          <span className=" marquee-double__span-item">nFinTech</span>
          <span className=" marquee-double__span-item">EdTech</span>
          <span className=" marquee-double__span-item">HoReca</span>
          <span className=" marquee-double__span-item">eSport</span>
         
        </div>

        <div className="marquee-double__span marquee-double__span2">
          <span className=" marquee-double__span-item">E-commerce</span>
          <span className=" marquee-double__span-item">nFinTech</span>
          <span className=" marquee-double__span-item">EdTech</span>
          <span className=" marquee-double__span-item">HoReca</span>
          <span className=" marquee-double__span-item">eSport</span>
         
        </div>
       
      </div>
    </>
  );
}
