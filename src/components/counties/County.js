import React, { useContext, useState } from "react";
import { AppContext } from "../data/AppContext";
import "./County.css";

function County({ d, countyName, onCountySelect }) {
  const [color, setColor] = useState("#d0d0d0");
  const currentContext = useContext(AppContext);

  let fillStyle = {
    fill: color,
  };

  function handleClick() {
    if (currentContext.currentId !== undefined) {
      setColor(
        currentContext.assignmentMap[currentContext.currentId].countyColor
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
