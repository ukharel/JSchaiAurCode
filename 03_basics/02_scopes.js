if (true){
    let a = 10
    const b = 20
    var c = 30
}

// console.log(a)
// console.log(b)
// console.log(c)


//Nested function
function one (){
    const username = 'Ramesh'
    function two (){
        const website = 'Youtube'
        console.log(username)
    }
    // console.log(website)
    // two()
}
// one()

if (true){
    username = 'Ujjwal'
    if (username === 'Ujjwal'){
        const website = ' Yahoo'
        // console.log(username + website)
    }
    // console.log(website)
}
// console.log(username)


function One(num){
    return num + 1
}
console.log(One(6))

const addTwo = function(num){
    return num + 2
}
console.log(addTwo(3))

