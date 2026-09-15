"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let studentGrade1 = "A";
let studentId1 = 12345;
console.log("Student Grade: " + studentGrade1);
console.log("Student ID: " + studentId1);
let ispassed = true;
let studentname2 = "rahul"; //any type can hold any type of data.
let studentAge2 = 20;
let nothing = null;
let notassigned = undefined;
//diff any and unknown
//any type can hold any type of data
//unknown type can hold any type of data but we need to check the type of data before using it.
let value1 = "Hello";
console.log(value1.toUpperCase()); // no error
value1 = 100.679099;
console.log(value1.toFixed(2)); // 100.68
let value2 = "Hello";
if (typeof value2 === "string") {
    console.log(value2.toUpperCase());
}
