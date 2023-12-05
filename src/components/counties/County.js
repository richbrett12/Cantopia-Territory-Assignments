import React, { useContext } from "react";
import { AppContextNew, salespersonColors } from "../../data/AppContext";
import "./County.css";

function County({ d, countyName, onCountySelect }) {
  const currentContext = useContext(AppContextNew);

  let assignment = currentContext.countyAssignment[countyName];
  let fillStyle = {
    fill: salespersonColors[assignment],
  };

  function handleClick() {
    if (currentContext.selectedSalesperson !== undefined) {
      onCountySelect(countyName);
    }
  }
  return (
    <svg>
      <path
        className="county"
        style={fillStyle}
        d={d}
        id={countyName}
        onClick={handleClick}
      >
        <title>{countyName}</title>
      </path>
    </svg>
  );
}

export default County;
