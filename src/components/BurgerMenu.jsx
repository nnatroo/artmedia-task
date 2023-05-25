import React, { useState } from "react";
import classes from "../modules/BurgerMenu.module.scss";
import SearchIcon from "../assets/searchIcon.svg";
import "animate.css";
import Hamburger from "hamburger-react";
import NavbarLinks from "../UI/NavbarLinks";

const BurgerMenu = (props) => {
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);
  const [menuClose, setMenuClose] = useState(false);

  const burgerClickHandler = () => {
    if (showBurgerMenu === false) {
      setShowBurgerMenu(true);

    }
    if (showBurgerMenu === true) {
      setMenuClose(true);
      setTimeout(() => {
        setShowBurgerMenu(false);
        setMenuClose(false);
      }, 0);
    }
  };

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
          className={`${classes["menu-wrapper"]} ${showBurgerMenu && classes["menu-open"]}`}
        >
          <div className={classes["menu-container"]}>
            <div className={classes["navbar-search-wrapper"]}>
              <input type="text" placeholder="Search keyword ..." />
              <button>
                <img src={SearchIcon} alt="" />
              </button>
            </div>

            <div className={classes["navbar-link-wrapper"]}>
              <NavbarLinks />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BurgerMenu;
