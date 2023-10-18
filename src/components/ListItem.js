import React, { useContext } from "react";
import { AppContextNew } from "./data/AppContext";

function ListItem({ name, id, onButtonClick }) {
  const currentContext = useContext(AppContextNew);
  let color = currentContext.salespeople[id];
  const mainStyles = {
    width: "300px",
    padding: "3px",
    fontWeight: "normal",
  };

  const buttonStyles = {
    backgroundColor: color,
    height: "18px",
  };

  const shopCountStyles = {
    padding: "0px 10px",
    fontWeight: "bold",
    float: "right",
  };

  if (currentContext.selectedSalesperson === id) {
    mainStyles.fontWeight = "bold";
  }

  return (
    <li>
      <div style={mainStyles} onClick={() => onButtonClick(id)}>
        <button style={buttonStyles} />
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
