import React from "react";
import classes from "../modules/About.module.scss";
import layout from "../modules/Layout.module.scss";
import AboutImage from "../assets/about-image.jpg";
import Button from "../UI/Button";

const About = () => {
  return (
    <section
      id="about"
      className={`${classes["container"]} ${layout["container"]}`}
    >
      <figure className={classes["image-wrapper"]}>
        <img className={classes["about-image"]} src={AboutImage} alt="" />
      </figure>

      <div className={classes["about-content"]}>
        <h3>About Company</h3>
        <div className={classes["text"]}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <Button label={"See More"} secondary />
        </div>
      </div>
    </section>
  );
};

export default About;
