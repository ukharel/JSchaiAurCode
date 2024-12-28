// singleton
//Objects literals

const mySym =Symbol('key1')

const Jsuser = {
    name:'Ujjwal',"fullname":"Ujjwal", [mySym]:"mykey1",
    age: 19,
    location: "jaipur",
    mail:"ujjwalkharelpandit17mail.com",
    isLoggedIn : false,
    LastLogInDays : ['Monday','Friday'],

    
}

console.log(Jsuser['age'])
console.log(Jsuser.mail)
console.log(Jsuser["fullname"])
console.log(Jsuser[mySym])

Jsuser.mail = "kharelujjwal@gmail.com"

// Object.freeze(Jsuser)
Jsuser.mail = "kharelujjwal123@gmail.com"
console.log(Jsuser)
Jsuser.greeting = function(){
    console.log('Hellow Js User World')
}
console.log(Jsuser.greeting())