
// Number methods

const score = 400
console.log(score);
const balance = new Number(100)
console.log(balance);

console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2)); // decimal ke baad 2 zero

const othernum = 123.67433
console.log(othernum.toPrecision(3)); // round off to first 3 digits 

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'))//add commas in number like 100,000 'en-IN'-> changes to indian style hundreds, thousand, lakhs etc



// ++++++++++++ Maths methods ++++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));// negative changes to positive

// console.log(Math.round(4.6));//round off nearest value
// // it has two methods
// console.log(Math.ceil(4.2));//(->5) round off the upper value
// console.log(Math.floor(4.9));//(->4) round off to lower value

// console.log(Math.min(4, 3, 6, 8)); // lowest value in array
// console.log(Math.max(4, 3, 6, 8));// highest value in array  


// 'Math.random()' generate random values between 0 and 1
console.log(Math.random());
console.log((Math.random()*10)+1); // we add 1 so it can generate the value between 1 and 9 
console.log(Math.floor(Math.random()*10) + 1); //we use 'math.floor' to get smaller values

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)