import React from "react";
import classes from "../modules/News.module.css";
import LeftArrow from "../assets/leftArrow.svg";
import RightArrow from "../assets/rightArrow.svg";
import NewsSwiper from "./NewsSwiper";
import { Fade } from "react-awesome-reveal";

const News = () => {
  return (
    <Fade>
      <div className={classes["news-wrapper"]}>
        <div className={classes["logical-container"]}>
          <div className={classes["top-bar"]}>
            <h1>News</h1>
            <div className={classes["arrows-wrapper"]}>
              <img
                className={classes["swiper-button-prev"]}
                src={LeftArrow}
                alt="left-arrow"
              />
              <img
                className={classes["swiper-button-next"]}
                src={RightArrow}
                alt="right-arrow"
              />
            </div>
          </div>

          <NewsSwiper />
        </div>
      </div>
    </Fade>
  );
};

export default News;
