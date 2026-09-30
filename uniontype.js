"use strict";
//A union type allows a variable to store more than one data type by using the (|) pipe operator
//Maintain code safety
//Reduces the need for any
Object.defineProperty(exports, "__esModule", { value: true });
let employeeId;
employeeId = 101;
employeeId = "sai";
console.log(employeeId); //101
//Example 2 boolean or number
let status;
status = true;
console.log(status);
status = 1;
console.log(status);
function printID(id) {
    console.log("employee id", id);
}
printID(1);
printID("employ");
let mixedValue;
//TypeChecking
function displayValue(Value) {
    if (typeof Value == "string") {
        console.log(Value.toUpperCase());
    }
    else {
        console.log(Value.toFixed(2));
    }
}
displayValue("hello");
displayValue(1234.67);
//Example 5 :Union type with Array
let data = ["mango", "banana", 1, 2];
//Real time example
