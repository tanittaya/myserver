"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Utils_1 = require("./Utils"); // นำเข้า Utils ที่มีฟังก์ชัน calculate

let allTestsPassed = true;

// Test: meal1 = 800, meal2 = 800, meal3 = 1000
if (Utils_1.Utils.calculate(800, 800, 1000) === 2600) {
    console.log(0); // ทดสอบผ่าน
} else {
    console.log(1001); // ทดสอบล้มเหลว
    allTestsPassed = false;
}

// เช็คว่ามีการทดสอบใดล้มเหลวหรือไม่
if (!allTestsPassed) {
    console.log(1005); // มีการทดสอบล้มเหลว
}

// ออกจากโปรแกรมด้วยรหัสที่เหมาะสม
process.exit(allTestsPassed ? 0 : 1);
