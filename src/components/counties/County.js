import React, { useContext, useState } from "react";
import { AppContextNew } from "../data/AppContext";
import "./County.css";

function County({ d, countyName, onCountySelect }) {
  const currentContext = useContext(AppContextNew);
  const [color, setColor] = useState("#d0d0d0");

  let assignment = currentContext.countyAssignment[countyName];

  if (
    assignment !== undefined &&
    color !== currentContext.salespeople[assignment]
  ) {
    setColor(currentContext.salespeople[assignment]);
  }

  let fillStyle = {
    fill: color,
  };

  function handleClick() {
    if (currentContext.selectedSalesperson !== undefined) {
      setColor(currentContext.salespeople[currentContext.selectedSalesperson]);
      onCountySelect(countyName);
    }
  }

  return (
    <path
      className="county"
      style={fillStyle}
      d={d}
      id={countyName}
      onClick={handleClick}
    />
  );
}

export default County;
