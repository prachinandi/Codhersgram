import React from "react";
import "../style/profile.css";
import Profile from "../asset/profilePic.jpg";
import Project from "../asset/project.jpg";
import { Link } from "react-router-dom";

function profiles() {
  return (
    <div className="profile-main">
      <h1 className="heading">Codhersgram</h1>
      <div className="profile">
        <div
          className="profile__image"
          style={{ backgroundImage: `url(${Profile})` }}
        ></div>
        <div>
          <div className="profile__info">
            <div className="profile__name">Hemant Bajaj</div>
            <div className="profile__position">Senior software developer</div>
          </div>
          <div className="profile__details">
            <div className="profile__details__followers">
              <div>
                <div>890</div>
                <div>followers</div>
              </div>
              <div>
                <div>890</div>
                <div>followers</div>
              </div>
            </div>
            <div className="profile__follow__button">Follow</div>
          </div>
        </div>
      </div>

      <div className="profile__post">
        <div className="profile__post__card__container">
          <div className="profile__post__card">
            <div className="profile__post__image">
              <img src={Profile} alt="" srcset="" />
            </div>
            <div className="profile__post__desc">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil ex
              sit quisqua Lorem ipsum dolor sit amet consectetur.
            </div>
          </div>
          <div className="profile__post__card">
            <div className="profile__post__image">
              <img src={Profile} alt="" srcset="" />
            </div>
            <div className="profile__post__desc">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil ex
              sit quisqua Lorem ipsum dolor sit amet consectetur.
            </div>
          </div>
          <div className="profile__post__card">
            <div className="profile__post__image">
              <img src={Profile} alt="" srcset="" />
            </div>
            <div className="profile__post__desc">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil ex
              sit quisqua Lorem ipsum dolor sit amet consectetur.
            </div>
          </div>
          <div className="profile__post__card">
            <div className="profile__post__image">
              <img src={Profile} alt="" srcset="" />
            </div>
            <div className="profile__post__desc">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil ex
              sit quisqua Lorem ipsum dolor sit amet consectetur.
            </div>
          </div>
          <div className="profile__post__card">
            <div className="profile__post__image">
              <img src={Profile} alt="" srcset="" />
            </div>
            <div className="profile__post__desc">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil ex
              sit quisqua Lorem ipsum dolor sit amet consectetur.
            </div>
          </div>
          <div className="profile__post__card">
            <div className="profile__post__image">
              <img src={Profile} alt="" srcset="" />
            </div>
            <div className="profile__post__desc">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil ex
              sit quisqua Lorem ipsum dolor sit amet consectetur.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default profiles;
