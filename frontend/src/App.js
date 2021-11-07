import Profile from "./pages/profile";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
    <Router>
      <Profile/>
    </Router>
    </div>
  );
}

export default App;
