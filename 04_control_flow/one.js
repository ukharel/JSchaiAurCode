//if

// if (true){}
// if (false){}

// const temperature = 45
// if (temperature== 40){
//     console.log(' Temerature is mild')}
// else{
//     console.log('Temperature is not good')
// }

// let score = 150
// if (score > 100){
//     let strength = ' swim'
//     console.log(`user can ${strength}`)
// 

const userLoggedIn = true
const debitcard = true
const userLoggedInFromGoogle = true
const userLoggedInFromEmail = false


if (userLoggedIn && userLoggedInFromEmail){
    console.log('Purchase is allowed')
}

if (userLoggedInFromEmail || userLoggedInFromGoogle){
    console.log('User got logged in')
}
