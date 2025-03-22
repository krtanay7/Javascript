
// The JavaScript Array.reduce() method iterates over an array, applying a reducer function to each element,
// accumulating a single output value. It takes an initial value and processes elements from left to right, reducing the array to a single result.
// It is useful for doing operations like max in an array, min in an array and sum of array

// array.reduce( function(total, currentValue, currentIndex, arr), initialValue )


// EXAMPLE :-1 

//const myNums = [1, 2, 3]
//const myNums = [5, 45, 30,60]

//  const myTotal = myNums.reduce(function (acc, currval) {
//      console.log(`accumlator: ${acc} and current value: ${currval}`);
//      return acc + currval
//  }, 0)
// const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0) // arrow function

// console.log(myTotal);




// EXAMPLE :-2
 const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(`Your Total cart value: ${priceToPay}`);
