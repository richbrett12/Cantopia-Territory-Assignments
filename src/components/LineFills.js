import React from "react";

function LineFills() {
  let colors = [
    "Pink",
    "#00BFFF", // Light Blue
    "#7FFF00", // Light Green
    "#404040", // Dark Grey
    "#FF00FF",
    "Red",
    "DarkOrange",
    "Green",
    "Blue",
    "Gold",
    "#800000",
    "BlueViolet",
  ];
  let patternSize = "1";
  let patterns = colors.map((color) => {
    let patternId = color + "-Line";
    return (
      <pattern
        id={patternId}
        x="0"
        y="0"
        patternUnits="userSpaceOnUse"
        width={patternSize}
        height={patternSize * 1.8}
        viewBox="0 0 10 18"
        patternTransform="rotate(30)"
      >
        <g id="chevron">
          <path
            style={{ fill: color }}
            class="left"
            d="M0 0l10 6v10l-10 -6z"
          ></path>
          <path
            style={{ fill: color }}
            class="right"
            d="M10 0l-10 6v10l10 -6"
          ></path>
        </g>
      </pattern>
    );
  });

  return patterns;
}

export default LineFills;
