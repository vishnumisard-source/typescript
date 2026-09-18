"use strict";
//Arrays is a colle ction of multiple values of the same datatype stored in a single varaibale 
//same datatype ,accessed using index,start from 0,arrays are mutable,arrays are dynamic in nature
//export {};
let marks = [10, 20, 30, 40, 50];
console.log(marks);
//string array string means only string values are allowed in the array
let fruits = ["apple", "banana", "mango"];
console.log(fruits);
//boolean array
let isAvailable = [true, false, true];
console.log(isAvailable);
//access array elements 
let colors = ["red", "green", "blue"];
console.log(colors[0]); // Output: red
console.log(colors[1]); // Output: green
console.log(colors[3]); //undefined because index 3 does not exist in the array
let cities = ["delhi", "mumbai", "kolkata"];
console.log(cities[0]); // Output: delhi
console.log(cities[1]); // Output: mumbai
console.log(cities[2]); // Output: kolkata
//example 
let a = 1;
cities.push("chennai"); //adding new element to the array
console.log(cities); // Output: ["delhi", "mumbai", "kolkata", "chennai"]
let data = cities.push("chennai"); //push method we can add single or mutiple value 
console.log(data); // Output: 4 (the new length of the array)]
//what is push method
//which is useful to add new element to the array at the end of the array
//push method returns the 
//remember
//what is return type (void or nonvoid)
//what are the parameters of the function
function abc() {
    return 1;
}
//here abc return number 
cities.pop(); //removes the last element from the array
console.log(cities); // Output: ["delhi", "mumbai", "kolkata"]
let data1 = cities.pop(); //pop method removes the last element from the array and returns it
console.log(data1); // Output: kolkata
console.log(cities); // Output: ["delhi", "mumbai"]
//pop..no need to pass the parameters
let students1 = ["john", "jane", "jim"];
students1.unshift("jack"); //adds new element to the beginning of the array
console.log(students1); // Output: ["jack", "john", "jane", "jim"]
//when method type use the () then it is method type
students1.length; //returns the length of the array
console.log(students1.length); // Output: 4
let data2 = students1.length; //length property returns the number of elements in the array
//pop..no need to pass the parameters
let students = ["john", "jane", "jim"];
students.unshift("jack"); //adds new element to the beginning of the array
console.log(students); // Output: ["jack", "john", "jane", "jim"]
//when method type use the () then it is method type
students.length; //returns the length of the array
console.log(students.length); // Output: 4
let data3 = students.length; //length property returns the number of elements in the array
//array i want mixed values---yes
let data4 = [1, "hello", true, 2.5];
let employees = ["john", "jane", "jim"];
console.log(employees); // Output: ["john", "jane", "jim"]
console.log("first employee is " + employees[0]); // Output: first employee is john
console.log(employees.length); // Output: 3
