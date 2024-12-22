let name = "Ujjwal";
let age = 23;

console.log(`My name is ${name} and my age is ${age}`)

const gameName = new String('UjjwalKharel-kharel-ujjwal')
console.log(gameName[0])
console.log(gameName.__proto__)

console.log(gameName.charAt(3))
console.log(gameName.indexOf('w'))

const newstring = gameName.substring(0,4)
console.log(newstring)

const anotherString = gameName.slice(1,3)
console.log(anotherString)

let newstringOne = '   Ujjwal  '
console.log(newstringOne)
console.log(newstringOne.trim())

let url = 'https://ujjwalkharel%50kharel'

console.log(url.replace('%50','-'))
console.log(url.includes('ujjwal'))
console.log(gameName.split('-'))

