"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let studentName = "John Doe";
console.log(studentName); // Output: John Doe
let studentAge = 20;
console.log(studentAge); // Output: 20
let student = {
    name: "John Doe",
    age: 20,
    grade: "A"
};
console.log(student); // Output: { name: 'John Doe', age: 20, grade: 'A' }
function displayProduct(Product) {
    console.log(Product.id);
    console.log(Product.name);
    console.log(Product.price);
}
displayProduct({
    id: 101,
    name: "Laptop",
    price: 65000
});
//if we made relation between objects then thats call inheritance
