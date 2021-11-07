import React from "react";
import Profile from "../asset/profilePic.jpg";

const HomeCard = () => {
  return (
    <div className="home__feed__post__card">
      <div className="home__feed__post__card__user">
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
        <div className="profile__user__suggestions__name">Hemi Bajaj</div>
      </div>
      <div className="home__feed__post__card__image">
        <img src={Profile} alt="" />
      </div>
      <div className="home__feed__post__card__description">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat natus
        nobis sint. Corporis est dolores unde modi quis enim,Lorem ipsum dolor,
        sit amet consectetur adipisicing elit. Pariatur ad vel quam qui esse
        consequatur in incidunt porro voluptatem, sequi expedita itaque soluta
        unde optio dolorum magni odio? Repudiandae architecto enim distinctio
        similique iste molestiae aliquam velit sequi ullam ea.
      </div>
    </div>
  );
};

export default HomeCard;
