import { createContext } from "react";

const colors = ["Blue", "Red", "Orange", "Yellow", "Purple", "Green"];
const salespersonObj = function (id, color) {
  const salespersonId = id;
  const countyColor = color;
  const counties = [];
  return { salespersonId, countyColor, counties };
};

const AppContextArray = colors.map((color, index) =>
  salespersonObj(index, color)
);

export const AppContextObj = {
  currentId: undefined,
  assignmentMap: AppContextArray,
};

export const AppContext = createContext();
