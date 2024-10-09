"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const Utils_1 = require("./Utils"); // นำเข้า Utils ที่มีฟังก์ชัน calculate
const app = (0, express_1.default)();
const port = 3000;

app.get('/', (req, res) => {
    const meal1 = parseInt(req.query.meal1); // รับค่าแคลอรี่จากมื้อที่ 1
    const meal2 = parseInt(req.query.meal2); // รับค่าแคลอรี่จากมื้อที่ 2
    const meal3 = parseInt(req.query.meal3); // รับค่าแคลอรี่จากมื้อที่ 3
    
    // ตรวจสอบว่าค่าที่รับมาถูกต้องหรือไม่
    if (isNaN(meal1) || isNaN(meal2) || isNaN(meal3)) {
        res.send("กรุณาใส่แคลอรี่ของแต่ละมื้อให้ถูกต้อง");
        return;
    }   

    const dailyCalorieRequirement = 2200;
    const totalCalories = meal1 + meal2 + meal3;
    let resultMessage = "";

    // คำนวณแคลอรี่และแสดงผล
    if (totalCalories > dailyCalorieRequirement) {
        const excessCalories = totalCalories - dailyCalorieRequirement;
        resultMessage = `คุณได้รับแคลอรี่มากเกินไป ${excessCalories} แคลอรี่`;
    } else if (totalCalories < dailyCalorieRequirement) {
        const missingCalories = dailyCalorieRequirement - totalCalories;
        resultMessage = `คุณขาดแคลอรี่อีก ${missingCalories} แคลอรี่`;
    } else {
        resultMessage = "คุณได้รับแคลอรี่พอดีกับที่ต้องการต่อวันแล้ว";
    }

    // ทำการทดสอบค่าแคลอรี่ที่คำนวณด้วย calculate
    const testResult = Utils_1.Utils.calculate(meal1, meal2, meal3);
    let testMessage = "";
    if (testResult === 0) {
        testMessage = "Test passed!";
    } else {
        testMessage = `Test failed! Expected 0, but got ${testResult}`;
    }

    // ส่งผลลัพธ์กลับไปที่หน้าเว็บ
    res.send(`
        <h1>ผลลัพธ์การคำนวณแคลอรี่</h1>
        <p>${resultMessage}</p>
        <h2>ผลการทดสอบ</h2>
        <p>${testMessage}</p>
    `);
});

// เริ่มทำงานของเซิร์ฟเวอร์
app.listen(port, () => {
    console.log('Server is running on port ' + port);
});
