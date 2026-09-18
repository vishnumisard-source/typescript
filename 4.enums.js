"use strict";
//  An enum (enumeration) is a user defined data type that allows a varaibale to have a fixed set of named constant values.
//key: supports string values
//numeric by default
Object.defineProperty(exports, "__esModule", { value: true });
//variable which contains the named constants
var Weekdays;
(function (Weekdays) {
    Weekdays[Weekdays["Monday"] = 0] = "Monday";
    Weekdays[Weekdays["Tuesday"] = 1] = "Tuesday";
    Weekdays[Weekdays["Wednesday"] = 2] = "Wednesday";
    Weekdays[Weekdays["Thursday"] = 3] = "Thursday";
    Weekdays[Weekdays["Friday"] = 4] = "Friday";
})(Weekdays || (Weekdays = {}));
console.log(Weekdays.Monday); // Output: 0
console.log(Weekdays.Tuesday); // Output: 1
console.log(Weekdays.Wednesday); // Output: 2=]'
//numeric by value can be assigned to the enum members
var status;
(function (status) {
    status[status["Done"] = 101] = "Done";
    status[status["Notdone"] = 102] = "Notdone";
    status[status["inprogress"] = 103] = "inprogress";
    status[status["rejected"] = 104] = "rejected";
})(status || (status = {}));
console.log(status.Done); // Output: 101
console.log(status.Notdone); // Output: 102
console.log(status.inprogress); // Output: 103
console.log(status.rejected); // Output: 104
