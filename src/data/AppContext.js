import { createContext } from "react";
import { CountySvgData } from "./CountySvgData";

const colors = [
  "#D8D8D8",
  "Red",
  "DarkOrange",
  "Green",
  "Blue",
  "Gold",
  "#800000", //Maroon
  "BlueViolet",
  "#404040", // Dark Gray
  "url(#Red-Line)",
  "url(#DarkOrange-Line)",
  "url(#Green-Line)",
  "url(#Blue-Line)",
  "url(#Gold-Line)",
  "url(##800000-Line)", //Maroon
  "url(#BlueViolet-Line)",
  "url(##404040-Line)", // Dark Gray
  "Pink",
  "#00BFFF", // Light Blue
  "#7FFF00", // Light Green
  "#FFFFCC", // Beige
  "#FF00FF", // Bright Pink
  "url(#Pink-Line)",
  "url(##00BFFF-Line)", // Light Blue
  "url(##7FFF00-Line)", // Light Green
  "url(##FF00FF-Line)", // Bright Pink
  // "url(#Red-Checker)",
];

export const salespersonColors = colors.reduce(
  (acc, color, currentIndex) => ({
    ...acc,
    [currentIndex]: color,
  }),
  {}
);

export const emptyCountyAssignmentList = CountySvgData.reduce(
  (acc, county) => ({ ...acc, [county.County]: 0 }),
  {}
);

export const populationData = CountySvgData.reduce(
  (acc, county) => ({
    ...acc,
    [county.County]: Math.ceil(county.population / 20000),
  }),
  {}
);

export const AppContextObject = {
  selectedSalesperson: 0,
  countyAssignment: emptyCountyAssignmentList,
};

export const AppContextNew = createContext();
