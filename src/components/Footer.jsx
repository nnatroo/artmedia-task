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
              <h3>Company Name</h3>
            </div>
            <div className={classes["date"]}>
              © {new Date().getFullYear()} All Rights Reserved
            </div>
          </div>

          <nav className={classes["footer-links-wrapper"]}>
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
              <ul>
                <li>
                  <a href="/">
                    <img src={InstagramLogo} alt="" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <img src={FacebookLogo} alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <form id="contact" className={classes["footer-contact"]}>
            <div className={classes["footer-contact-wrapper"]}>
              <input
                type="text"
                placeholder="Name"
                name=""
                className={classes["name"]}
              />
              <input
                type="email"
                placeholder="Email"
                name=""
                className={classes["email"]}
              />

              <div className={classes["textarea-wrapper"]}>
                <textarea
                  placeholder="Text"
                  id="text-area"
                  name=""
                  rows="7"
                  cols="50"
                />
                <a href="/">
                  Send
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
