import React, { useState } from "react";
import OhioSvg from "./Ohio";
import SalespersonList from "./SalespersonList";
import { AppContextNew, AppContextObject } from "./data/AppContext";
import { sampleCountyAssignment, sampleSalespeople } from "./data/SampleData";

function TerritoryAssignment() {
  const mainStyles = {
    padding: "25px",
  };
  const [currentState, setCurrentState] = useState(AppContextObject);

  function handleSalespersonSelect(id) {
    let updatedState = {
      selectedSalesperson: id,
      countyAssignment: currentState.countyAssignment.slice(),
      salespeople: currentState.salespeople.slice(),
    };

    setCurrentState(updatedState);
  }

  function handleCountySelect(countyName) {
    let countyIndex = currentState.countyAssignment.findIndex(
      (x) => x.countyName === countyName
    );

    let updatedState = {
      selectedSalesperson: currentState.selectedSalesperson,
      countyAssignment: currentState.countyAssignment.slice(),
      salespeople: currentState.salespeople.slice(),
    };

    updatedState.countyAssignment[countyIndex].salespersonId =
      currentState.selectedSalesperson;

    setCurrentState(updatedState);
  }

  function sampleFill() {
    let sampleCountyAssign = Array.from(sampleCountyAssignment);
    let sampleFill = {
      selectedSalesperson: undefined,
      countyAssignment: sampleCountyAssign,
      salespeople: currentState.salespeople.slice(),
    };
    setCurrentState(sampleFill);
  }

  const contextTrackerList = sampleSalespeople.map((person, index) => {
    return (
      <li>
        Id: {index}. <br />
        Color: {currentState.salespeople[index].countyColor}
      </li>
    );
  });
  const contextTrackerCountyList = currentState.countyAssignment.map(
    (county) => {
      return <li>{county.countyName + ": " + county.salespersonId}</li>;
    }
  );

  return (
    <AppContextNew.Provider value={currentState}>
      <div style={mainStyles}>
        <h1>Cantopia Territory Assignment</h1>
        <SalespersonList onSalespersonSelect={handleSalespersonSelect} />
        <button onClick={sampleFill}>Sample Fill</button>
        <OhioSvg onCountySelect={handleCountySelect} />
      </div>
      <div style={mainStyles}>
        <label>
          Context Tracker
          <br />
          Selected Salesperson Id: {currentState.selectedSalesperson}
        </label>
        <ul>{contextTrackerList}</ul>
        <label>CountyAssignmentDictionary:</label>
        <ul>{contextTrackerCountyList}</ul>
      </div>
    </AppContextNew.Provider>
  );
}

export default TerritoryAssignment;
