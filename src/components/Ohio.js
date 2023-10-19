import React from "react";
import CountyList from "./counties/CountyList";
import CheckerFills from "./CheckerFills";

const OhioSvg = ({ onCountySelect }) => {
  const svgContainer = {
    height: "0px",
    width: "55%",
    textAlign: "right",
    marginTop: "25px",
  };

  return (
    <div style={svgContainer}>
      <svg
        id="OhioCountyMap"
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="400"
        height="325"
        transform="scale(1) rotate(5)"
        viewBox="0 0 50 50"
      >
        <defs id="defs3087" />
        <CheckerFills />
        <CountyList onCountySelect={onCountySelect} />
      </svg>
    </div>
  );
};

export default OhioSvg;
