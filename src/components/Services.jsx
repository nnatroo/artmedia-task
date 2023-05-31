import React from "react";
import classes from "../modules/Services.module.scss";
import layout from "../modules/Layout.module.scss";
import FirstServiceLogo from "../assets/service-logo-1.png";
import SecondServiceLogo from "../assets/service-logo-2.png";
import ThirdServiceLogo from "../assets/service-logo-3.png";

const Services = () => {
  return (
      <section id="services" className={`${classes["services-wrapper"]} ${layout["container"]}`}>
        <h2>Services</h2>
        <div className={`${classes["services-items"]}`}>
          <div className={classes["col"]}>
            <div className={classes["col-content"]} href="/">
              <figure>
                <a href="/">
                  <img src={FirstServiceLogo} alt="" />
                </a>
              </figure>
            </div>

            <h3 className={classes["title"]}>Service Name</h3>
          </div>

          <div className={classes["col"]}>
            <div className={classes["col-content"]} href="/">
              <figure>
                <a href="/">
                  <img src={SecondServiceLogo} alt="" />
                </a>
              </figure>
            </div>

            <h3>Service Name</h3>
          </div>

          <div className={classes["col"]}>
            <div className={classes["col-content"]} href="/">
              <figure>
                <a href="/">
                  <img src={ThirdServiceLogo} alt="" />
                </a>
              </figure>
            </div>

            <h3>Service Name</h3>
          </div>
        </div>
      </section>
  );
};

export default Services;
