import React, { useState } from "react";
import OhioSvg from "./Ohio";
import SalespersonList from "./SalespersonList";
import { AppContext, AppContextObj } from "./data/AppContext";

function TerritoryAssignment() {
  const mainStyles = {
    padding: "25px",
  };

  //const [currentColor, setCurrentColor] = useState();
  const [currentState, setCurrentState] = useState(AppContextObj);
  //const [mapState, setMapState] = useState(OhioSvgData);

  function handleSalespersonSelect(id) {
    let updatedState = {
      currentId: id,
      assignmentMap: currentState.assignmentMap.slice(),
    };
    setCurrentState(updatedState);
    console.log(currentState.currentId);
  }

  function handleCountySelect(countyName) {
    let updatedState = {
      currentId: currentState.currentId,
      assignmentMap: currentState.assignmentMap.slice(),
    };
    updatedState.assignmentMap[currentState.currentId].counties.push(
      countyName
    );
    setCurrentState(updatedState);
  }

  return (
    <AppContext.Provider value={currentState}>
      <div style={mainStyles}>
        <h1>Cantopia Territory Assignment</h1>
        <h4>
          Selected Salesperson:{" "}
          {currentState.currentId !== undefined
            ? currentState.currentId
            : "None"}
        </h4>
        <SalespersonList onSalespersonSelect={handleSalespersonSelect} />
        <OhioSvg onCountySelect={handleCountySelect} />
      </div>
      <div>
        <h5>Context Tracker</h5>
        <ul>
          <li>
            Id: 0. <br />
            Color: {currentState.assignmentMap[0].countyColor} <br />
            Counties: {currentState.assignmentMap[0].counties.toString()}
          </li>
          <li>
            Id: 1. <br />
            Color: {currentState.assignmentMap[1].countyColor} <br />
            Counties: {currentState.assignmentMap[1].counties.toString()}
          </li>
          <li>
            Id: 2. <br />
            Color: {currentState.assignmentMap[2].countyColor} <br />
            Counties: {currentState.assignmentMap[2].counties.toString()}
          </li>
          <li>
            Id: 3. <br />
            Color: {currentState.assignmentMap[3].countyColor} <br />
            Counties: {currentState.assignmentMap[3].counties.toString()}
          </li>
          <li>
            Id: 4. <br />
            Color: {currentState.assignmentMap[4].countyColor} <br />
            Counties: {currentState.assignmentMap[4].counties.toString()}
          </li>
        </ul>
      </div>
    </AppContext.Provider>
  );
}

export default TerritoryAssignment;
