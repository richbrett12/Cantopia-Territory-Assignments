import React from "react";
import County from "./County";
import { CountySvgData } from "../data/CountySvgData";
function CountyList({ onCountySelect }) {
  const OhioSvgPaths = CountySvgData.map((element, index) => {
    return (
      <County
        countyName={element.County}
        d={element.d}
        onCountySelect={onCountySelect}
      />
    );
  });

  return <>{OhioSvgPaths}</>;
}

export default CountyList;
