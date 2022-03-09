import React from "react";

const Button = ({ type, text }) => {
    return (
       <button className={`button button--${type}`}>{text}</button>
    )
}

Button.defaultProps = {
    type: "primary",
    text: "Shop"
}

export default Button;