import React, { useState } from "react";
import classes from "../modules/BurgerMenu.module.scss";
import SearchIcon from "../assets/searchIcon.svg";
import XSymbol from "../assets/xSymbol.svg";
import "animate.css";
import BurgerMenuIcon from '../assets/menuBurger.svg';

const BurgerMenu = (props) => {
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
      {true && (
        <div onClick={burgerClickHandler} className={classes["navbar-burger-menu-wrapper"]}>
          <img src={BurgerMenuIcon} alt="" />
        </div>
      )}

      {showBurgerMenu && (
        <div
          className={`${classes["menu-wrapper"]} animate__animated animate__slideInDown`}
        >
          <img
            className={classes["close-btn"]}
            onClick={cancelHandler}
            src={XSymbol}
            alt=""
          />

          <div className={classes["menu-container"]}>
            <div className={classes["navbar-search-wrapper"]}>
              <input type="text" placeholder="Search keyword ..." />
              <img src={SearchIcon} alt="" />
            </div>

            <li>Home</li>
            <li>Services</li>
            <li>Projects</li>
            <li>About</li>
            <li>Contact</li>
          </div>
        </div>
      )}
    </>
  );
};

export default BurgerMenu;
