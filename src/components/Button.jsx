import React from "react";
import "../styles/Button.scss";
import classNames from "classnames";
const Button = ({ children, className, ...props }) => {
  const buttonClassNames = classNames("styled-button", className);
  const handleClick = (event) => {
    event.preventDefault();
    props.onClick();
  };
  return (
    <button onClick={handleClick} className={buttonClassNames}>
      {children}
    </button>
  );
};

export default Button;
