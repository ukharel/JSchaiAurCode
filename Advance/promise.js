const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task is completed')
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log('Async task is resolved')
})


new Promise(function(resolve, reject){
    setTimeout(function(){
       console.log('Async 2 is completed successfully')
       resolve()
    }, 1000)
    
    
}).then(function(){
    console.log('Async task is resolved')
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async 3 is completed')
        resolve({username:'Ujjwal', email:'Ujjwal@gmail.com'})
    },1000)
})
promiseThree.then(function(user){
    console.log('Async 3 is resolved')
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if (!error){
            resolve({username:'Hermonie', password: '123'})
        }else{
            reject('Something went wrong')
        }
    })
})

promiseFour.then(function(user){
    console.log(user)
    return user.username
}).then(function(username){
    console.log(username)
}).catch(function(err){
    console.log(err)
})

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error){
            resolve('Success')
        } else{
            reject('Something went successfully wrong')
        }
    },1000)
})

async function consumePromiseFive(){

    try{
        const response = await promiseFive
        console.log(response)
    }
    catch(err){
        console.log(err)
    }
}
consumePromiseFive()


// async function GetAllUsers(){
//     try {
//         const response= await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log('Error', error)
//     }
// }

// GetAllUsers()

fetch('https://jsonplaceholder.typicode.com/users').then(function(response){
    return response.json()
}).then(function(data){
    console.log(data)
}).catch(function(error){
    console.log(error)
})