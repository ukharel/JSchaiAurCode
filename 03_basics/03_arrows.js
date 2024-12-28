const user = {
    username: "ujjwal",
    price: 999,
    welcomeMessege : function(){
        // console.log(`${this.username}, welcome to website`  )
        // console.log(this)
    }
}
// user.welcomeMessege()
// user.username = "Hitesh"
// user.welcomeMessege()
// console.log(this)

// function chai(){
//     username= 'Ramesh'
//     console.log(this.username)
// }
// chai()
const code = function chai(){
    username= 'Ramesh'
    console.log(this.username)
}
code()

const addTwo = (num1 , num2) => num1 + num2
console.log(addTwo(3,23))