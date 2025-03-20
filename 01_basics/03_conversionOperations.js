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



