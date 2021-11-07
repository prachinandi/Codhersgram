import React from "react";
import Profile from "../asset/profilePic.jpg";

const HomeStoriesCard = () => {
  return (
    <div
      className="home__stories__image"
      style={{
        width: "100px",
        height: "100px",
        borderRadius: "250px",
        backgroundImage: `url(${Profile})`,
      }}
    />
  );
};

export default HomeStoriesCard;
