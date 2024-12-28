const coding = ['Java','Python','Ruby','Cpp']

let values =coding.forEach((item) => {  // Foreach fucntion doesnot do return values
    // console.log(item)
})
// console.log(values)

const Nums= [1,2,3,4,5,6,7,8,9,10]

let newNumber = Nums.filter( (num) => {
   return num >4 
}  )
// console.log(newNumber)

const number = [1,2,3,4,5,6,7,8,9,10]
const newnumber= number.map( (num) => num + 10 )
console.log(newnumber)

