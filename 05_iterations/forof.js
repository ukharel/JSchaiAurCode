//for or
// ["", "", ""]
// [{}, {},{}]

const arr = [1,2,3,4,5]
for (const num of arr) {
   // console.log(num)
    
}

const greeting = " Hello world"
for (const greet of greeting) {
    if (greet == " "){
        continue
    }

    // console.log(`Each character is ${greet}`)
    
}

const map1 = new Map()
map1.set('Province1','Koshi')
map1.set('Province2','Bagmati')
map1.set('Province3','Pokhara')

// console.log(map1)

for (const [key,value] of map1) {
    // console.log(key + ':=' + value)
    
}

// const obj = {
//     "game1":'Hokey',
//     "game2": 'football'
// }

// for (const [key,value] of obj){
//     // console.log(key + ':=' + value)
   
// }

const myObj = {
    name : "Ujjwal",
    age:23,
    class: "bachelor"
}

for (const key in myObj) {
    // console.log(key, myObj[key])
    
}

const myArray = [2,3,4,5,6]

for (const key in myArray) {
    console.log(key, myArray[key])
}