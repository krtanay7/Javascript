//****COMPARISONS OPERATORS***********************************************************************************************************************************************************

// ==	equal to
// !=	not equal
// ===	equal value and equal type
// !==	not equal value or not equal type
// >	greater than
// <	less than
// >=	greater than or equal to
// <=	less than or equal to
// ?	ternary operator

//****LOGICAL OPERATORS**************************************************************************************************************************************************************** 

//      && (Logical AND)     	expression1 && expression2          	true only if both expression1 and expression2 are true

//      || (Logical OR)	        expression1 || expression2	            true if either expression1 or expression2 is true

//      ! (Logical NOT)	             !expression                      	false if expression is true and vice versa

//**************************************************************************************************************************************************************************************


// if

const isUserloggedIn = true
const temperature = 41

if ( temperature === 40 ){
    //console.log("less than 50");
} else {
    //console.log("temperature is greater than 50");
}
// console.log("Execute");

// const score = 200
// if (score > 100) {
//     let power = "fly"
// //  var power = "fly" // if we use var we can define a variabe outside of scope
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);



// const balance = 1000

//  //if (balance > 500) console.log("test"),console.log("test2"); // not a good way for scope

//  if (balance < 500) {
//      console.log("less than 500");

// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 900");
    
// } else {
//     console.log("less than 1200");

//  }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==2) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}

