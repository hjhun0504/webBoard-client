import React from "react";
import "./Button.css";

const Button = ({ title, css }) => {
  return <button className={`button ${css}`}>{title}</button>;
};

export default Button;
