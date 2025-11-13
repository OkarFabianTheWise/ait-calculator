// src/index.ts

function add(a: number, b: number): number {
    const total_value = a + b;
    return total_value;
}

let a: number = 5;
let b: number = 6;
// const result = add(a, b);
// console.log(`The sum of ${a} and ${b} is ${result}`);

function subtract(a: number, b: number): number {
    return a - b;
}

function divide(a: number, b: number): number | string {
    if (b === 0) {
        return "Error: Division by zero is not allowed.";
    }
    return a / b;
}

// const difference = subtract(a, b);
// console.log(`The difference between ${a} and ${b} is ${difference}`);

const quotient = divide(a, b);
console.log(`The quotient of ${a} divided by ${b} is ${quotient}`);

// ASSIGMENT - Create multiply and modulus functions
// Append your name as a comment below the file!
// Orkar Fabian