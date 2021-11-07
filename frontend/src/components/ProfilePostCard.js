import React from "react";
import Profile from "../asset/profilePic.jpg";

const ProfilePostCard = () => {
  return (
    <div className="profile__post__card">
      <div className="profile__post__image">
        <img src={Profile} alt="" srcset="" />
      </div>
      <div className="profile__post__desc">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil ex sit
        quisqua Lorem ipsum dolor sit amet consectetur.
      </div>
    </div>
  );
};

export default ProfilePostCard;
