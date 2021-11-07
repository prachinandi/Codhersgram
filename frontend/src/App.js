import React, { useContext } from 'react';
import Profile from './pages/profile';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Home from './pages/Home';
import IndividualProfile from './pages/IndividualProfile';

import  { AuthContext } from './context/AuthContext';

function App() {
  const { login } = useContext(AuthContext);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          {login && (
            <>
              <Route path="/user-profile" element={<Profile />} />
              <Route path="/profile" element={<IndividualProfile />} />
              <Route path="/home" element={<Home />} />
            </>
          )}
          <Route path="*" element={<LoginPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
