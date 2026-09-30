//A type aliases is used to creatae a custoem name for an existin datatype.using type keyword.
export {}

//example 1 : Alias for string
type myString = string;

let studentName: myString = "John Doe";
console.log(studentName); // Output: John Doe

//Example 2 : Alias for number
type myNumber = number;

let studentAge: myNumber = 20;
console.log(studentAge); // Output: 20

//example 3 : Alias for an object type
type Student = {
    name: string;
    age: number;
    grade: string;
};

let student: Student = {
    name: "John Doe",
    age: 20,
    grade: "A"
};
console.log(student); // Output: { name: 'John Doe', age: 20, grade: 'A' }

//Alias with function
type product = {
    id:number;
    name:string;
    price:number;
};

function displayProduct(Product:product):void{
         console.log(Product.id);
         console.log(Product.name);
         console.log(Product.price);
}

displayProduct({
    id:101,
    name:"Laptop",
    price:65000
});

//if we made relation between objects then thats call inheritance


