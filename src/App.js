import "./App.css";
import * as React from "react";
import TerritoryAssignment from "./components/TerritoryAssignment";
import { sampleSalespeople } from "./data/SampleData";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="AppContainer">
      <Router>
        <Routes>
          <Route
            path="/Cantopia-Territory-Assignments/:roomName"
            element={
              <TerritoryAssignment currentSalespeople={sampleSalespeople} />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
