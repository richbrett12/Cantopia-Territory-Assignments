import React, { useState } from "react";
import "./County.css";

function County({ countyName, d, fillColor }) {
  const [color, setColor] = useState("#d0d0d0");

  let fillStyle = {
    fill: color,
  };

  function handleClick() {
    if (fillColor !== undefined) setColor(fillColor);
  }

  return (
    <path
      className="county"
      style={fillStyle}
      d={d}
      id={countyName}
      inkscapeConnector-curvature="0"
      onClick={handleClick}
    />
  );
}

export default County;
