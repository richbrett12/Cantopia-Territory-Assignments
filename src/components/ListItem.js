import React, { useContext } from "react";
import { AppContextNew } from "../data/AppContext";

function ListItem({ name, id, onButtonClick }) {
  const currentContext = useContext(AppContextNew);
  let color = currentContext.salespeople[id];
  const mainStyles = {
    width: "300px",
    padding: "10px",
    fontSize: "22px",
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
        <svg width="20px" height="16px">
          <rect x="0" y="0" width="100%" height="100%" style={buttonStyles} />
        </svg>
        <label>
          {" "}
          {name}:
          <div style={shopCountStyles}>{currentContext.shopCount[id]}</div>
        </label>
      </div>
    </li>
  );
}

export default ListItem;
