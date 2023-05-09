import React, { useEffect, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import classes from "../modules/NewsSwiper.module.css";
import Arrow from "../assets/arrow.svg";
import Image1 from "../assets/image1.png";
import Image2 from "../assets/image2.png";
import Image3 from "../assets/image3.png";
import Image4 from "../assets/image4.png";
import CardBackground from "../assets/cardBackground.png";
import LeftArrow from "../assets/leftArrow.svg";
import RightArrow from "../assets/rightArrow.svg";

const NewsSwiper = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // useEffect(() => {
  //   document.

  // }, [activeIndex])

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
  ];

  return (
    <div className={classes["swiper-wrapper"]}>
      <div className={classes["arrows-wrapper"]}>
        <img
          className="swiper-button-prev"
          src={LeftArrow}
          alt="left-arrow"
        />
        <img
          className="swiper-button-next"
          src={RightArrow}
          alt="right-arrow"
        />
      </div>

      <Swiper
        className={classes["swiper"]}
        modules={[Navigation, Pagination, A11y]}
        // spaceBetween={-900}
        slidesPerView={3}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={(e) => {
          console.log(e.activeIndex);
          setActiveIndex(e.activeIndex);
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        // rewind={true}
      >
        {swiperCardData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className={classes["swiper-card"]}>
              <div className={classes["image-container"]}>
                <img
                  className={classes["swiper-card-back"]}
                  src={CardBackground}
                  alt=""
                />
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
  );
};

export default NewsSwiper;
