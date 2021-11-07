import React from "react";
import Profile from "../asset/profilePic.jpg";
import Button from "../components/Button";
import HomeCard from "../components/HomeCard";
import HomeStoriesCard from "../components/HomeStoriesCard";
import HomeSuggestedUserCard from "../components/HomeSuggestedUserCard";
import "../style/Home.css";

const Home = () => {
  return (
    <div>
      <h1>Codhersgram</h1>
      <div className="home">
        <div className="home-left">
          <div
            className="home__user__image"
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "200px",
              backgroundImage: `url(${Profile})`,
            }}
          />
          <div className="profile__info">
            <div className="profile__name">Hemant Bajaj</div>
            <div className="profile__position">Senior software developer</div>
          </div>
          <Button name="View Profile" src="profile" />
          <h2>Suggested Users</h2>
          <div className="profile__user__suggestions">
            <HomeSuggestedUserCard />
            <HomeSuggestedUserCard />
            <HomeSuggestedUserCard />
            <HomeSuggestedUserCard />
            <HomeSuggestedUserCard />
          </div>
        </div>

        <div className="home__right">
          <h2>Code Stories</h2>
          <div className="home__stories">
            <HomeStoriesCard />
            <HomeStoriesCard />
            <HomeStoriesCard />
            <HomeStoriesCard />
            <HomeStoriesCard />
          </div>
          <h2>Feeds</h2>

          <div className="home__feed__posts">
            <HomeCard />
            <HomeCard />
            <HomeCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
