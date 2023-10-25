import { createContext } from "react";
import { CountySvgData } from "./CountySvgData";

const colors = [
  "LightGray",
  "Blue",
  "Red",
  "Green",
  "DarkOrange",
  "Purple",
  "Gold",
  "Pink",
  "LightBlue",
  "LightGreen",
  "#383838",
  "url(#Blue-Checker)",
  "url(#Red-Checker)",
  "url(#Green-Checker)",
  "url(#DarkOrange-Checker)",
  "url(#Purple-Checker)",
  "url(#Blue-Line)",
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
