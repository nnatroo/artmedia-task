import React from 'react'
import classes from "../modules/Header.module.scss";

const NavbarLinks = () => {
  return (
    <nav className={classes["navbar-links"]}>
            <ul className={classes["navbar-links-wrapper"]}>
              <li className={classes["active-item"]}>
                <a href="#home">Home</a>
              </li>

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
          </nav>
  )
}

export default NavbarLinks