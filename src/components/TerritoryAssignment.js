import "../App.css";
import React, { useReducer } from "react";
import OhioSvg from "./Ohio";
import SalespersonList from "./SalespersonList";
import Grid from "@mui/material/Unstable_Grid2";
import { Button } from "@mui/material";

import { AppContextNew, AppContextObject } from "../data/AppContext";
import contextReducer from "../data/ContextReducer";

function TerritoryAssignment({ currentSalespeople }) {
  const btnStyles = {
    fontSize: "12px",
    margin: "5px 5px",
    //backgroundColor: "dimgrey",
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
          <Grid xs={4} display="flex" justifyContent="start" alignItems="start">
            <OhioSvg onCountySelect={handleCountySelect} />
          </Grid>
          <Grid xs={4}></Grid>

          <Grid xs={4} display="flex" justifyContent="space-between">
            <Button
              style={btnStyles}
              variant="contained"
              onClick={handleRandomFill}
            >
              Sample Fill
            </Button>
            <Button
              style={btnStyles}
              variant="contained"
              onClick={() => handleClear()}
            >
              Clear Map
            </Button>
            {currentState.selectedSalesperson === 0 ? (
              <Button
                style={btnStyles}
                variant="contained"
                onClick={() => handleClear(currentState.selectedSalesperson)}
                disabled
              >
                Clear Current
              </Button>
            ) : (
              <Button
                style={btnStyles}
                variant="contained"
                onClick={() => handleClear(currentState.selectedSalesperson)}
              >
                Clear Current
              </Button>
            )}
          </Grid>
          <Grid xs={4}></Grid>
        </Grid>
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
