import "../App.css";
import React, { useEffect, useReducer } from "react";
import OhioSvg from "./Ohio";
import SalespersonList from "./SalespersonList";
import Grid from "@mui/material/Unstable_Grid2";
import { Button } from "@mui/material";
import { useParams } from "react-router-dom";
import * as Y from "yjs";
import { WebrtcProvider } from "y-webrtc";

import { AppContextNew, AppContextObject } from "../data/AppContext";
import ContextReducer from "../data/ContextReducer";

let ydoc = null;
let provider = null;

function TerritoryAssignment({ currentSalespeople }) {
  const [currentState, dispatch] = useReducer(ContextReducer, AppContextObject);
  const { roomName } = useParams();

  useEffect(() => {
    if (!provider || provider.roomName !== roomName) {
      if (provider) {
        provider.destroy();
      }
      ydoc = new Y.Doc();
      provider = new WebrtcProvider(roomName, ydoc, {
        password: "optional-room-password",
      });

      ydoc.getMap("countyAssignment");

      dispatch({
        type: "syncMapToContext",
        ydoc: ydoc,
      });
    }

    return () => {};
  }, [roomName]);

  if (ydoc) {
    ydoc.on("update", () => {
      dispatch({
        type: "syncMapToContext",
        ydoc: ydoc,
      });
    });
  }

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
      salespersonId: currentState.selectedSalesperson,
      ydoc: ydoc,
    });
  }

  function handleClear(id) {
    if (id) {
      dispatch({
        type: "clearSelectedSalesperson",
        idToClear: id,
        ydoc: ydoc,
      });
    } else {
      dispatch({
        type: "clearAllAssignments",
        ydoc: ydoc,
      });
    }
  }

  function handleRandomFill() {
    dispatch({
      type: "randomFill",
      ydoc: ydoc,
    });
  }

  return (
    <AppContextNew.Provider value={currentState}>
      <span>
        <strong>Room Name: </strong>
        {roomName}
      </span>
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

          <Grid xs={4} display="flex" justifyContent="space-around">
            <Button size="small" variant="contained" onClick={handleRandomFill}>
              Sample Fill
            </Button>
            <Button
              size="small"
              variant="contained"
              onClick={() => handleClear()}
            >
              Clear Map
            </Button>
            {currentState.selectedSalesperson === 0 ? (
              <Button
                size="small"
                variant="contained"
                onClick={() => handleClear(currentState.selectedSalesperson)}
                disabled
              >
                Clear Current
              </Button>
            ) : (
              <Button
                className="ActionButtons"
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
    </AppContextNew.Provider>
  );
}

export default TerritoryAssignment;
