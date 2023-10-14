import { populationData } from "./AppContext";
import { CountySvgData } from "./CountySvgData";
import { sampleCountyAssignment } from "./SampleData";

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
      // let oldSalesperson = context.countyAssignment[action.countyName];
      // if (oldSalesperson !== 0) {
      //   updateSalepersonShopCount(context, oldSalesperson);
      // }

      //Need to figure out how to keep the Shop Count for each Salesperson ID
      // Currently Adds correctly, but doesn't subtract anything

      context.countyAssignment[action.countyName] = context.selectedSalesperson;
      updateSalepersonShopCount(context, context.selectedSalesperson);

      // context.salespeople.forEach((element, index) => {
      //   if (index > 0) {
      //     updateSalepersonShopCount(context, index);
      //   }
      // });
      // if (context.selectedSalesperson !== 0) {
      //   updateSalepersonShopCount(context, context.selectedSalesperson);
      // }

      return {
        selectedSalesperson: context.selectedSalesperson,
        countyAssignment: context.countyAssignment,
        salespeople: context.salespeople,
        shopCount: context.shopCount,
      };
    }
    case "randomFill": {
      //let test = Math.floor(Math.random() * 5) + 1;
      sampleCountyAssignment.forEach((x) => {
        context.countyAssignment[x.countyName] = x.salespersonId;
      });
      return {
        selectedSalesperson: context.selectedSalesperson,
        countyAssignment: context.countyAssignment,
        salespeople: context.salespeople,
        shopCount: context.shopCount,
      };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

function updateSalepersonShopCount(currentCtxt, idToUpdate) {
  let shopSum = 0;
  CountySvgData.forEach((county) => {
    if (currentCtxt.countyAssignment[county.County] === idToUpdate) {
      shopSum += populationData[county.County];
    }
  });
  currentCtxt.shopCount[idToUpdate] = shopSum;
}
