"use strict";
import { Utils } from './Utils'; // นำเข้า Utils ที่มีฟังก์ชัน calculate

let allTestsPassed = true;

// Test: meal1 = 800, meal2 = 800, meal3 = 1000
if (Utils.calculate(1, 1, 1) === 2197) {
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
