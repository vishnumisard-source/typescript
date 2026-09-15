//Arrays is a colle ction of multiple values of the same datatype stored in a single varaibale 
//same datatype ,accessed using index,start from 0,arrays are mutable,arrays are dynamic in nature
//export {};
let marks:number[]=[10,20,30,40,50];
console.log(marks);

//string array string means only string values are allowed in the array
let fruits:string[]=["apple","banana","mango"];
console.log(fruits);

//boolean array
let isAvailable:boolean[]=[true,false,true];
console.log(isAvailable);

//access array elements 
let colors:string[]=["red","green","blue"];
console.log(colors[0]); // Output: red
console.log(colors[1]); // Output: green
console.log(colors[3]);//undefined because index 3 does not exist in the array

let cities:string[]=["delhi","mumbai","kolkata"];
console.log(cities[0]); // Output: delhi
console.log(cities[1]); // Output: mumbai
console.log(cities[2]); // Output: kolkata
cities.push("chennai"); //adding new element to the array
console.log(cities); // Output: ["delhi", "mumbai", "kolkata", "chennai"]
let data = cities.push("chennai");
console.log(data); // Output: 4 (the new length of the array)