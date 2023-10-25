import React from "react";

function LineFills() {
  let colors = ["Red", "Blue", "Green", "Yellow", "Orange", "Purple"];
  let patternSize = ".5";
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
      >
        <g id="chevron">
          <path
            style={{ fill: color }}
            class="left"
            d="M0 0l5 3v5l-5 -3z"
          ></path>
          <path
            style={{ fill: color }}
            class="right"
            d="M10 0l-5 3v5l5 -3"
          ></path>
        </g>
      </pattern>
    );
  });

  return patterns;
}

export default LineFills;
