

const userEmail = [] // this is not true value 

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// // falsy values*********************************************************************************************
// false, 0, -0, BigInt 0n, ""->EMPTY STRING, null, undefined, NaN

//************************************************************************************************************* */
//truthy values
// "0" ->'zero is in string', 'false', " ", [], {}, function(){}

//************************************************************************************************************* */


// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}


//***************************************************************************************************************************************************** */
// Nullish Coalescing Operator (??): null undefined
// The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is NULL or UNDERDEFINED , and otherwise returns its left-hand side operand.

let val1;
//val1 = 5 ?? 10    //->5

//val1 = 86 ?? 10   //->86

//val1 = null ?? 10     //-> 10

//val1 = undefined ?? 15     //-> 15

//val1 = null ?? 10 ?? 20   //->10

console.log(val1);


//************************************************************************************************************************************************************************** */
// Terniary Operator :- 

// The ternary operator is a shorthand for the if-else statement
//The ternary operator evaluates the condition. If the condition is true, it returns expressionIfTrue;   otherwise, it returns expressionIfFalse.

// condition ? true : false

const iceTeaPrice = 68
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")