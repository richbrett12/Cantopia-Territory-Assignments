import React from "react";

function CheckerFills() {
  let colors = [
    "Red",
    "DarkOrange",
    "Green",
    "Blue",
    "Gold",
    "#800000",
    "BlueViolet",
    "#222831",
  ];
  let patternSize = ".5";
  let patterns = colors.map((color) => {
    let patternId = color + "-Checker";
    return (
      <pattern
        id={patternId}
        x="0"
        y="0"
        width={patternSize * 2}
        height={patternSize * 2}
        patternUnits="userSpaceOnUse"
      >
        <rect
          style={{ fill: color }}
          x="0"
          width={patternSize}
          height={patternSize}
          y="0"
        ></rect>
        <rect
          style={{ fill: color }}
          x={patternSize}
          width={patternSize}
          height={patternSize}
          y={patternSize}
        ></rect>
      </pattern>
    );
  });

  return patterns;
}

export default CheckerFills;
