import React, { useRef } from "react";
import "./SwiperTeam.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";

import SwiperCore, { Navigation } from "swiper/core";
import Vladimir from "../images/Vladimir.jpg";
import Dmitry from "../images/Dmitry.jpg";
import DmitryKlimov from "../images/DmitryKlimov.jpg";
import Valentin from "../images/Valentin.jpg";

SwiperCore.use([Navigation]);

function SwiperTeam() {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const screenSlide = window.screen.width <= 1420 ? 1 : 2;
  const images = [...document.querySelectorAll(".data-img")];

  // const data = [
  //   {
  //     title: "Владимир Харитонов",
  //     subtitle: "Leader Branch Manager in St. Petersburg",
  //     image: Dmitry,
    
  //   },
  //   {
  //     title: "Дмитрий Климов",
  //     subtitle: "Lead backend developer №1",
  //     image: DmitryKlimov,
    
  //   },
  //   {
  //     title: "Дмитрий Королев",
  //     subtitle: "Lead backend developer №1",
  //     image: Vladimir,
    
  //   },
  //   {
  //     title: "Валентин Воробьёв",
  //     subtitle: "Lead frontend developer №2",
  //     image: Valentin,
    
  //   },
   
  // ];

  const handleMouseMoveButtons = (e) => {
    const { clientX, clientY } = e;
    images.forEach((i) => {
      let hw = i.clientWidth / 2;
      let hh = i.clientHeight / 2;
      let x = i.offsetLeft + hw - clientX;
      let y = i.offsetTop + hh - clientY;
      if (Math.abs(x) > hw || Math.abs(y) > hh) return;
      i.style.backgroundPosition = 50 - x / 5 + "% " + (50 - y / 2) + "%";
    });
  };

  const back = () => {
    images.forEach((i) => {
      i.style.backgroundPosition = 50 + "% " + 50 + "%";
    });
  };

  return (
    <>
      <Swiper
        loop={true}
        slidesPerView={screenSlide}
        spaceBetween={20}
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
        className="swiper-container swiper-team"
      >
        <SwiperSlide className="swiper-overflow">
          <div className="team-container">
            <div className="team-container__item">
            <img className="team-container__image" src={Vladimir} alt="participant" />

              <div className="team-container__info">
                <h3 className="team-container__title">Владимир Харитонов</h3>

                <p className="team-container__subtitle">
                  Leader Branch Manager in St. Petersburg
                </p>
              </div>
            </div>
            <div className="team-container__item">
              <img className="team-container__image" src={DmitryKlimov} alt="participant" />

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
            <img className="team-container__image" src={Dmitry} alt="participant" />
            

              <div className="team-container__info">
                <h3 className="team-container__title">Дмитрий Королев</h3>

                <p className="team-container__subtitle">Head of all projects</p>
              </div>
            </div>
            <div className="team-container__item">
              <img className="team-container__image" src={Valentin} alt="participant" />

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
            
              <img className="team-container__image" src={Vladimir} alt="participant" />
              <div className="team-container__info">
                <h3 className="team-container__title">Владимир Харитонов</h3>

                <p className="team-container__subtitle">
                  Leader Branch Manager in St. Petersburg
                </p>
              </div>
            </div>
            <div className="team-container__item">
              <img className="team-container__image" src={DmitryKlimov} alt="participant" />

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
            <img className="team-container__image" src={Dmitry} alt="participant" />
            

              <div className="team-container__info">
                <h3 className="team-container__title">Дмитрий Королев</h3>

                <p className="team-container__subtitle">Head of all projects</p>
              </div>
            </div>
            <div className="team-container__item">
              <img className="team-container__image" src={Valentin} alt="participant" />

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
   
  <div className="projects-all__buttons team-buttons">
          <div
            ref={navigationPrevRef}
            className="projects-all__buttons-left data-img team-buttons__right "
            onMouseMove={(e) => handleMouseMoveButtons(e)}
            onMouseLeave={back}
          />
          <div
            className="team-buttons__left projects-all__buttons-right data-img"
            onMouseMove={(e) => handleMouseMoveButtons(e)}
            onMouseLeave={back}
            ref={navigationNextRef}
          />
        </div> 

    </>
  );
}

export default SwiperTeam;
