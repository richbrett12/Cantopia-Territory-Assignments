import React, { useContext, useState } from "react";
import { AppContextNew } from "../data/AppContext";
import "./County.css";

function County({ d, countyName, onCountySelect }) {
  const currentContext = useContext(AppContextNew);
  const [color, setColor] = useState("#d0d0d0");

  let assignment = currentContext.countyAssignment.find(
    (x) => x.countyName === countyName
  ).salespersonId;

  if (
    assignment !== undefined &&
    color !== currentContext.salespeople[assignment].countyColor
  ) {
    setColor(currentContext.salespeople[assignment].countyColor);
  }

  let fillStyle = {
    fill: color,
  };

  function handleClick() {
    if (currentContext.selectedSalesperson !== undefined) {
      setColor(
        currentContext.salespeople[currentContext.selectedSalesperson]
          .countyColor
      );
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
