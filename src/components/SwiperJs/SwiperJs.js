import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import prostaff from "../../images/prostaff.jpg";
import britannica from "../../images/britannica.jpg";
import SwiperCore, { Navigation } from "swiper/core";

SwiperCore.use([Navigation]);

function SwiperJs({ navigationPrevRef, navigationNextRef, sliderStyle }) {
  const windowScreenWidth = window.screen.width;
  const [screenSlide, setScreenSlide] = useState(null);

  useEffect(() => {
    const screen = windowScreenWidth <= 360 ? 160 : null;
    setScreenSlide(screen);
  }, [windowScreenWidth]);

  const data = [
    {
      image: prostaff,
      name: "PROSTAFF",
      date: "2021",
    },
    {
      image: britannica,
      name: "Britannica project",
      date: "2021",
    },
    {
      image: prostaff,
      name: "PROSTAFF",
      date: "2021",
    },
    {
      image: britannica,
      name: "Britannica project",
      date: "2021",
    },
    {
      image: prostaff,
      name: "PROSTAFF",
      date: "2021",
    },
    {
      image: britannica,
      name: "Britannica project",
      date: "2021",
    },
  ];

  return (
    <>
      <Swiper
        slidesOffsetBefore={screenSlide}
        loop={true}
        spaceBetween={8}
        slidesPerView={2}
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
        className="swiper-container-projects swiper-mod"
      >
        {data.reverse().map((item, index) => {
          return (
            <SwiperSlide
              className={`${sliderStyle} swiper-overflow`}
              key={index}
            >
              <div className="projects-slider">
              <Link to="/page-404">
                <div className="projects-image">
                  <div className="projects-image__frame">
                    <img
                      alt="project"
                      src={item.image}
                      className="projects-image__item"
                    />

                    <div />
                  </div>
                </div>
                </Link>
                <div className="projects-container">
                  <div className="project-name">
                    <h3 className="project-name__title">{item.name}</h3>
                    <p className="project-name__date">{item.date}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

export default SwiperJs;
