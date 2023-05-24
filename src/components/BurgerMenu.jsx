import React, { useState } from "react";
import classes from "../modules/BurgerMenu.module.scss";
import SearchIcon from "../assets/searchIcon.svg";
import "animate.css";
import Hamburger from "hamburger-react";

const BurgerMenu = (props) => {
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);

  const burgerClickHandler = () => {
    setButtonClicked(!buttonClicked);
    setTimeout(() => {
      setShowBurgerMenu(!showBurgerMenu);
    }, 200);

    document.body.style.overflow = "hidden";
  };

  // const cancelHandler = () => {
  //   setShowBurgerMenu(false);
  //   document.body.style.overflow = "visible";
  // };

  return (
    <>
      {true && (
        <div
          onClick={burgerClickHandler}
          className={`${classes["navbar-burger-menu-wrapper"]} ${
            showBurgerMenu && classes["white-burger"]
          }`}
        >
          <Hamburger />
        </div>
      )}

      {showBurgerMenu && (
        <div
          className={`${classes["menu-wrapper"]} animate__animated ${
            buttonClicked ? "animate__slideInDown" : "animate__slideOutUp"
          } animate__slideInDown animate__faster`}
        >
          {/* <img
            className={classes["close-btn"]}  
            onClick={cancelHandler}
            src={XSymbol}
            alt=""
          /> */}

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
