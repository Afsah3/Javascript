// First line of code in Js
// console.log("Hello, World!");

// Check the data
// let name = "Afsa";
// let number = 25;
// let Bignumber = 190071999003434591n;
// let isMarried =false;
// let address = null;
// let phoneNumber;
// let age = Symbol(2);
// let year = Symbol(2);

// let isEqual = age === year;

// console.log(typeof name);
// console.log(typeof number);
// console.log(typeof Bignumber);
// console.log(typeof isMarried);
// console.log(typeof address);
// console.log(typeof phoneNumber);
// console.log(typeof age);
// console.log(typeof year);
// console.log(isEqual);



// Non-Primitive Data types in Javascript
// in Javascript we have only one main core javascript non-primitive data types which is Object.
// The reset becomes as a subtype of the Object datatype because the Object datatype is a collection of key-vale

// An object
// let object = {
//     name: "string",
//     age: number,
//     boolean: true,
//     null: null,
//     undefined: undefined,

// }

// // Array

// // Function
// let add = function(a, b)
// {
//     return a + b;
// }

// // Dates
// let date = new Date();
// console.log(date);

// //Regular expression
// let regex = /abc/;

// Declaration of variables 
// > let
// > const
// > var

// Variable and Value
// Variable is an element that is used to store data in memory in javascript
// Value is the data that is stored in memory in javascript

// let can be declared once and updated
// let name = "Afsa";
name = "UWASE"; // These is acceptable because we are updating the value of the variable name and its done with let

// const can be declared once and not updateable

const userName = "Hassan"; // can be declared once but never updateable

 var names = "Ali";
 names = "Ahmed";
 var names = "Ian";
// console.log(names);

// global scope
function globalScope(){
    console.log(name);
}
globalScope();

// local scope (function scope)
function localScope(){
    let name = "Ali";
    console.log(name);

}
localScope();

// Block scope
if(true){
    let blocklet = "I am trapped here";
    var leakedVar = "I escaped the block!";
    console.log(blocklet);
}
console.log(leakedVar);

// tdz (temporol dead zone)
// console.log(test);
// let test = "I am in the tdz";
// console.log(test);

const quote = "She said \"Muraho\""; 
console.log(quote);

const path = "C:\\coding\\week05"; 
console.log(path);

const twoLines = "First\nSecond"; 
console.log(twoLines);

console.log(10 / 0);