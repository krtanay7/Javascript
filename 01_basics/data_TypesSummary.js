//NOTES:
//JavaScript is a DYNAMIC language and not static,
// which means that variables can hold values of different types during runtime. 
// Unlike languages such as Typescript or Java, you don't need to declare the data type of a variable explicitly.

// (1)primitive Data Type:

// 7types : String, Number, Boolean , Null , Undefined , Symbol , BigInt 

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null // Empty Value 
let userEmail; // it has UNDEFINED value 

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // false

// const bigNumber = 3456543576654356754n // Big Int 



// (2) Reference Type (Non primitive):
// Array, Objects ,Functions 

// ARRAY
const heros = ["shaktiman", "naagraj", "doga"];

//OBJECTS
let myObj = {
    name: "hitesh",
    age: 22,
}


//FUNCTIONS
const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);
console.log(typeof outsideTemp);
console.log(typeof scoreValue);


// Return type of variables in JavaScript
// 
// =======================
//(1) Primitive Datatypes:
// ---------------------------------------------------
//        Number =>     number
//        String  =>        string
//        Boolean  =>    boolean
//        null  =>             object
//        undefined  =>  undefined
//        Symbol  =>      symbol
//        BigInt  =>         bigint
// ========================
// (2)Non-primitive Datatypes:
// ---------------------------------------------
//        Arrays  =>       object
//        Function  =>  function
//        Object  =>       object



//Website for Further Studies:- //https://262.ecma-international.org/5.1/#sec-11.4.3


// ******************************************************************************************

// Stacks(Primitive) and Heap(Non-Primitive):

let myName = "kumartanaydotcom"
let anotherName = myName
anotherName= "dhiraj"

console.log(myName);
console.log(anotherName);

let userOne={
    email:"userone@googlr.com",
    upi:"user@ybl"
}

let userTwo = userOne 

userTwo.email = "tanay@google.com"

console.log(userOne.email);
console.log(userOne.upi);

console.log(userTwo.email);







