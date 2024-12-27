function addTwoNumbers(num1,num2){
    console.log(num1 + num2)

}
function addTwoNumbers(num1,num2){
    return num1 + num2
    
    
}
const result = addTwoNumbers(2,3)
// console.log(result)

function LoginUserMessege(username){

    if (username === undefined){
        console.log(" Please enter a username")
        return
    }
    return `${username} just logged in.`

}
// console.log(LoginUserMessege('Ujjwal'))



function CalculateCartPrice(val1,val2, ...num1){
    return num1
}
// console.log(CalculateCartPrice(200,122,134,154,354)
const user = {
    name:'Ujjwal',
    price: 123
}

function handleObject (user){
    console.log(`Username is ${user.name} and price is ${user.price}`)  
}
handleObject({
    username:"Ujjwal",
    price: 200
})

const myArray = [100,200,300,400]

function getSecondValue (getArray){
    return getArray[1]
}
console.log(getSecondValue(myArray))