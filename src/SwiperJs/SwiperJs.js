import React, { useRef, useState } from "react";
import "./SwiperJs.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import prostaff from "../images/prostaff.jpg";
import britannica from "../images/britannica.jpg";
import SwiperCore, { Navigation } from "swiper/core";

SwiperCore.use([Navigation]);

function SwiperJs() {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const screenSlide = window.screen.width <= 1283  ? 1 : 2
 
  return (
    <>
      <div className="projects-all__buttons">
        <div className="projects-all__buttons-container">
          <button
            className="projects-all__buttons-item1"
            ref={navigationPrevRef}
          />
        </div>

        <div className="projects-all__buttons-container ">
          <button
            className="projects-all__buttons-item2"
            ref={navigationNextRef}
          />
        </div>
      </div>
      <Swiper
        loop={true}
        slidesPerView={screenSlide}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        className="swiper-container mySwiper swiper-mod"
      >
        <SwiperSlide className="swiper-overflow">
          <div className="projects-slider">
            <img alt="project" src={prostaff} />

            <div className="projects-container">
              <div className="project-name">
                <h3 className="project-name__title">PROSTAFF</h3>
                <p className="project-name__date">2021</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-overflow">
          <div className="projects-slider">
            <img alt="project" src={britannica} />

            <div className="projects-container">
              <div className="project-name">
                <h3 className="project-name__title">Britannica project</h3>
                <p className="project-name__date">2021</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-overflow">
          <div className="projects-slider">
            <img alt="project" src={britannica} />

            <div className="projects-container">
              <div className="project-name">
                <h3 className="project-name__title">Britannica project</h3>
                <p className="project-name__date">2021</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-overflow">
          <div className="projects-slider">
            <img alt="project" src={prostaff} />

            <div className="projects-container">
              <div className="project-name">
                <h3 className="project-name__title">PROSTAFF</h3>
                <p className="project-name__date">2021</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-overflow">
          <div className="projects-slider">
            <img alt="project" src={britannica} />

            <div className="projects-container">
              <div className="project-name">
                <h3 className="project-name__title">Britannica project</h3>
                <p className="project-name__date">2021</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-overflow">
          <div className="projects-slider">
            <img alt="project" src={britannica} />

            <div className="projects-container">
              <div className="project-name">
                <h3 className="project-name__title">Britannica project</h3>
                <p className="project-name__date">2021</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default SwiperJs;
