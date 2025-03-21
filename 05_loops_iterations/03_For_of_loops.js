// High Order Array loops
// for of
// these are ARRAY specific loops 

// ["", "", ""]
// [{}, {}, {}]


const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

//************************************************************************************************************************** */
// MAPS  
//The Map object holds key-value pairs and remembers the original insertion order of the keys.

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India") // it does'nt shows the duplicate values 
map.set('RU', "Russia")

 //console.log(map);

for (const [key, value] of map) {
   // console.log(key, ':-', value);
}


