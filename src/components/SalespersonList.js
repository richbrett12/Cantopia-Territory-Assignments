import React from "react";
import ListItem from "./ListItem";
import { sampleSalespeople } from "./data/SampleData";

function SalespersonList({ onSalespersonSelect }) {
  const mainStyles = {
    listStyle: "none",
    width: "300px",
    background: "whitesmoke",
    padding: "10px",
  };
  const salespeopleList = sampleSalespeople.map((name, index) => {
    return (
      <ListItem name={name} id={index} onButtonClick={onSalespersonSelect} />
    );
  });

  return (
    <div>
      <h5>Select a Salesperson</h5>
      <ul style={mainStyles}>{salespeopleList}</ul>
    </div>
  );
}

export default SalespersonList;
