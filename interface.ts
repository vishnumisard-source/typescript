//An interface defines the structure of an object. 
// It is a way to define a contract for the shape of an object, specifying the properties and their types that an object must have.
//used with objects and classes
export {}
//example 1
interface student {
    id: number;
    name: string;
    isActive: boolean;
}

let Student : student = {
    id: 1,
    name: "John Doe",
    isActive: true

}
console.log(Student.id); // Output: 1
console.log(Student.name); // Output: John Doe
console.log(Student.isActive); // Output: true
console.log(Student); // Output: { id: 1, name: 'John Doe', isActive: true }

//example 2 Employee interface
interface Employee {
    empId: number;
    empName: string;
    empSalary: number;
}
let Employee1: Employee = {
    empId: 101,
    empName: "Jane Smith",
    empSalary: 50000
}
console.log(Employee1.empId); // Output: 101
console.log(Employee1.empName); // Output: Jane Smith
console.log(Employee1.empSalary); // Output: 50000

//example 3 optional properties in interface
interface customer {
    custId: number;
    custName: string;
    custEmail?: string; // optional property
}

let Customer1: customer = {
    custId: 1,
    custName: "Alice Johnson"
};
console.log(Customer1.custId); // Output: 1
console.log(Customer1.custName); // Output: Alice Johnson
console.log(Customer1.custEmail); // Output: undefined

//optional properties in interface here in example empSalary is optional property
function emp(empid: number, empName: string, empSalary?: number) {
    console.log(`Employee ID: ${empid}`);
    console.log(`Employee Name: ${empName}`);
    if (empSalary !== undefined) {
        console.log(`Employee Salary: ${empSalary}`);
    }
}

//example 4 : Interface with function type
interface Product{
    productId: number;
    productName: string;
    productPrice: number;
}

function displayProduct(product: Product): void {
    console.log(`Product ID: ${product.productId}`);
    console.log(`Product Name: ${product.productName}`);
    console.log(`Product Price: ${product.productPrice}`);
}

displayProduct({ productId: 1, 
    productName: "Laptop",
     productPrice: 1000 });


//Nested Interface : An interface with another interface
interface Address {
    street: string;
    city: string;
    country: string;
}

interface User{
    userId: number;
    userName: string;
    userAddress: Address; // Nested interface
}

let user : User ={
    userId: 1,
    userName: "John Doe",
    userAddress: {
        street: "123 Main St",
        city: "New York",
        country: "USA"
    }
}

//exmaple 6:Real time example
interface Order {
    orderId: number;
    orderDate: Date;
    orderAmount: number;
};

interface Customer {
    customerId: number;
    customerName: string;
    customerEmail: string;
    customerOrders: Order[]; // Array of orders
    getCustomerDetails(): string; // Method to get customer details
    updateCustomerEmail(newEmail: string): void; // Method to update customer email
    createCustomerOrder(order: Order): void; // Method to create a new order
    fetechCustomerOrders(): Order[]; // Method to fetch customer orders
}