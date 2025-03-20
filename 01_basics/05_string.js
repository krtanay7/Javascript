const name = "Tanay"
const repoCount = 20
// console.log(name + repoCount + " Value");


// BACKTICS( String Interpolation): 

console.log(`Hello my name is ${name} and my repo count is ${repoCount} `);

// string Methods

const gameName = new String('tanayhccom')
// console.log(gameName);
// console.log(gameName[0]); // key value access, 0->t
// console.log(gameName.__proto__); //

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt('2'));// key value access, 2->n
// console.log(gameName.indexOf('t'));// shows Index of character t->0 

const newString = gameName.substring(0,4)
// sub string does't support negative values 
console.log(newString);

const anotherString = gameName.slice(-8,4)
// we give negative value only in slice method
console.log(anotherString);

const oneString = "    Tanay    "
console.log(oneString);
console.log(oneString.trim());//Removes extra Spaces IN String


const url = "https://tanay.com/tanay%20kumar"

// i want to replace %20 with '-'
console.log(url.replace('%20', '-')) 

//url ke ander ye wala string hai ki nahi , is method se aap puch sakte ho. iska output True ya False me  deta hai
console.log(url.includes('sundar'))

const twostring = new String('tanay-hc-com')
//ye spaces ke base ya fir jo dala hoga jaise '-' iske basis par string ko split kar raha hai 
console.log(twostring.split('-'));

