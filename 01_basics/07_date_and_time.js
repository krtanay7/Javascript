// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toUTCString());
// console.log(myDate.toISOString());

console.log(typeof myDate); // Date is Object


// let myCreatedDate = new Date(2023, 0, 23) // month is started in 0 in javascript 
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
let myCreatedDate = new Date("2023-01-14") //YYYY-MM-DD
//let myCreatedDate = new Date("01-14-2023") //MM-DD-YYYY
//console.log(myCreatedDate.toDateString());
//console.log(myCreatedDate.toLocaleString()); //=>  MM/DD/YYYY


let myTimeStamp = Date.now()

// console.log(myTimeStamp);// MilliSecond between Created Date and Now'S Date
// console.log(myCreatedDate.getTime()); // 
// console.log(Math.floor(Date.now()/1000));// converting into seconds and we use 'math.floor' to get smaller values

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1); // we use +1 for getting exact month digit because month is started in 0 in javascript  
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

//custommize the localeString 
newDate.toLocaleString('default',{
    weekday:"long"
})