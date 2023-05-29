import React from "react";
import classes from "../modules/Services.module.scss";
import layout from "../modules/Layout.module.scss";
import FirstServiceLogo from "../assets/first-service-logo.png";
import SecondServiceLogo from "../assets/second-service-logo.png";
import ThirdServiceLogo from "../assets/third-service-logo.png";
import { Slide } from "react-awesome-reveal";
import Tilt from "react-parallax-tilt";

const Services = () => {
  return (
    <div
      id="services"
      className={`${classes["services-wrapper"]} ${layout["container"]}`}
    >
      <h2>Services</h2>

      <div className={`${classes["services-items"]}`}>

        <div className={classes["col"]}>
          <a href="/">
            <figure>
              <img src={FirstServiceLogo} alt="" />
            </figure>
          </a>

          <h3 className={classes["title"]}>Service Name</h3>
        </div>

        <div className={classes["col"]}>
          <a href="/">
            <figure>
              <img src={SecondServiceLogo} alt="" />
            </figure>
          </a>

          <h3>Service Name</h3>
        </div>

        <div className={classes["col"]}>
          <a href="/">
            <figure>
              <img src={ThirdServiceLogo} alt="" />
            </figure>
          </a>

          <h3>Service Name</h3>
        </div>

      </div>
    </div>
  );
};

export default Services;
