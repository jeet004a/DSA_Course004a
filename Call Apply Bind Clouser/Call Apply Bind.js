// *****************************************************Basic Call method and question*************************************************
/*

Defination- The call() method is a built-in function method in JavaScript that allows you to invoke a function with an explicit this value and individual arguments.

call() is a method of JavaScript functions that calls the function immediately, using a specified this context and arguments provided one by one.

** Basic Syntex
    - function.apply(thisArg, "value1","Value2")  First parameter is this argument and thes arguments are passed indivually.
*/
//Below Basic Example
function printD() {
    return `Your name is ${this.name}`
}

let obj = {
    name: "Jeet",
}

console.log(printD.call(obj))

//Below is the example that call method only use one this not more that that and rest the arguments that call methods use. Example below

function greet(subject) {
    console.log(`Hello ${this.name} and studied ${subject}`) //If you access subject using this method it will raise an error. Becase here subject is an argument object that is why its work
}

const obj1 = {
    name: "Jeet"
}

// console.log()
greet.call(obj1, "Math")

//Q1 How we use multiple object using call
function greet() {
    return `My name is ${this.name} and subject is ${this.subject}`
}

let obj1 = {
    name: "jeet"
}

let obj2 = {
    subject: "math"
}

console.log(greet.call({...obj1, ...obj2 }))

//Q2 How we can pass mul



// *****************************************************End Basic Call method and question*************************************************

























// *****************************************************Basic Apply method and question*************************************************

/*
Defination:- The apply() method is a built-in function method in JavaScript that allows you to invoke a function with a specified this context and arguments passed as an array (or array-like object).

apply() calls a function immediately, using a given this value and an array (or array-like object) of arguments.

** Basic Syntex
    - function.apply(thisArg, [argsArray])  First parameter is this argument and the array of arguments are baasically used via name.

*/

function greet(subject, mmm) {
    return `My name is ${this.name} and ${this.degree} i studied ${subject} ${mmm}`
}

let obj = {
    name: "Jeet",

}
let obj2 = {
    degree: "MCA"
}

console.log(greet.apply({...obj, ...obj2 }, ["Math", "Kaise ho"]))

//Diffrece Between call and apply 
// The only diffrece Between call and apply is that the 2nd parameter (argument object). using call you passed individually but in case of apply you passed as a single array

// *****************************************************End Basic Apply method and question*************************************************
















// *****************************************************Basic Bind method and question*************************************************
/*
Defination of Bind
The bind() method is a built-in function method in JavaScript that creates and returns a new function with a specified this value and, optionally, preset arguments.

bind() does not call the function immediately. Instead, it returns a new function where this is permanently set to the provided value.

*/

// Basic example 
function greet() {
    return `My name is ${this.name}`
}

let obj1 = {
    name: "Jeet"
}

let abc = greet.bind(obj1)

console.log(abc())


//Below is another example
function greet(m, a, p) {
    return `My name is ${this.name} and ${this.subject} and ${a.xyz} and ${m} and ${p}`
}

let obj1 = {
    name: "Jeet"
}

let obj2 = {
    subject: "Math"
}

let obj3 = {
    xyz: "xyz"
}

let abc = greet.bind({...obj1, ...obj2 }, "Jack")

console.log(abc(obj3, "Kitto"))