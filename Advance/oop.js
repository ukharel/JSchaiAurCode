const User ={
    username:'Ujjwal',
    LoginCount : 20,
    isLoggedIn: false,
    getUserDetails: function(){
        // console.log('Got user details from server')
        // console.log(`username: ${this.username}`)
        console.log(this)
    }

}
// console.log(User.username)
// console.log(User.getUserDetails())

function user(username, loginCount, isLogin){
    this.username= username;
    this.loginCount = loginCount;
    this.isLogin = isLogin;
    return this
}

const user1 = new user('ujjwal', 10, true);
const user2 = new user('ramesh', 15, false)
console.log(user1)
console.log(user2);