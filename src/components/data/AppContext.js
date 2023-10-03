import { createContext } from "react";
import { CountySvgData } from "./CountySvgData";

const colors = ["Blue", "Red", "Orange", "Yellow", "Purple", "Green"];

const salespersonObject = function (id, color) {
  const salespersonId = id;
  const countyColor = color;
  return { salespersonId, countyColor };
};

const countyAssignmentDictionary = function (county, id) {
  const countyName = county;
  const salespersonId = id;
  return { countyName, salespersonId };
};

const salespersonList = colors.map((color, index) =>
  salespersonObject(index, color)
);

const countyAssignmentList = CountySvgData.map((county) =>
  countyAssignmentDictionary(county.County, undefined)
);

export const AppContextObject = {
  selectedSalesperson: undefined,
  countyAssignment: countyAssignmentList,
  salespeople: salespersonList,
};

export const AppContextNew = createContext();
