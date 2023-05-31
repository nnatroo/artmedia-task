import React from "react";
import classes from "../modules/Button.module.scss";
import Arrow from "../assets/arrow.svg";
import OrangeArrow from "../assets/orange-arrow.svg";

const Button = ({ label, primary, secondary, disabled, onClick }) => {
  const buttonClass = primary
    ? "primary-button"
    : secondary
    ? "secondary-button"
    : disabled
    ? "disabled"
    : "";

  return (
    <a
      href="/"
      className={`${classes["btn"]} ${classes[buttonClass]}`}
      onClick={onClick}
    >
      <span>{label}</span>
      <img src={primary ? Arrow : OrangeArrow} alt="" />
    </a>
  );
};


export default Button;
