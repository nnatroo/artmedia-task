import React, { useState } from "react";
import classes from "../modules/Header.module.css";
import CompanyLogo from "../assets/companyLogo.svg";
import SearchIcon from "../assets/searchIcon.svg";
import BurgerMenuIcon from "../assets/menuBurger.svg";
import BurgerMenu from "./BurgerMenu";

const Header = () => {
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);

  const burgerClickHandler = () => {
    setShowBurgerMenu(!showBurgerMenu);
    document.body.style.overflow = "hidden";
  };

  const cancelHandler = () => {
    setShowBurgerMenu(false);
    document.body.style.overflow = "visible";
  };

  return (
    <>
      {showBurgerMenu && <BurgerMenu onCancel={cancelHandler} />}
      <section id="home" className={classes["header"]}>
        <div className={classes["navbar-wrapper"]}>
          <div className={classes["navbar-brand"]}>
            <img src={CompanyLogo} alt="CompanyLogo" />
            <h3>
              COMPANY <br /> NAME
            </h3>
          </div>

          <nav className={classes["navbar-links"]}>
            <a href="#home">
              <li>Home</li>
            </a>
            <a href="#services">
              <li>Services</li>
            </a>
            <a href="#projects">
              <li>Projects</li>
            </a>
            <a href="#about">
              <li>About</li>
            </a>
            <a href="#contact">
              <li>Contact</li>
            </a>
          </nav>

          <div className={classes["navbar-search-wrapper"]}>
            <input type="text" placeholder="Search keyword ..." />
            <img src={SearchIcon} alt="" />
          </div>

          <div className={classes["navbar-burger-menu-wrapper"]}>
            <img onClick={burgerClickHandler} src={BurgerMenuIcon} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
