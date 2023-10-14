import React, { useReducer } from "react";
import OhioSvg from "./Ohio";
import SalespersonList from "./SalespersonList";
import {
  AppContextNew,
  AppContextObject,
  populationData,
} from "./data/AppContext";
import contextReducer from "./data/ContextReducer";
//import { sampleCountyAssignment, sampleSalespeople } from "./data/SampleData";

function TerritoryAssignment() {
  const mainStyles = {
    padding: "25px",
  };
  const [currentState, dispatch] = useReducer(contextReducer, AppContextObject);

  function handleSalespersonSelect(id) {
    dispatch({
      type: "salespersonSelect",
      id: id,
    });
  }

  function handleCountySelect(countyName) {
    dispatch({
      type: "countySelect",
      countyName: countyName,
    });
  }

  function handleRandomFill() {
    dispatch({
      type: "randomFill",
    });
  }
  function deselectSalesperson() {
    handleSalespersonSelect(0);
  }

  console.log(populationData);

  return (
    <AppContextNew.Provider value={currentState}>
      <div style={mainStyles}>
        <h1>Cantopia Territory Assignment</h1>
        <SalespersonList onSalespersonSelect={handleSalespersonSelect} />
        <button onClick={handleRandomFill}>Sample Fill</button>
        <button onClick={deselectSalesperson}>Deselect</button>
        <OhioSvg onCountySelect={handleCountySelect} />
      </div>
      <div style={mainStyles}>
        <h4>Context Tracker</h4>
        <h5>Selected Saleperson</h5>
        {currentState.selectedSalesperson === -1
          ? "None"
          : currentState.selectedSalesperson}
        <h5>County Assignment</h5>
        {JSON.stringify(currentState.countyAssignment, null, 5)}
        <h5>Salespeople ID and Colors</h5>
        {JSON.stringify(currentState.salespeople, null, 5)}
        <h5>Salespeople ID and Shop Count</h5>
        {JSON.stringify(currentState.shopCount, null, 5)}
      </div>
    </AppContextNew.Provider>
  );
}

export default TerritoryAssignment;
