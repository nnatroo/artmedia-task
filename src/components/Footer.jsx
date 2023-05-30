import React from "react";
import classes from "../modules/Footer.module.scss";
import layout from "../modules/Layout.module.scss";
import FooterBrand from "../assets/footerBrand.svg";
import InstagramLogo from "../assets/instagramLogo.svg";
import FacebookLogo from "../assets/facebookLogo.png";
import { Fade } from "react-awesome-reveal";

const Footer = () => {
  return (
    // <Fade  >
      <section className={classes["footer"]}>
        <div className={`${classes["container"]} ${layout["container"]}`}>
          <div className={classes["footer-content"]}>
            <div className={classes["footer-brand-wrapper"]}>
              <div className={classes["footer-brand"]}>
                <img src={FooterBrand} alt="" />
                <h2>Company Name</h2>
              </div>
              <p>© {new Date().getFullYear()} All Rights Reserved</p>
            </div>

            <div className={classes["footer-links-wrapper"]}>
              <ul className={classes["footer-links"]}>
                <li>
                  <a href="#services">Services</a>
                </li>

                <li>
                  <a href="#projects">Projects</a>
                </li>

                <li>
                  <a href="#about">About</a>
                </li>

                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
              <div className={classes["footer-links-socials"]}>
                <img src={InstagramLogo} alt="" />
                <img src={FacebookLogo} alt="" />
              </div>
            </div>

            <div id="contact" className={classes["footer-contact"]}>
              <div className={classes["contact-top-row"]}>
                <input type="text" placeholder="Name" name="" id="" />
                <input type="email" placeholder="Email" name="" id="" />
              </div>
              <div className={classes["contact-bottom-row"]}>
                <textarea
                  placeholder="Text"
                  id="text-area"
                  name=""
                  rows="7"
                  cols="50"
                ></textarea>

                <a href="/">
                  <button>Send</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    // </Fade>
  );
};

export default Footer;
