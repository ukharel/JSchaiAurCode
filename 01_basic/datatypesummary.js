// Primitive- 7 types => String, Number, Boolean, Null, Undefined, Symbol, Bigint

let score= 100
let AnotherScore = 100.3
let isLoggedIn = false
let Temperature = null
let country;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId)
// Reference(Non-primitive)
// Array,Object, Functions

const city = ["Birtamode", "Pokhara","Kathmandu"]

let myObj = {
    name : "Ujjwal",
    age : 22,
}
const myFunction = function(){
    console.log('Hello World')
}