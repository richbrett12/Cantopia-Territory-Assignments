import React from "react";

function CheckerFills() {
  let colors = ["Red", "Blue", "Green", "Yellow", "Orange", "Purple"];

  let patterns = colors.map((color) => {
    let patternId = color + "-Checker";
    return (
      <pattern
        id={patternId}
        x="0"
        y="0"
        width="2"
        height="2"
        patternUnits="userSpaceOnUse"
      >
        <rect style={{ fill: color }} x="0" width="1" height="1" y="0"></rect>
        <rect style={{ fill: color }} x="1" width="1" height="1" y="1"></rect>
      </pattern>
    );
  });

  return patterns;
}

export default CheckerFills;
