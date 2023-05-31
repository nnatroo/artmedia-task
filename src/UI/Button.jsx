import React from "react";
import classes from "../modules/Button.module.scss";
import Arrow from "../assets/arrow.svg";
import OrangeArrow from "../assets/orangeArrow.svg";

const Button = ({ label, primary, secondary, onClick }) => {
  const buttonClass = primary
    ? "primary-button"
    : secondary
    ? "secondary-button"
    : "";

  return (
    <button className={classes[buttonClass]} onClick={onClick}>
      <span>{label}</span>
      <img src={primary ? Arrow :  OrangeArrow} alt="" />
    </button>
  );
};

export default Button;
