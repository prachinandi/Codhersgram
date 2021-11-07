import React, { useState, useEffect } from "react";
import { firebase } from "../config/firebase";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ image }) => {
  const [user, setUser] = useState("");
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    user ? setLogin(true) : setLogin(false);
  }, [user, login]);

  const handleLogin = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        setUser(result.user);
        console.log(result.user);
      })
      .then(() => {
        navigate("/profile");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        alert("logged out successfully");
        setUser("");
        console.log(user);
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div>
      {login ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button
          style={{
            width: "250px",
            height: "50px",
            background:
              "linear-gradient(79.61deg, #F21162 -18.09%, #0D08FF 139.52%)",
            borderRadius: "20px",
            color: "white",
          }}
          onClick={handleLogin}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                display: "inline-block",
                padding: " 0 8px ",
                paddingTop: "2px",
                textAlign: "center",
              }}
            >
              <img
                style={{ height: "20px", margin: "auto 0" }}
                src={image}
                alt=""
                srcset=""
              />
            </span>
            <span>Login with Google</span>
          </div>
        </button>
      )}
    </div>
  );
};

export default Login;
