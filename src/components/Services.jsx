import React from "react";
import classes from "../modules/Services.module.scss";
import layout from "../modules/Layout.module.scss";
import FirstServiceLogo from "../assets/firstServiceLogo.svg";
import SecondServiceLogo from "../assets/secondServiceLogo.svg";
import ThirdServiceLogo from "../assets/thirdServiceLogo.svg";
import { Slide } from "react-awesome-reveal";
import Tilt from "react-parallax-tilt";

const Services = () => {
  return (
    <Slide>
      <div id="services" className={`${classes["services-wrapper"]} ${layout["container"]}`}>
        <h1>Services</h1>

        <div className={classes["services-items"]}>
          <div className={classes["col"]}>
            <Tilt>
              <img src={FirstServiceLogo} alt="" />
            </Tilt>
            <h3 className={classes["title"]}>Service Name</h3>
          </div>

          <div className={classes["col"]}>
            <Tilt>
              <img src={SecondServiceLogo} alt="" />
            </Tilt>
            <h3>Service Name</h3>
          </div>

          <div className={classes["col"]}>
            <Tilt>
              <img src={ThirdServiceLogo} alt="" />
            </Tilt>
            <h3>Service Name</h3>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default Services;
