"use strict";
function calculateAverage(numbers) {
    if (numbers.length === 0) {
        return 0;
    }
    const sum = numbers.reduce((total, num) => total + num, 0);
    const average = sum / numbers.length;
    return average;
}
const numArray = [1, 2, 3, 4, 5];
const avgResult = calculateAverage(numArray);
console.log(`The average is: ${avgResult}`);
//# sourceMappingURL=avgcal.js.map