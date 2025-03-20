const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

const allheros = marvel_heros.concat(dc_heros)// Concat operator:- add two array without problem
//console.log(allheros);

const all_new_heros = [...marvel_heros,...dc_heros] // SPREAD operator :- add two array without problem(widely Used)
//console.log(all_new_heros);

const another_arr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_arr = another_arr.flat(Infinity) // flat:- Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(real_arr);


console.log(Array.isArray("Tanay"));
console.log(Array.from("Tanay")); // from: Creates an array from an iterable object.


console.log(Array.from({name:"Tanay"})); // interesting


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));

