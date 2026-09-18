//  An enum (enumeration) is a user defined data type that allows a varaibale to have a fixed set of named constant values.
//key: supports string values
//numeric by default

export {}

//variable which contains the named constants

enum Weekdays{
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday
}
console.log(Weekdays.Monday); // Output: 0
console.log(Weekdays.Tuesday); // Output: 1
console.log(Weekdays.Wednesday); // Output: 2=]'

//numeric by value can be assigned to the enum members
enum status{
    Done=101,
    Notdone=102,
    inprogress=103,
    rejected=104
}

console.log(status.Done); // Output: 101
console.log(status.Notdone); // Output: 102
console.log(status.inprogress); // Output: 103
console.log(status.rejected); // Output: 104