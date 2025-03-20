// CONVERSION :- 
// 1) NUMBER
let score1 = 56 
let score2 = "56abc" 
// if the score value was :- 
// Null  =>  0
// Undefined  => NaN
// true => 1; false=> 0;

console.log(typeof score1);
console.log(typeof (score2));

let valueInNumber = Number (score2) 
console.log(typeof valueInNumber);
console.log(valueInNumber); // NaN = Not A Number


// 2) BOOLEAN 
let isLoggedIn = 1 
// true => 1; false=> 0; 
// "" => false
// "hitesh" => true

let booleanisLoggedIn = Boolean(isLoggedIn)

console.log(booleanisLoggedIn);


// 3) STRING 

let someNum = 45

let stringNum = String(someNum)

console.log(stringNum); // output = 45
console.log(typeof stringNum); // output = string


// *********************** Operations **********************

let value = 3 
let negValue = -value // conversion to positive to negative value 
console.log(negValue);

//basic mathematics:-  
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);


// addition of strings
let str1 = "Hello!"
let str2 = " Tanay"
let str3 = str1+ str2
console.log(str3);


// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+""); // + Null


// let num1, num2, num3

// num1 = num2 = num3 = 2 + 2


let gameCounter1 = 100
let gameCounter2 = 100
++gameCounter1;
gameCounter2++;
console.log(gameCounter1);
console.log(gameCounter2);


// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion