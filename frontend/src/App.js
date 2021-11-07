import Profile from "./pages/profile";
import Home from './components/Home'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">


      <Router>
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>


    </div>
  );
}

export default App;
