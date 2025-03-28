
// generate a random color 

const randomcolor = function(){
    const hex = "0123456789ABCDEF"
    let color = '#'
    for(let i= 0; i<6; i++){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
};
//console.log(randomcolor);
let intervalId;
const startcolor = function (){
    intervalId = setInterval(changeBackgroundcolor,1000);

    function changeBackgroundcolor() {
    document.body.style.backgroundColor = randomcolor() 
    }
};

const stopcolor = function() {
    clearInterval(intervalId)
    intervalId = null;
}

document.querySelector('#start').addEventListener('click', startcolor);

document.querySelector('#stop').addEventListener('click', stopcolor);

