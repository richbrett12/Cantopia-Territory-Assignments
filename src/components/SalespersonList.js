import "../App.css";
import { React, useContext } from "react";
import ListItem from "./ListItem";
import { AppContextNew, salespersonColors } from "../data/AppContext";
import Grid from "@mui/material/Unstable_Grid2";
import CloseIcon from "@mui/icons-material/Close";

function SalespersonList({ currentSalespeople, onSalespersonSelect }) {
  const currentContext = useContext(AppContextNew);
  let color = salespersonColors[currentContext.selectedSalesperson];
  const salespeopleList = currentSalespeople.map((name, index) => {
    return (
      <ListItem
        name={name}
        id={index + 1}
        onButtonClick={onSalespersonSelect}
      />
    );
  });

  return (
    <div className="SalespersonListContainer">
      {currentContext.selectedSalesperson === 0 ? (
        <div className="NoSelectedSalespersonCard">
          <h3 className="SalespersonListTitle">Select a Salesperson</h3>
        </div>
      ) : (
        <div className="SelectedSalespersonCard">
          <Grid container spacing={0}>
            <Grid xs={11}>
              <h2>
                {currentSalespeople[currentContext.selectedSalesperson - 1]}
              </h2>
            </Grid>
            <Grid
              xs={1}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <CloseIcon
                onClick={() =>
                  onSalespersonSelect(currentContext.selectedSalesperson)
                }
              />
            </Grid>
            <Grid xs={12}>
              <div className="SelectedSvgContainer">
                <svg
                  width="97%"
                  height="10px"
                  style={{
                    //border: "1px solid white",
                    background: "whitesmoke",
                  }}
                >
                  <rect
                    transform="scale(8.0)"
                    x="0"
                    y="0"
                    width="100%"
                    height="100%"
                    style={{ fill: color }}
                  />
                </svg>
              </div>
            </Grid>
            {/* <Grid xs={3}>Selected:</Grid> */}
          </Grid>
        </div>
      )}

      <ul>{salespeopleList}</ul>
    </div>
  );
}

export default SalespersonList;
