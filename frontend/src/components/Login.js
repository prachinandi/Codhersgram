import React, { useState, useEffect, useContext } from 'react';
// import { firebase } from '../config/firebase';
import { Link, useNavigate } from 'react-router-dom';

import { AuthContext } from '../context/AuthContext';

const Login = ({ image }) => {
  // const [login, setLogin] = useState(false);
  const navigate = useNavigate();

  const { handleLogin, handleLogout, login } = useContext(AuthContext);

  useEffect(() => {
    if (login) {
      navigate('/home');
    } else {
      navigate('/');
    }
  }, [login, navigate]);

  return (
    <div>
      {login ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button
          style={{
            width: '250px',
            height: '50px',
            background:
              'linear-gradient(79.61deg, #F21162 -18.09%, #0D08FF 139.52%)',
            borderRadius: '20px',
            color: 'white',
          }}
          onClick={handleLogin}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span
              style={{
                display: 'inline-block',
                padding: ' 0 8px ',
                paddingTop: '2px',
                textAlign: 'center',
              }}
            >
              <img
                style={{ height: '20px', margin: 'auto 0' }}
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
