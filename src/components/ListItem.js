import React, { useContext } from "react";
import { AppContextNew } from "./data/AppContext";

function ListItem({ name, id, onButtonClick }) {
  const currentContext = useContext(AppContextNew);
  let color = currentContext.salespeople[id];
  let mainStyles = {
    width: "300px",
    padding: "3px",
    fontWeight: "normal",
  };

  const buttonStyles = {
    backgroundColor: color,
    height: "18px",
  };

  if (currentContext.selectedSalesperson === id) {
    mainStyles.fontWeight = "bold";
  }

  return (
    <li>
      <div style={mainStyles} onClick={() => onButtonClick(id)}>
        <button style={buttonStyles} />
        <label> {name} </label>
      </div>
    </li>
  );
}

export default ListItem;
