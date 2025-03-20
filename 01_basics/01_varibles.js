const accountID = 14453
let accountEmail = "kumar@google.com"
var accountPassword = "123456"
accountCity = "Kochi"
let accountState 


// accountID = 2  // not allowed

/* prefer not to use var beacuse 
of issue of block scope and functional scope  */

{
    //curly braces { } are called scope 
}

 
accountEmail = "tm@yu.com"
accountPassword = "987654"
accountCity = "vizag"

console.log(accountID);
console.table([accountID,accountEmail,accountPassword,accountCity,accountState ]);
