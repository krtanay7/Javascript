
function sayMyName(){
    console.log("T");
    console.log("A");
    console.log("N");
    console.log("A");
    console.log("Y");
}
//sayMyName()


// function addTwoNumbers(num1,num2){ //(num1 & num2 are Parameters)
//     console.log(num1+num2); }
// addTwoNumbers(3,4) // 3,4 are Arguments
// addTwoNumbers(3,"4")
// addTwoNumbers("a",4)
// addTwoNumbers(4,null)


function addTwoNumbers(number1,number2){ //(num1 & num2 are Parameters)
    // let result = num1+num2
    // return result
    return number1 + number2 
}

const result = addTwoNumbers(3, 5)

//console.log("Result: ", result);



function loginUserMessage(username = "sam"){ // we use (username = "sam") for removing undefined 
    if(!username){ // is eqal to "if(username === undefined)"
        console.log("Please enter a UserName");
        return
    }
    return `${username} Just Logged In`
}

// console.log(loginUserMessage("Tanay")); //=>value will be override "Tanay Just Logged In" 
// console.log(loginUserMessage()); //=> undefined


function calculateCartPrice(...num1){ //rest Operator
    return num1
}

// function calculateCartPrice(val1, val2, ...num1){ //=> [ 500, 2000 ]
//     return num1
// }

//console.log(calculateCartPrice(200, 400, 500, 2000))

const user ={
    username: "Tanay",
    price : 299
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
//handleObject(user)

handleObject({
    username: "sam",
    price: 399
}) // => Username is sam and price is 399



const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 500, 600, 1000]));