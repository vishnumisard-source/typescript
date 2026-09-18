//typle is a special type of array which can hold values of different types. It is a fixed length array where each element can have a different type. In TypeScript, tuples are defined using square brackets [] and the types of the elements are specified in order.
//simple way  is a special type of array that allows storing multiple values of different data types in a fixed data.
//key points : stores different data types,fixed number of elements,
//maintain order
//accessed using index
//improve type safety

let student: [number, string] = [1, "John"];
console.log(student[0]); // Output: 1
console.log(student[1]); // Output: John

//example is employee details
let employee:[number,string,number]=[1,"John",50000];
console.log(employee[0]); // Output: 1
console.log(employee[1]); // Output: John
console.log(employee[2]); // Output: 50000


let product:[string,number,boolean]=["Laptop",1000,true];
console.log(product[0]); // Output: Laptop
console.log(product[1]); // Output: 1000
console.log(product[2]); // Output: true

let user:[string,number,boolean,string]=["John",25,true,"USA"];
user[0]="jane";//john is replaced by jane
console.log(user[0]); // Output: jane
console.log(user);//"Jane",25,true,"USA"