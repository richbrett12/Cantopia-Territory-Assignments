import React from "react";
import ListItem from "./ListItem";

function SalespersonList({ onSalespersonSelect }) {
  return (
    <div>
      <h2>Salespeople</h2>
      <ul>
        <ListItem
          name="John Doe"
          color="Red"
          onButtonClick={onSalespersonSelect}
        />
        <ListItem
          name="Steve Jobs"
          color="Blue"
          onButtonClick={onSalespersonSelect}
        />
        <ListItem
          name="Mike Scott"
          color="Orange"
          onButtonClick={onSalespersonSelect}
        />
      </ul>
    </div>
  );
}

export default SalespersonList;
