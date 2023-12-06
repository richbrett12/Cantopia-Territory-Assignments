import "../App.css";
import React, { useReducer } from "react";
import OhioSvg from "./Ohio";
import SalespersonList from "./SalespersonList";
import Grid from "@mui/material/Unstable_Grid2";

import { AppContextNew, AppContextObject } from "../data/AppContext";
import contextReducer from "../data/ContextReducer";

function TerritoryAssignment({ currentSalespeople }) {
  const btnStyles = {
    margin: "2px 10px",
  };
  const [currentState, dispatch] = useReducer(contextReducer, AppContextObject);

  function handleSalespersonSelect(id) {
    if (id !== currentState.selectedSalesperson) {
      dispatch({
        type: "salespersonSelect",
        id: id,
      });
    } else {
      dispatch({
        type: "salespersonSelect",
        id: 0,
      });
    }
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

  return (
    <AppContextNew.Provider value={currentState}>
      <div className="MainContainer">
        <Grid container spacing={2}>
          <Grid xs={4}>
            <SalespersonList
              currentSalespeople={currentSalespeople}
              onSalespersonSelect={handleSalespersonSelect}
            />
          </Grid>
          <Grid xs={8}>
            <OhioSvg onCountySelect={handleCountySelect} />
          </Grid>
          <Grid xs={12}>
            <h5>Actions</h5>
            <button style={btnStyles} onClick={() => handleClear()}>
              Clear All
            </button>
            <button style={btnStyles} onClick={handleRandomFill}>
              Sample Fill
            </button>
          </Grid>
        </Grid>
        <br />
        {currentState.selectedSalesperson !== 0 && (
          <div>
            <button
              style={btnStyles}
              onClick={() => handleClear(currentState.selectedSalesperson)}
            >
              Clear Selected
            </button>
          </div>
        )}
      </div>
      {/* <div className="ContextTracker">
        <h4>Context Tracker</h4>
        <h5>Selected Saleperson</h5>
        {currentState.selectedSalesperson === -1
          ? "None"
          : currentState.selectedSalesperson}
        <h5>County Assignment</h5>
        {JSON.stringify(currentState.countyAssignment, null, 5)}
        <h5>Salespeople ID and Colors</h5>
        {JSON.stringify(salespersonColors, null, 5)}
      </div> */}
    </AppContextNew.Provider>
  );
}

export default TerritoryAssignment;
