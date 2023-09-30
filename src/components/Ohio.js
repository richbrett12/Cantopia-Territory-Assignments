import React from "react";
import CountyList from "./counties/CountyList";

const OhioSvg = ({ onCountySelect }) => {
  const svgContainer = {
    textAlign: "center",
  };

  return (
    <div style={svgContainer}>
      <svg
        id="OhioCountyMap"
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="45.029999"
        height="50.889999"
        transform="scale(16)"
        viewBox="-30 10 100 30"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs id="defs3087" />
        <CountyList onCountySelect={onCountySelect} />
      </svg>
    </div>
  );
};

export default OhioSvg;
