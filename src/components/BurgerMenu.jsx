import React, { useState } from "react";
import ReactDOM from "react-dom";
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
      {ReactDOM.createPortal(
        <>
          <div
            onClick={burgerClickHandler}
            className={`${classes["navbar-burger-menu-wrapper"]} ${
              toggleBurgerMenu && classes["white-burger"]
            }`}
          >
            <Hamburger />
          </div>
          <div
            className={`${classes["menu-wrapper"]} ${
              toggleBurgerMenu && classes["open"]
            }`}
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
        </>,
        document.getElementById("modal-root")
      )}
    </>
  );
};

export default BurgerMenu;
