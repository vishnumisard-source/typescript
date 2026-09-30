"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let Student = {
    id: 1,
    name: "John Doe",
    isActive: true
};
console.log(Student.id); // Output: 1
console.log(Student.name); // Output: John Doe
console.log(Student.isActive); // Output: true
console.log(Student); // Output: { id: 1, name: 'John Doe', isActive: true }
let Employee1 = {
    empId: 101,
    empName: "Jane Smith",
    empSalary: 50000
};
console.log(Employee1.empId); // Output: 101
console.log(Employee1.empName); // Output: Jane Smith
console.log(Employee1.empSalary); // Output: 50000
let Customer1 = {
    custId: 1,
    custName: "Alice Johnson"
};
console.log(Customer1.custId); // Output: 1
console.log(Customer1.custName); // Output: Alice Johnson
console.log(Customer1.custEmail); // Output: undefined
//optional properties in interface here in example empSalary is optional property
function emp(empid, empName, empSalary) {
    console.log(`Employee ID: ${empid}`);
    console.log(`Employee Name: ${empName}`);
    if (empSalary !== undefined) {
        console.log(`Employee Salary: ${empSalary}`);
    }
}
function displayProduct(product) {
    console.log(`Product ID: ${product.productId}`);
    console.log(`Product Name: ${product.productName}`);
    console.log(`Product Price: ${product.productPrice}`);
}
displayProduct({ productId: 1,
    productName: "Laptop",
    productPrice: 1000 });
let user = {
    userId: 1,
    userName: "John Doe",
    userAddress: {
        street: "123 Main St",
        city: "New York",
        country: "USA"
    }
};
;
