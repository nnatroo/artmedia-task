import React from "react";
import classes from "../modules/Services.module.css";
import FirstServiceLogo from "../assets/firstServiceLogo.svg";
import SecondServiceLogo from "../assets/secondServiceLogo.svg";
import ThirdServiceLogo from "../assets/thirdServiceLogo.svg";
import { Slide } from "react-awesome-reveal";

const Services = () => {
  return (
    <Slide>
      <div className={classes["services-wrapper"]}>
        <h1>Services</h1>

        <div className={classes["services-items"]}>
          <div className={classes["col"]}>
            <img src={FirstServiceLogo} alt="" />
            <h3 className={classes["title"]}>Service Name</h3>
          </div>

          <div className={classes["col"]}>
            <img src={SecondServiceLogo} alt="" />
            <h3>Service Name</h3>
          </div>

          <div className={classes["col"]}>
            <img src={ThirdServiceLogo} alt="" />
            <h3>Service Name</h3>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default Services;
