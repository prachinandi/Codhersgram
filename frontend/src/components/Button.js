import React from "react";

const Button = ({ name, src }) => {
  return (
    <button className="profile__follow__button">
      <a href={src}>{name}</a>
    </button>
  );
};

export default Button;
