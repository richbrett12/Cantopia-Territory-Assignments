import "./App.css";
import * as React from "react";
import TerritoryAssignment from "./components/TerritoryAssignment";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function Home() {
  const rooms = ["Room1", "Room2", "Room3", "Room4"];
  return (
    <div>
      <h1>Pages</h1>
      <nav>
        <ul>
          {rooms.map((roomName) => {
            return (
              <li key={roomName}>
                <Link to={`/${roomName}`}>{roomName}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:roomName" element={<TerritoryAssignment />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
