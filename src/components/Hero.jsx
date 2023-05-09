import React from "react";
import classes from "../modules/Hero.module.css";
import Arrow from "../assets/arrow.svg";
import { Fade } from "react-awesome-reveal";

const Hero = () => {
  return (
    <Fade>
      <div className={classes["hero-section"]}>
        <div className={classes["hero-content"]}>
          <div className={classes["hero-logical-container"]}>
            <div className={classes["hero-text-wrapper"]}>
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
      </div>
    </Fade>
  );
};

export default Hero;
