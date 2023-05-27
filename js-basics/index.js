// Comment uses double slashes in the javascript
console.log("Hello World");

// VARIABLES in JavaScript
let name = 'Vinayak';
console.log(name);

// Name cannot be a reserved keyword
// Give meaningful variable names
// Variables can't start with a number
// Cannot contain space/hyphen
// They are case-sensitive
// Multiple variables can be initialized with comma separation
// Best practice -> Declare different variables on different liines

// CONSTANTS in JavsScript
// Declare as const
const interestRate = 0.6;
// interestRate = .5;

// Primitive Types in JavaScript
let firstName = "Vinayak";       // String Literal
let age = 16;                    // Number Literal
let isApproved = false;         // Boolean Literal
let lastName = undefined;       // Special Literal
let selectedColor = null;       // Special Literal

// JS is a dynamically typed language
let fullName = "Vinayak Nayak";
console.log(typeof(fullName));
fullName = 1;
console.log(typeof(fullName));
// All numbers are numbers, there is no float or integer
console.log(typeof(lastName));
console.log(typeof(selectedColor));

// Reference Types -> Objects/Arrays/Functions
name = "Vinayak";
age = 16;

let person = {
    name:"Vinayak",
    age:16
};  // Object, it could be declared also as a constant

console.log(person.name);
person.name = "Abhijit";
console.log(person['name']);

const prop = 'name'
console.log(person[prop])

// Arrays
let selectedColors = ['red', 'blue'];
console.log(selectedColors);

// Possible to dynamically adjust the length and add mixed types
selectedColors[2] = 'green';
selectedColors[3] = 0;
console.log(selectedColors);

// Array is an object in JavaScript
console.log(selectedColors.length);

// Functions in JavaScript
// name is a parameter of the function
// name is an argument passed by caller to the parameter
// Perform a task
function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
}

greet("Vinayak", "Nayak");

// Types of functions
// Calculate a value
function square(number){
    return number * number
}

// let numsquared = ;
console.log(square(2));



