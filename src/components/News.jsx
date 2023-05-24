import classes from "../modules/News.module.scss";
import layout from "../modules/Layout.module.scss";
import RightArrow from "../assets/rightArrow.svg";
import { Fade } from "react-awesome-reveal";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Arrow from "../assets/arrow.svg";
import Image1 from "../assets/image1.png";
import Image2 from "../assets/image2.png";
import Image3 from "../assets/image3.png";
import Image4 from "../assets/image4.png";
import { useState } from "react";

const News = () => {
  const [activeSlide, setActiveSlide] = useState(0);

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

  const swiperBreakpoints = {
    // 240: {
    //   spaceBetween: 500,
    //   slidesPerView: 1,
    // },
    // 320: { 
    //   spaceBetween: 400,
    //   slidesPerView: 1,
    // },
    // 768: {
    //   spaceBetween: 300,
    //   slidesPerView: 2,
    // },
    // 868: {
    //   spaceBetween: 300,
    //   slidesPerView: 2,
    // },
    // 968: {
    //   spaceBetween: 400,
    //   slidesPerView: 3,
    // },
    // 1068: {
    //   spaceBetween: 400,
    //   slidesPerView: 3,
    // },
    // 1168: {
    //   spaceBetween: 400,
    //   slidesPerView: 3,
    // },
    // 1268: {
    //   spaceBetween: 400,
    //   slidesPerView: 3,
    // },
    // 1368: {
    //   spaceBetween: 300,
    // },
    // 1440: {
    //   spaceBetween: 300,
    // },
    1568: {
      spaceBetween: 100,
      slidesPerView: 5, 
    },
    1500: {
      spaceBetween: 400,
      slidesPerView: 6,
    },
    1600: {
      spaceBetween: -234,
    },
    1700: {
      spaceBetween: -294,
    },
    1800: {
      spaceBetween: -320,
    },
    1900: {
      spaceBetween: -360,
    },
  };

  return (
    <Fade>
      <div id="projects" className={classes["news-wrapper"]}>
        <div className={`${classes["container"]} ${layout["container"]}`}>
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
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              rewind={true}
              onSlideChange={(swiper) => {
                setActiveSlide(swiper.activeIndex);
                console.log(swiper.activeIndex);
              }}
              // onSwiper={(swiper) => console.log(swiper)}
              spaceBetween={-110}
              slidesPerView={3}
              breakpoints={swiperBreakpoints}
              navigation={{
                prevEl: ".swipper-prev-button",
                nextEl: ".swipper-next-button",
              }}
            >
              {swiperCardData.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className={`${classes["swiper-card"]}`}>
                    <div
                      className={`${classes["image-container"]} ${
                        activeSlide == index && classes["active"]
                      }`}
                    >
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
