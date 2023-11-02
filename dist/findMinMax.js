"use strict";
function findMaxValue(array) {
    if (array.length === 0) {
        return undefined;
    }
    const maxValue = array.reduce((accumulator, currentValue) => {
        return Math.max(accumulator, currentValue);
    });
    return maxValue;
}
function findMinValue(array) {
    if (array.length === 0) {
        return 0;
    }
    const minValue = array.reduce((accumulator, currentValue) => {
        return Math.min(accumulator, currentValue);
    });
    return minValue;
}
const arr = [10, 20, 30, 40, 50];
const maxVal = findMaxValue(arr);
const minVal = findMinValue(arr);
if (maxVal !== undefined && minVal !== undefined) {
    console.log(`The maximum value is: ${maxVal} & the minimum value is : ${minVal}`);
}
else {
    console.log("The array is empty.");
}
//# sourceMappingURL=findMinMax.js.map