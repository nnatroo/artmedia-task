import React from "react";
import classes from "../modules/About.module.scss";
import AboutImage from "../assets/aboutImage.png";
import Arrow from "../assets/orangeArrow.svg";
import { Slide } from "react-awesome-reveal";

const About = () => {
  return (
    <Slide>
      <div id="about" className={classes["logical-container"]}>
        <section className={classes["about-section"]}>
          <div className={classes["image-wrapper"]}>
            <div className={classes["about-image-border"]} />
            <img className={classes["about-image"]} src={AboutImage} alt="" />
          </div>

          <div className={classes["about-content"]}>
            <h3>About Company</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <button>
              See More <img src={Arrow} alt="" />
            </button>
          </div>
        </section>
      </div>
    </Slide>
  );
};

export default About;
