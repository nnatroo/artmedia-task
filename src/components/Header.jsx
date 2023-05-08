import React from "react";
import classes from '../modules/Header.module.css'
import CompanyLogo from '../assets/companyLogo.svg'
import SearchIcon from '../assets/searchIcon.svg'

const Header = () => {
  return (
    <>
      <section className={classes['header']}>
        <div className={classes['navbar-wrapper']}>
          <div className={classes["navbar-brand"]}>
            <img src={CompanyLogo} alt="CompanyLogo" />
            <h3>
              COMPANY <br /> NAME
            </h3>
          </div>

          <nav className={classes["navbar-links"]}>
            <li>Home</li>
            <li>Services</li>
            <li>Projects</li>
            <li>About</li>
            <li>Contact</li>
          </nav>

          <div className={classes["navbar-search-wrapper"]}>
            <input type="text" placeholder="Search keyword ..." />
            <img src={SearchIcon} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
