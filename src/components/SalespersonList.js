import React from "react";
import ListItem from "./ListItem";

function SalespersonList({ onSalespersonSelect }) {
  return (
    <div>
      <h2>Salespeople</h2>
      <ul>
        <ListItem
          name="John Appleseed"
          id="0"
          onButtonClick={onSalespersonSelect}
        />
        <ListItem
          name="Brett Rich"
          id="1"
          onButtonClick={onSalespersonSelect}
        />
        <ListItem
          name="Marvin Jones"
          id="2"
          onButtonClick={onSalespersonSelect}
        />
      </ul>
    </div>
  );
}

export default SalespersonList;
