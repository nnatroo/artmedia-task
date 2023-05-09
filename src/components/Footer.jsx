import React from "react";
import classes from "../modules/Footer.module.css";
import FooterBrand from "../assets/footerBrand.svg";
import InstagramLogo from "../assets/instagramLogo.svg";
import FacebookLogo from "../assets/facebookLogo.png";

const Footer = () => {
  return (
    <section className={classes["footer"]}>
      <div className={classes["logical-container"]}>
        <div className={classes["footer-content"]}>
          <div className={classes["footer-brand-wrapper"]}>
            <div className={classes["footer-brand"]}>
              <img src={FooterBrand} alt="" />
              <h1>Company Name</h1>
            </div>
            <p>© 2023 All Rights Reserved</p>
          </div>

          <div className={classes["footer-links-wrapper"]}>
            <div className={classes["footer-links"]}>
              <li>Services</li>
              <li>Projects</li>
              <li>About</li>
              <li>Contact</li>
            </div>
            <div className={classes["footer-links-socials"]}>
              <img src={InstagramLogo} alt="" />
              <img src={FacebookLogo} alt="" />
            </div>
          </div>

          <div className={classes["footer-contact"]}>
            <div className={classes["contact-top-row"]}>
              <input type="text" placeholder="Name" name="" id="" />
              <input type="email" placeholder="Email" name="" id="" />
            </div>
            <div className={classes["contact-bottom-row"]}>
              <textarea placeholder="Text"  id="text-area" name="" rows="7" cols="50"></textarea>
              <button>Send</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
