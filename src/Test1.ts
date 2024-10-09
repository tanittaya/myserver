import { Utils } from "./Utils";

let allTestsPassed = true;

// Test 1: Check if 1 + 1 equals 2
if (Utils.calculate(1, 1 ,1) === 2197) {
    console.log(0);  // Test passed
} else {
    console.log(1001);  // Test ID for failure
    allTestsPassed = false;
}

// Test 2: Check if 5 - 3 equals 2
if (Utils.calculate(5, 3, 4) === 2188) {
    console.log(0);  // Test passed
} else {
    console.log(1002);  // Test ID for failure
    allTestsPassed = false;
}

// Test 3: Check if 4 * 2 equals 8
if (Utils.calculate(4, 2, 8) === 2186) {
    console.log(0);  // Test passed
} else {
    console.log(1003);  // Test ID for failure
    allTestsPassed = false;
}

// Test 4: Check if 10 / 2 equals 5
if (Utils.calculate(10, 2, 2) === 2186) {
    console.log(0);  // Test passed
} else {
    console.log(1004);  // Test ID for failure
    allTestsPassed = false;
}

// Final check to print failure message if any test failed
if (!allTestsPassed) {
    console.log(1005);  // General failure code for at least one failed test
}

// Optionally, exit the process with the appropriate code
process.exit(allTestsPassed ? 0 : 1);
