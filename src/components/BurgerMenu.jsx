import React from "react";
import classes from "../modules/BurgerMenu.module.css";
import SearchIcon from "../assets/searchIcon.svg";
import XSymbol from "../assets/xSymbol.svg";
import 'animate.css';

const BurgerMenu = (props) => {
  return (
    <>
      <div className={`${classes["menu-wrapper"]} animate__animated animate__slideInDown`}>

        <img onClick={props.onCancel} src={XSymbol} alt="" />

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
    </>
  );
};

export default BurgerMenu;
