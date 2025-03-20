 const zeptoUser = new Object()
zeptoUser.id = "123abc"
zeptoUser.name = "Rahul"
zeptoUser.isLoggedIn = false
//console.log(zeptoUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: { //nesting
            firstname: "Kumar",
            lastname: "Tanay"
        }
    }
}

// console.log(regularUser.fullname); //=> { userfullname: { firstname: 'Kumar', lastname: 'Tanay' } }
// console.log(regularUser.fullname.userfullname); //=> { firstname: 'Kumar', lastname: 'Tanay' }
// console.log(regularUser.fullname.userfullname.firstname);// => Kumar

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

//const obj3 = { obj1, obj2 } // => { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// assign: Copy all enumerable properties from one or more source objects to a target object and return the updated target object. i.e(Take properties from one or more objects and add them to another object, then return that updated object.)
//const obj3 = Object.assign({}, obj1, obj2, obj4) // =>{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

// spread operator
const obj3 = {...obj1, ...obj2} // =>{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' } 
//console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(zeptoUser); //=>{ id: '123abc', name: 'Rahul', isLoggesIn: false }

// console.log(Object.keys(zeptoUser)); //=>[ 'id', 'name', 'isLoggesIn' ]

// console.log(Object.entries(zeptoUser)); //=>[ [ 'id', '123abc' ], [ 'name', 'Rahul' ], [ 'isLoggesIn', false ] ]

// console.log(zeptoUser.hasOwnProperty('isLoggedIn')); //=>true
// console.log(zeptoUser.hasOwnProperty('isLogged')); //=>false





//************Object de-structure and JSON API intro***********************************************************************************************************************************************


const course = {
    courseName: "Chemistry course",
    price: "999",
    courseInstructor: "Heisenberg"
}
//course.courseInstructor

// const {courseInstructor} = course
// console.log(courseInstructor); // => Heisenberg

const {courseInstructor: instructor} = course
console.log(instructor);


// const navbar = ({company}) => {

// }

// navbar(company = "qwerty")


// { //Json

//     "courseName": "Chemistry course",
//     "price": "999",
//     "courseInstructor": "Heisenberg"

// }

[
    {},
    {},
    {}
]
