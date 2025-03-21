
// 'for in' loops for Object function:

const myObject1 = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject1) {
//     console.log(key, ':-', value);  }

// "for of" loops does'nt works in Objects functions thats why we use "for in" loop

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
   // console.log(`${key} shortcut is for ${myObject[key]}`);
}


const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
 //   console.log(programming[key]);
}


// Can we use for in loop in maps?

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India") // it does'nt shows the duplicate values 
map.set('RU', "Russia")

// console.log(map);

 for (const key in map) {
    console.log(key);
}
