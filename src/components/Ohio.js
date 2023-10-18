import React from "react";
import CountyList from "./counties/CountyList";

const OhioSvg = ({ onCountySelect }) => {
  const svgContainer = {
    height: "0px",
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
        transform="scale(16) rotate(5)"
        viewBox="-10 0 100 10"
      >
        <defs id="defs3087" />
        <CountyList onCountySelect={onCountySelect} />
      </svg>
    </div>
  );
};

export default OhioSvg;
