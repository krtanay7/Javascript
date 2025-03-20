// ARRAY 
// JavaScript array-copy operations create shallow copies. 
//  (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).
// A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) 
// A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) 
  
const myArr= [0,1,2,3,4,5]
const myHeors = ["shaktiman", "naagraj"]

// console.log(myArr[0]); // accessing the Array 

const myArr2 = new Array(1, 2, 3, 4)

// Array Methods 

// myArr.push(6) // adds element in array
// myArr.push(7)
// myArr.pop() //Deletes the last element in Array

// myArr.unshift(9) // adds the specified elements to the beginning of an array
// myArr.shift()//emoves the first element from an array and returns that removed element.

// console.log(myArr.includes(9)); //Returns True or False value , it includes 9 or not 
// console.log(myArr.indexOf(3)); // Returns the index of 3 

console.log(myArr);


const newArr = myArr.join() //binds and converts all emenents of array to string 

console.log(typeof newArr);
console.log(newArr);

// slice , splice 

//SLICE :- The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object selected from start to end.
//SPLICE :- The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

console.log("A ", myArr);//original Array

//const myn1 = myArr.slice(1,3)
const myn1 = myArr.slice(1,4)

console.log("B ",myArr);
console.log(myn1);


const myn2 = myArr.splice(1,4)
console.log("C ",myArr);
console.log(myn2);




