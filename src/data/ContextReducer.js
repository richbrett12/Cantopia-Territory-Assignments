import { populationData } from "./AppContext";
import { CountySvgData } from "./CountySvgData";
import { sampleCountyAssignment2 } from "./SampleData";

export default function contextReducer(context, action) {
  switch (action.type) {
    case "salespersonSelect": {
      return {
        selectedSalesperson: action.id,
        countyAssignment: context.countyAssignment,
        salespeople: context.salespeople,
        shopCount: context.shopCount,
      };
    }
    case "countySelect": {
      updateShopCount(
        action.countyName,
        context.countyAssignment[action.countyName],
        context.selectedSalesperson
      );
      context.countyAssignment[action.countyName] = context.selectedSalesperson;

      return returnContextObject();
    }
    case "clearSelectedSalesperson": {
      CountySvgData.forEach((x) => {
        if (context.countyAssignment[x.County] === action.idToClear) {
          updateShopCount(x.County, context.countyAssignment[x.County], 0);
          context.countyAssignment[x.County] = 0;
        }
      });

      return returnContextObject();
    }
    case "clearAllAssignments": {
      CountySvgData.forEach((x) => {
        if (context.countyAssignment[x.County] !== 0) {
          updateShopCount(x.County, context.countyAssignment[x.County], 0);
          context.countyAssignment[x.County] = 0;
        }
      });

      return returnContextObject();
    }
    case "randomFill": {
      sampleCountyAssignment2.forEach((x) => {
        if (context.countyAssignment[x.countyName] !== x.salespersonId) {
          updateShopCount(
            x.countyName,
            context.countyAssignment[x.countyName],
            x.salespersonId
          );
          context.countyAssignment[x.countyName] = x.salespersonId;
        }
      });

      return returnContextObject();
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }

  function updateShopCount(countyName, oldAssignment, currentId) {
    let oldId = JSON.parse(oldAssignment);
    if (oldId !== currentId) {
      if (currentId !== 0) {
        context.shopCount[currentId] += populationData[countyName];
      }
      if (oldId !== 0) {
        context.shopCount[oldId] -= populationData[countyName];
      }
    }
  }

  function returnContextObject() {
    return {
      selectedSalesperson: context.selectedSalesperson,
      countyAssignment: context.countyAssignment,
      salespeople: context.salespeople,
      shopCount: context.shopCount,
    };
  }
}
