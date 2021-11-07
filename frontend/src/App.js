import Profile from "./pages/profile";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
function App() {
  return (
    <div className="App">
      <Router>
        <Profile />
        <LoginPage />
      </Router>
    </div>
  );
}

export default App;
