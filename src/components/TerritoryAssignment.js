import React, { useReducer } from "react";
import OhioSvg from "./Ohio";
import SalespersonList from "./SalespersonList";
import {
  AppContextNew,
  AppContextObject,
  populationData,
} from "./data/AppContext";
import contextReducer from "./data/ContextReducer";

function TerritoryAssignment() {
  const mainStyles = {
    padding: "25px",
  };
  const btnStyles = {
    margin: "2px 10px",
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

  function handleClear(id) {
    if (id) {
      dispatch({
        type: "clearSelectedSalesperson",
        idToClear: id,
      });
    } else {
      dispatch({
        type: "clearAllAssignments",
      });
    }
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
        <OhioSvg onCountySelect={handleCountySelect} />
        <SalespersonList onSalespersonSelect={handleSalespersonSelect} />
        <h5>Actions</h5>
        <button style={btnStyles} onClick={() => handleClear()}>
          Clear All
        </button>
        <button style={btnStyles} onClick={handleRandomFill}>
          Sample Fill
        </button>
        <br />
        {currentState.selectedSalesperson !== 0 && (
          <div>
            <button
              style={btnStyles}
              onClick={() => handleClear(currentState.selectedSalesperson)}
            >
              Clear Selected
            </button>
            <button style={btnStyles} onClick={deselectSalesperson}>
              Deselect
            </button>
          </div>
        )}
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
      </div>
    </AppContextNew.Provider>
  );
}

export default TerritoryAssignment;
