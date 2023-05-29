import React, { useState } from "react";
import classes from "../modules/BurgerMenu.module.scss";
import SearchIcon from "../assets/searchIcon.svg";
import "animate.css";
import Hamburger from "hamburger-react";
import NavbarLinks from "../UI/NavbarLinks";

const BurgerMenu = (props) => {
  const [toggleBurgerMenu, setToggleBurgerMenu] = useState(false);

  const burgerClickHandler = () => {
    setToggleBurgerMenu(!toggleBurgerMenu);
  };

  return (
    <>
      {true && (
        <div
          onClick={burgerClickHandler}
          className={`
          ${classes["navbar-burger-menu-wrapper"]}
          ${toggleBurgerMenu && classes["white-burger"]}
          `}>
          <Hamburger/>
        </div>
      )}

      {true && (

        <div
      className={`${classes["menu-wrapper"]} ${toggleBurgerMenu && classes["open"]}`}
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
