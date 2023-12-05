import React from "react";
import ListItem from "./ListItem";

function SalespersonList({ currentSalespeople, onSalespersonSelect }) {
  const mainStyles = {
    listStyle: "none",
    width: "350px",
    maxHeight: "200px",
    overflow: "hidden",
    overflowY: "scroll",
    background: "whitesmoke",
    padding: "10px",
  };

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
    <div>
      <h4>Select a Salesperson</h4>
      <ul style={mainStyles}>{salespeopleList}</ul>
    </div>
  );
}

export default SalespersonList;
