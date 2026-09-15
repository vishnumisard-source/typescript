//datatypes type defines the type of data that a variable can hold. we can use datatypes to define the type of data that a variable can hold. we can use datatypes to define the type of data that a function can return. we can use datatypes to define the type of data that a function can accept as parameters. we can use datatypes to define the type of data that a class can have as properties. we can use datatypes to define the type of data that a class can have as methods. we can use datatypes to define the type of data that an interface can have as properties. we can use datatypes to define the type of data that an interface can have as methods. we can use datatypes to define the type of data that an enum can have as members. we can use datatypes to define the type of data that a type alias can have as members. we can use datatypes to define the type of data that a namespace can have as members. we can use datatypes to define the type of data that a module can have as members. we can use datatypes to define the type of data that a decorator can have as members. we can use datatypes to define the type of data that a generic type parameter can have as members.
//string,Number,Boolean,Any,Unknown,void,Null,undefined
//export keyword use all the code in this file to other files in the project.
//to run this terminal run terminal tsc type then type node 2.datatypes.js this u will get output in the terminal.
export {};
let studentGrade1:string = "A";
let studentId1:number = 12345;
console.log("Student Grade: " + studentGrade1);
console.log("Student ID: " + studentId1);

let ispassed : boolean = true;
let studentname2 : any = "rahul";//any type can hold any type of data.
let studentAge2 : unknown = 20;
let nothing : null = null;
let notassigned : undefined = undefined;

//diff any and unknown
//any type can hold any type of data
//unknown type can hold any type of data but we need to check the type of data before using it.
let value1: any = "Hello";
console.log(value1.toUpperCase()); // no error
value1 = 100.679099;
console.log(value1.toFixed(2)); // 100.68
let value2: unknown = "Hello";
if (typeof value2 === "string") {
	console.log(value2.toUpperCase());
}
