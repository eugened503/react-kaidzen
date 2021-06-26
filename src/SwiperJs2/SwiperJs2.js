import React, { useRef, useState } from "react";
import "./SwiperJs2.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";

// import Swiper core and required modules
import SwiperCore, { Navigation } from "swiper/core";
import Vladimir from "../images/Vladimir.jpg";
import Dmitry from "../images/Dmitry.jpg";
import DmitryKlimov from "../images/DmitryKlimov.jpg";
import Valentin from "../images/Valentin.jpg";

SwiperCore.use([Navigation]);

function SwiperJs2() {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
 
  const screenSlide = window.screen.width <= 1325  ? 1 : 2

//console.log(window.screen.width)
 
  return (
    <>
      <Swiper
        loop={true}
        slidesPerView={screenSlide}
        //  navigation={true}
        //   navigation={{
        //    nextEl: "js-prev1",
        //  }}
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
          <div className="team-container">
            <div className="team-container__item">
              <img
                src={Dmitry}
                className="team-container__participant"
                alt="participant"
              />

              <div className="team-container__info">
                <h3 className="team-container__title">Владимир Харитонов</h3>

                <p className="team-container__subtitle">
                  Leader Branch Manager in St. Petersburg
                </p>
              </div>
            </div>
            <div className="team-container__item">
              <img
                src={DmitryKlimov}
                className="team-container__participant"
                alt="participant"
              />

              <div className="team-container__info">
                <h3 className="team-container__title">Дмитрий Климов</h3>

                <p className="team-container__subtitle">
                  Lead backend developer №1
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-overflow">
          <div className="team-container">
            <div className="team-container__item">
              <img
                src={Vladimir}
                className="team-container__participant"
                alt="participant"
              />

              <div className="team-container__info">
                <h3 className="team-container__title">Дмитрий Королев</h3>

                <p className="team-container__subtitle">Head of all projects</p>
              </div>
            </div>
            <div className="team-container__item">
              <img
                src={Valentin}
                className="team-container__participant"
                alt="participant"
              />

              <div className="team-container__info">
                <h3 className="team-container__title">Валентин Воробьёв</h3>

                <p className="team-container__subtitle">
                  Lead frontend developer №2
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-overflow">
          <div className="team-container">
            <div className="team-container__item">
              <img
                src={Dmitry}
                className="team-container__participant"
                alt="participant"
              />

              <div className="team-container__info">
                <h3 className="team-container__title">Владимир Харитонов</h3>

                <p className="team-container__subtitle">
                  Leader Branch Manager in St. Petersburg
                </p>
              </div>
            </div>
            <div className="team-container__item">
              <img
                src={DmitryKlimov}
                className="team-container__participant"
                alt="participant"
              />

              <div className="team-container__info">
                <h3 className="team-container__title">Дмитрий Климов</h3>

                <p className="team-container__subtitle">
                  Lead backend developer №1
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-overflow">
          <div className="team-container">
            <div className="team-container__item">
              <img
                src={Vladimir}
                className="team-container__participant"
                alt="participant"
              />

              <div className="team-container__info">
                <h3 className="team-container__title">Дмитрий Королев</h3>

                <p className="team-container__subtitle">Head of all projects</p>
              </div>
            </div>
            <div className="team-container__item">
              <img
                src={Valentin}
                className="team-container__participant"
                alt="participant"
              />

              <div className="team-container__info">
                <h3 className="team-container__title">Валентин Воробьёв</h3>

                <p className="team-container__subtitle">
                  Lead frontend developer №2
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="projects-all__buttons">
        <div
          className="projects-all__buttons-container"
        
        >
          <button
            className="projects-all__buttons-item1"
            ref={navigationPrevRef}
          />
        </div>

        <div
          className="projects-all__buttons-container "
          
        >
          <button
            className="projects-all__buttons-item2"
            ref={navigationNextRef}
          />
        </div>
      </div>
    </>
  );
}

export default SwiperJs2;
