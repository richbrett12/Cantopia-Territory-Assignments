import { CountySvgData } from "./CountySvgData";
import { sampleCountyAssignment2 } from "./SampleData";

export default function ContextReducer(context, action) {
  switch (action.type) {
    case "salespersonSelect": {
      return {
        selectedSalesperson: action.id,
        countyAssignment: context.countyAssignment,
      };
    }
    case "countySelect": {
      let countyAssignmentMap = action.ydoc.getMap("countyAssignment");
      if (countyAssignmentMap.get(action.countyName) !== action.salespersonId) {
        action.ydoc.transact(() => {
          countyAssignmentMap.set(
            action.countyName,
            context.selectedSalesperson
          );
        });
        console.log(countyAssignmentMap);
      }

      return returnContextObject();
    }
    case "clearSelectedSalesperson": {
      let countyAssignmentMap = action.ydoc.getMap("countyAssignment");
      CountySvgData.forEach((x) => {
        if (countyAssignmentMap.get(x.County) === action.idToClear) {
          action.ydoc.transact(() => {
            countyAssignmentMap.set(x.County, 0);
          });
        }
      });

      return returnContextObject();
    }
    case "clearAllAssignments": {
      let countyAssignmentMap = action.ydoc.getMap("countyAssignment");
      CountySvgData.forEach((x) => {
        if (countyAssignmentMap.get(x.County) !== 0) {
          action.ydoc.transact(() => {
            countyAssignmentMap.set(x.County, 0);
          });
        }
      });

      return returnContextObject();
    }
    case "randomFill": {
      let countyAssignmentMap = action.ydoc.getMap("countyAssignment");
      sampleCountyAssignment2.forEach((x) => {
        if (countyAssignmentMap.get(x.countyName) !== x.salespersonId) {
          action.ydoc.transact(() => {
            countyAssignmentMap.set(x.countyName, x.salespersonId);
          });
        }
      });

      return returnContextObject();
    }
    case "syncMapToContext": {
      let currentMap = action.ydoc.getMap("countyAssignment");

      for (const [key, value] of Object.entries(context.countyAssignment)) {
        context.countyAssignment[key] = 0;
      }
      currentMap._map.forEach((element) => {
        let countyName = element.parentSub;
        let assignment = element.content.arr[0];

        if (context.countyAssignment[countyName] !== assignment) {
          context.countyAssignment[countyName] = assignment;
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
