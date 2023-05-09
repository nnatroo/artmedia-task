import React, { useEffect, useRef, useState } from "react";
import classes from "../modules/News.module.css";
import LeftArrow from "../assets/leftArrow.svg";
import RightArrow from "../assets/rightArrow.svg";
import { Fade } from "react-awesome-reveal";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Arrow from "../assets/arrow.svg";
import Image1 from "../assets/image1.png";
import Image2 from "../assets/image2.png";
import Image3 from "../assets/image3.png";
import Image4 from "../assets/image4.png";
import CardBackground from "../assets/cardBackground.png";

const News = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const swiperRef = useRef();

  const breakpoints = {
    300: {
      spaceBetween: 400,
      slidesPerView: 1,
    },
    768: {
      spaceBetween: 400,
      slidesPerView: 2,
    },
    868: {
      spaceBetween: 400,
      slidesPerView: 2,
    },
    968: {
      spaceBetween: 400,
      slidesPerView: 2,
    },
    1068: {
      spaceBetween: 400,
      slidesPerView: 2,
    },
    1168: {
      spaceBetween: 400,
      slidesPerView: 2,
    },
    1268: {
      spaceBetween: 400,
      slidesPerView: 3,
    },
    1368: {
      spaceBetween: 300,
    },
    1440: {
      spaceBetween: 300,
    },
    1533: {
      spaceBetween: 100,
    },
    1630: {
      spaceBetween: -100,
    },
    1730: {
      spaceBetween: -100,
    },
    1830: {
      spaceBetween: -300,
    },
    1910: {
      spaceBetween: -300,
    },
  };

  const slideChangeHandler = (swiper) => {
    setActiveSlide(swiper.activeIndex);
    console.log(swiper.activeIndex);
  };

  const swiperCardData = [
    {
      heading: "There are many variations of passages",
      date: "22 April 2023",
      imageUrl: Image1,
    },
    {
      heading: "The point of using Lorem Ipsum",
      date: "20 April 2023",
      imageUrl: Image2,
    },
    {
      heading: "I must explain to you how all this mistaken idea",
      date: "19 April 2023",
      imageUrl: Image3,
    },
    {
      heading: "On the other hand, we denounce with righteous indignation",
      date: "15 April 2023",
      imageUrl: Image4,
    },
    {
      heading: "There are many variations of passages",
      date: "22 April 2023",
      imageUrl: Image1,
    },
    {
      heading: "The point of using Lorem Ipsum",
      date: "20 April 2023",
      imageUrl: Image2,
    },
    {
      heading: "I must explain to you how all this mistaken idea",
      date: "19 April 2023",
      imageUrl: Image3,
    },
  ];

  return (
    <Fade>
      <div id="projects" className={classes["news-wrapper"]}>
        <div className={classes["logical-container"]}>
          <div className={classes["top-bar"]}>
            <h1>News</h1>
            <div className={classes["arrows-wrapper"]}>
              <img
                className={`swipper-prev-button ${classes["swiper-button-prev"]}`}
                src={RightArrow}
                alt="left-arrow"
              />

              <img
                className={`swipper-next-button ${classes["swiper-button-next"]}`}
                src={RightArrow}
                alt="right-arrow"
              />
            </div>
          </div>

          <div className={classes["swiper"]}>
            <Swiper
              className={classes["swiper-wrapper"]}
              ref={swiperRef}
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={-110}
              slidesPerView={3}
              breakpoints={breakpoints}
              navigation={{
                prevEl: ".swipper-prev-button",
                nextEl: ".swipper-next-button",
              }}
              onSlideChange={slideChangeHandler}
              rewind={true}
            >
              {swiperCardData.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className={`${classes["swiper-card"]}`}>
                    <div className={classes["image-container"]}>
                      <img
                        className={classes["swiper-card-img"]}
                        src={item.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className={classes["swiper-card-content"]}>
                      <h3>{item.heading}</h3>
                      <p>{item.date}</p>
                      <button>
                        See More <img src={Arrow} alt="" />
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default News;
