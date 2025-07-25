// variable - JavaScript variables can be declared using `var`, `let`, or `const`.
// `var` is function-scoped, `let` and `const` are block-scoped.
// `const` is used for constants that should not change.
// Variables can hold different data types like numbers, strings, arrays, objects, etc.

// Example of variable declaration and initialization:
let a = 10; //a is a variable that holds the number 10
let b = "Hello"; //b is a variable that holds the string "Hello"
console.log(a);
console.log(b.replace('Hello','hi Sarthak'));
console.log(typeof a, typeof b);
// primitive data type: number, string, boolean, null, undefined, symbol, bigint
//non primitive data type : object ,array ,function
// object - An object is a collection of properties, where each property is defined as a key-value pair.
let person = {
    name: "sarthak",
    age: 21,
    isstudent: false,
    hobbies: ["coding", "gaming"]
};
console.log(person);
// Accessing object properties
console.log(person.name);
console.log(person.age);
console.log(person.hobbies[0]);
// Modifying object properties
person.age = 22;    
console.log(person.age);
// Adding new properties
person.gender = "male";
console.log(person.gender);
// Deleting properties
delete person.isstudent;
console.log(person.isstudent); // undefined, since it has been deleted