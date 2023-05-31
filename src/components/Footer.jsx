import React from "react";
import classes from "../modules/Footer.module.scss";
import layout from "../modules/Layout.module.scss";
import FooterLogo from "../assets/footer-logo.svg";
import InstagramLogo from "../assets/instagram-logo.svg";
import FacebookLogo from "../assets/facebook-logo.png";

const Footer = () => {
  return (
    <footer id="footer" className={classes["footer"]}>
      <div className={`${classes["container"]} ${layout["container"]}`}>
        <div className={classes["footer-content"]}>
          <div className={classes["footer-logo-wrapper"]}>
            <div className={classes["footer-logo"]}>
              <img src={FooterLogo} alt="" />
              <h2>Company Name</h2>
            </div>
            <div>
              <p>© {new Date().getFullYear()} All Rights Reserved</p>
            </div>
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

          <form id="contact" className={classes["footer-contact"]}>
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
              />
              <a href="/">
                <span>Send</span>
              </a>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
