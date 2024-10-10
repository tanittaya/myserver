"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Utils_1 = require("./Utils"); // นำเข้า Utils ที่มีฟังก์ชัน calculate
const app = (0, express_1.default)();
const port = 3000;
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
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
        }
        else if (totalCalories < dailyCalorieRequirement) {
            const missingCalories = dailyCalorieRequirement - totalCalories;
            resultMessage = `คุณขาดแคลอรี่อีก ${missingCalories} แคลอรี่`;
        }
        else {
            resultMessage = "คุณได้รับแคลอรี่พอดีกับที่ต้องการต่อวันแล้ว";
        }
        // ทำการทดสอบค่าแคลอรี่ที่คำนวณด้วย calculate (ใช้ async/await)
        const testResult = yield Utils_1.Utils.calculate(meal1, meal2, meal3);
        let testMessage = "";
        if (testResult === 0) {
            testMessage = "Test passed!";
        }
        else {
            testMessage = `Test failed! Expected 0, but got ${testResult}`;
        }
        // ส่งผลลัพธ์กลับไปที่หน้าเว็บ
        res.send(`
            <h1>คำนวณแคลลอรี่ของผู้ชาย<h1>
            <h3>โดยเฉลี่ย ผู้ชายต้องการแคลอรี่ต่อวันคือ 2200 Kcal ต่อวัน<h3>
        <h2>ผลลัพธ์การคำนวณแคลอรี่ ต่อวันที่ควรได้รับใน1วันขอผู้ชาย </h2>
            <p>${resultMessage}</p>
            <h2>ผลการทดสอบ การคำนวณแคลลอรี่ </h2>
            <p>${testMessage}</p>
        `);
    }
    catch (error) {
        res.status(500).send("เกิดข้อผิดพลาด: " + ((error === null || error === void 0 ? void 0 : error.message) || "ไม่สามารถระบุข้อผิดพลาดได้"));
    }
}));
// เริ่มทำงานของเซิร์ฟเวอร์
app.listen(port, () => {
    console.log('Server is running on port ' + port);
});
