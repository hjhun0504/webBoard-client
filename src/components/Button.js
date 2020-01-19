import React from "react";
import "./Button.css";

const Button = ({ title, css, onClick }) => {
  return (
    <button className={`button ${css}`} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
