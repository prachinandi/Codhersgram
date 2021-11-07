import React from "react";
import Profile from "../asset/profilePic.jpg";

const HomeSuggestedUserCard = () => {
  return (
    <div className="profile__user__suggestions__card">
      <div
        className="home__user__image"
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "62.5px",
          objectFit: "contain",
          backgroundImage: `url(${Profile})`,
        }}
      />
      <div className="profile__user__suggestions__name">Hemant Bajaj</div>
    </div>
  );
};

export default HomeSuggestedUserCard;
