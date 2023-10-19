import React from "react";
import ListItem from "./ListItem";
import { sampleSalespeople } from "../data/SampleData";

function SalespersonList({ onSalespersonSelect }) {
  const mainStyles = {
    listStyle: "none",
    width: "300px",
    background: "whitesmoke",
    padding: "10px",
  };

  const salespeopleList = sampleSalespeople.map((name, index) => {
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
