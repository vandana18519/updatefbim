import React from "react";
import "../Style/Button.css";

const STYLES = ["btn--primary", "btn--outline", "btn--test"];

const SIZES = ["btn--medium", "btn--large"];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  url = "",
}) => {
  
  return (
      <button className={`btn `} onClick={onClick} type={type}>
        {children}
      </button>
  );
};
