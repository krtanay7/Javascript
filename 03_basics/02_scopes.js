//{} curly braces are called scopes in Javascript

//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    c = 30
   // console.log("INNER: ", a);
}

// console.log(a);// =>ERROR
// console.log(b);// =>ERROR
// console.log(c); // => 30



//********NESTED SCOPE**********************************************************************

function one(){
    const username = "Tanay"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);

    two()
}

//one()

if (true) {
    const username = "tanay"
    if (username === "tanay") {
        const website = " youtube"
        console.log(username + website);
    }
   // console.log(website);
}

//console.log(username);

// ++++++++++++++++++ interesting example ++++++++++++++++++


console.log(addone(5));

function addone(num){
    return num +1 
}



addTwo(5)
const addTwo = function(num){
    return num + 2
}