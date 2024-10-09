"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
function calculate(meal1, meal2, meal3) {
    const dailyCalorieRequirement = 2200;
    const totalCalories = meal1 + meal2 + meal3;
    // ถ้าแคลอรี่รวมมากกว่าความต้องการต่อวัน
    if (totalCalories > dailyCalorieRequirement) {
        const excessCalories = totalCalories - dailyCalorieRequirement;
        return excessCalories; // คืนค่าแคลอรี่ที่เกิน
    }
    else {
        // ถ้าแคลอรี่รวมไม่ถึง ให้คืนค่าจำนวนแคลอรี่ที่ขาด
        return dailyCalorieRequirement - totalCalories;
    }
}
exports.Utils = { calculate };
