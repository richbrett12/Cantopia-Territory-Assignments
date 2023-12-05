import React, { useContext } from "react";
import { populationData } from "../data/AppContext";
import { AppContextNew } from "../data/AppContext";

function ListItem({ name, id, onButtonClick }) {
  function getShopCount() {
    let sum = 0;
    for (const [key, value] of Object.entries(
      currentContext.countyAssignment
    )) {
      if (value === id) {
        sum += populationData[key];
      }
    }
    return sum;
  }

  const currentContext = useContext(AppContextNew);
  let color = currentContext.salespeople[id];
  const mainStyles = {
    width: "350px",
    padding: "10px",
    fontSize: "20px",
    fontWeight: "normal",
  };

  const buttonStyles = {
    fill: color,
  };

  const shopCountStyles = {
    padding: "0px 16px",
    fontWeight: "bold",
    float: "right",
  };

  if (currentContext.selectedSalesperson === id) {
    mainStyles.fontWeight = "bold";
  }

  return (
    <li>
      <div style={mainStyles} onClick={() => onButtonClick(id)}>
        <svg width="20px" height="14px" style={{ border: "1px solid black" }}>
          <rect
            transform="scale(4.0)"
            x="0"
            y="0"
            width="100%"
            height="100%"
            style={buttonStyles}
          />
        </svg>
        <label>
          {" "}
          {name}:<div style={shopCountStyles}>{getShopCount()}</div>
        </label>
      </div>
    </li>
  );
}

export default ListItem;
