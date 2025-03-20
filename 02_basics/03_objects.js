//Singleton constuctor method me use hota hai 
// Object.create : constuctor


//String interpolation, also known as variable interpolation, is the process of embedding variables or expressions directly within a string literal, which are then replaced with their values during runtime. 


// object literals:(we dont use Singleton in this)

const mySym = Symbol("key1")//symbol Datatype

const jsuser = {
    name : "Tanay",
    "fullName" : "KumarTanay" ,
    [mySym]: "mykey1",
    age : 18,
    location :"Kochi",
    email : "tanay@google.com",
    isLoggedIn : false ,
    lastLoginDays :["Monday","Saturday"]  
}
// console.log(jsuser.email);
// console.log(jsuser["email"]);
// console.log(jsuser.fullName);
// console.log(jsuser["fullName"]);
// console.log(jsuser[mySym])

jsuser.email = "tanay23456@mail.com" //override the values
//Object.freeze(jsuser)//Object on which to lock the attributes. Prevents the modification of existing property attributes and values, and prevents the addition of new properties.
//console.log(jsuser);


jsuser.greeting = function(){
    console.log("hello JS User"); 
}
console.log(jsuser.greeting());

jsuser.greeting2 = function(){
    console.log(`hello JS User, ${this.name} `); // string Interpolation
}
console.log(jsuser.greeting2());


