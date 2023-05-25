import React from "react";
import classes from "../modules/Hero.module.scss";
import layout from "../modules/Layout.module.scss";
import Arrow from "../assets/arrow.svg";
import { Fade } from "react-awesome-reveal";
import HeroImage from "../assets/hero-image.jpg";

const Hero = () => {
  return (
    <Fade>
      <div className={classes["hero-section"]}>

        <div className={`${classes["hero-image-container"]} ${layout["wide-container"]}`}>
          <img
            className={classes["hero-image"]}
            src={HeroImage}
            alt="hero-image"
          />
        </div>

        <div className={`${classes["container"]} ${layout["container"]}`}>
          <div className={classes["text-wrapper"]}>
            <h1>Company’s First Service Title</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </p>
            <button>
              See More <img src={Arrow} alt="" />
            </button>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Hero;
