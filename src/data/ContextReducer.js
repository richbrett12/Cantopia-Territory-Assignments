import { CountySvgData } from "./CountySvgData";
import { sampleCountyAssignment2 } from "./SampleData";

export default function contextReducer(context, action) {
  switch (action.type) {
    case "salespersonSelect": {
      return {
        selectedSalesperson: action.id,
        countyAssignment: context.countyAssignment,
      };
    }
    case "countySelect": {
      context.countyAssignment[action.countyName] = context.selectedSalesperson;

      return returnContextObject();
    }
    case "clearSelectedSalesperson": {
      CountySvgData.forEach((x) => {
        if (context.countyAssignment[x.County] === action.idToClear) {
          context.countyAssignment[x.County] = 0;
        }
      });

      return returnContextObject();
    }
    case "clearAllAssignments": {
      CountySvgData.forEach((x) => {
        if (context.countyAssignment[x.County] !== 0) {
          context.countyAssignment[x.County] = 0;
        }
      });

      return returnContextObject();
    }
    case "randomFill": {
      sampleCountyAssignment2.forEach((x) => {
        if (context.countyAssignment[x.countyName] !== x.salespersonId) {
          context.countyAssignment[x.countyName] = x.salespersonId;
        }
      });

      return returnContextObject();
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }

  function returnContextObject() {
    return {
      selectedSalesperson: context.selectedSalesperson,
      countyAssignment: context.countyAssignment,
    };
  }
}
