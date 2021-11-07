import React, { createContext, useEffect, useState } from 'react';

import { firebase } from '../config/firebase';

// Context Created
export const AuthContext = createContext();

//Context Provider
const AuthContextProvider = ({ children }) => {
  const [login, setlogin] = useState(false);
  const [user, setUser] = useState('');

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setlogin(true);
      }
    });
  }, []);

  const handleLogin = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        setUser(result.user);
        console.log(result.user);
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
        alert('logged out successfully');
        setUser('');
        console.log(user);
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <AuthContext.Provider value={{ handleLogin, handleLogout, user, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
