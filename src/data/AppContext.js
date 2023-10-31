import { createContext } from "react";
import { CountySvgData } from "./CountySvgData";

const colors = [
  "LightGray",
  "Red",
  "DarkOrange",
  "Green",
  "Blue",
  "Gold",
  "#800000", //Maroon
  "BlueViolet",
  "#222831", // Dark Gray
  "url(#Red-Line)",
  "url(#DarkOrange-Line)",
  "url(#Green-Line)",
  "url(#Blue-Line)",
  "url(#Gold-Line)",
  "url(##800000-Line)", //Maroon
  "url(#BlueViolet-Line)",
  "url(##222831-Line)", // Dark Gray
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
  // "url(#DarkOrange-Checker)",
  // "url(#Green-Checker)",
  // "url(#Blue-Checker)",
  // "url(#Gold-Checker)",
  // "url(##800000-Checker)", //Maroon
  // "url(#BlueViolet-Checker)",
  // "url(##222831-Checker)", // Dark Gray
];

const countyAssignmentList = CountySvgData.reduce(
  (acc, county) => ({ ...acc, [county.County]: 0 }),
  {}
);

const salespersonList = colors.reduce(
  (acc, color, currentIndex) => ({
    ...acc,
    [currentIndex]: color,
  }),
  {}
);

export const populationData = CountySvgData.reduce(
  (acc, county) => ({
    ...acc,
    [county.County]: Math.ceil(county.population / 20000),
  }),
  {}
);
const shopCountList = colors.reduce(
  (acc, color, currentIndex) => ({
    ...acc,
    [currentIndex]: 0,
  }),
  {}
);

export const AppContextObject = {
  selectedSalesperson: 0,
  countyAssignment: countyAssignmentList,
  salespeople: salespersonList,
  shopCount: shopCountList,
};

export const AppContextNew = createContext();
