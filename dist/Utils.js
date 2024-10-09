"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
function calculate(meal1, meal2, meal3) {
    const dailyCalorieRequirement = 2200;
    const totalCalories = meal1 + meal2 + meal3;
    if (totalCalories > dailyCalorieRequirement) {
        const excessCalories = totalCalories - dailyCalorieRequirement;
        return excessCalories;
    }
    else {
        return dailyCalorieRequirement - totalCalories;
    }
}
exports.Utils = { calculate };
