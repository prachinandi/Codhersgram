import React from "react";
import Login from "../components/Login";
import "../style/LoginPage.css";
import image from "../asset/login__image.png";
import GoogleImage from "../asset/google.png";

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="login__card">
        <div className="login__card__image">
          <img src={image} alt="" srcset="" />
        </div>
        <div className="login__card__form">
          <h1>codhersgram</h1>
          <form action="">
            <input type="text" placeholder="Username" />
            <br />
            <input type="password" placeholder="Password" />
          </form>
          <button className="btn">Register</button>
          <Login image={GoogleImage} />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
