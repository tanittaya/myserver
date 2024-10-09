"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
function calculate(meal1, meal2, meal3) {
    const dailyCalorieRequirement = 2200;
    const totalCalories = meal1 + meal2 + meal3;
    if (totalCalories > dailyCalorieRequirement) {
        const excessCalories = totalCalories - dailyCalorieRequirement;
        return `คุณกินเกิน ${excessCalories} แคลอรี่`;
    }
    else {
        return `คุณยังเหลืออีก ${dailyCalorieRequirement - totalCalories} แคลอรี่ ที่ควรได้รับ`;
    }
}
exports.Utils = { calculate };
