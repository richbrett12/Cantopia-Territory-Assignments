import React from "react";

function ListItem({ name, color, onButtonClick }) {
  //function handleClick(colorSelected) {
  //console.log("Handling click: ", colorSelected);
  //}

  return (
    <li>
      <div>
        <label>{name}: </label>
        <button onClick={() => onButtonClick(color)}>{color}</button>
      </div>
    </li>
  );
}

export default ListItem;
