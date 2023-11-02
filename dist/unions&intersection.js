"use strict";
const inputValue = (val) => {
    if (typeof val === 'number') {
        return val * 23;
    }
    else if (typeof val === "string") {
        return val.toUpperCase();
    }
    else {
        throw new Error("Invalid inputs");
    }
};
console.log(inputValue(55));
console.log(inputValue("devam"));
//# sourceMappingURL=unions&intersection.js.map