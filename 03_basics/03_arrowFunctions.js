
const user = {
    username: "Tanay",
    price: 999,

    welcomeMessage: function() {  
        console.log(`${this.username} , welcome to website`); // "this" refer to current context
       // console.log(this); //-> {username: 'Tanay', price: 999, welcomeMessage: [Function: welcomeMessage] }
    }
} 

// user.welcomeMessage() //=>Tanay , welcome to website
// user.username = "Sam"
// user.welcomeMessage() //=>Sam , welcome to website

// console.log(this); //=> {} empty parenthesis


// function chai(){
//     let username = "Tanay"
//     //console.log(this); 
//     console.log(this.username); //-> undefined
// }
// chai()

// const chai =  () => { // '=>' is called arrow function
//     let username = "hitesh"
//     console.log(this);
//     console.log(this.username); //-> undefined 
// }
// chai()






// const addTwo = (num1, num2) => {
//     return num1 + num2
// } // we use return only in curly braces

//const addTwo = (num1, num2) =>  num1 + num2 // this is called impllicit return, and this doesn't require RETURN, parenthesis written in same line 

// const addTwo = (num1, num2) => ( num1 + num2 )

 const addTwo = (num1, num2) => ({username: "hitesh"})

console.log(addTwo(3, 4))

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()