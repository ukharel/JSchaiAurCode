const randomNumber= function(){
    const hex = "0123456789ABCDE"
    let color = '#'
    for (let i = 0; i < 6;i++){
        color += hex[Math.floor(Math.random() *16)]
    }
    return color
}
let IntervalId;

const startColorChanging= function(){
    if (!IntervalId){
        IntervalId =setInterval(changeColor,1000)
    }
    
    function changeColor(){
        document.body.style.backgroundColor = randomNumber();

    }
}

const stopColorChanging = function(){
    clearInterval(IntervalId);
    IntervalId = null;
    
    
}

document.querySelector("#start").addEventListener('click', startColorChanging);
document.querySelector("#stop").addEventListener('click', stopColorChanging);