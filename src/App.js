import Beam from "./components/Beam";
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {" "}
          Automation in Design of Structure
        </header>

        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/beam" element={<Beam />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
