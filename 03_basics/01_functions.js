function addTwoNumbers(num1,num2){
    console.log(num1 + num2)

}
function addTwoNumbers(num1,num2){
    return num1 + num2
    
    
}
const result = addTwoNumbers(2,3)
console.log(result)

function LoginUserMessege(username){

    if (username === undefined){
        console.log(" Please enter a username")
        return
    }
    return `${username} just logged in.`

}
console.log(LoginUserMessege('Ujjwal'))

