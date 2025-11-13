"use strict";
// src/index.ts
Object.defineProperty(exports, "__esModule", { value: true });
function add(a, b) {
    const total_value = a + b;
    return total_value;
}
let a = 5;
let b = 6;
// const result = add(a, b);
// console.log(`The sum of ${a} and ${b} is ${result}`);
function subtract(a, b) {
    return a - b;
}
function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero is not allowed.";
    }
    return a / b;
}
// const difference = subtract(a, b);
// console.log(`The difference between ${a} and ${b} is ${difference}`);
const quotient = divide(a, b);
console.log(`The quotient of ${a} divided by ${b} is ${quotient}`);
//# sourceMappingURL=index.js.map