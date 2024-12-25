const TinderUser = new Object()


TinderUser.Id = "1234"
TinderUser.email='username123@gmail.com'
TinderUser.location = "Jaipur"
//console.log(TinderUser)
const regularUser = {
    email : 'kharel@gmail.com',
    fullName:{
        username:{
            firstName: "Ujjwal",
            lastName : 'Kharel'
        }
    }

}
// console.log(regularUser.fullName.username.lastName)

const obj1 = {1:'a', 2:'b'}
const obj2= {3:'a', 4:'b'}
// const obj3 = { obj1, obj2}
// const obj3 = Object.assign({},obj1, obj2)
const obj3 = {...obj1, ...obj2}
// console.log(obj3)

const users=[
    {
        id:1,
        email:'hiteshchoudhary@gmail.com'
    },
]
// users[1].email
// console.log(TinderUser)

// console.log(Object.keys(TinderUser))
// console.log(Object.values(TinderUser))
// console.log(Object.entries(TinderUser))


// console.log(Object.hasOwnProperty('location'))

const course = {
    course:'JS in hindi',
    price : "free",
    CourseInstructor: "Ujjwal"
}

const {CourseInstructor: instructor} = course

console.log(instructor)


// {
//     "name":"Hitesh",
//     "age": 23,
//     "email": "hitesh@gmail.com"
// }


