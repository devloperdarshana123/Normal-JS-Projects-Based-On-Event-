//const user = {
//
//console.log(user.username); // darshi
//console.log(user.getUserDetails());
//console.log(this)

function  user(username , age , isloggedin){
    this.username = username;
    this.isloggedin = isloggedin;
    this.age = age;
    return this
}
const userone =  new user("Rohii" , 21 ,true )
console.log(userone)
const usertwo =  new user("darshii" , 17 , false)
console.log(usertwo)

//new key word create empty object 
// constructor function called 
// this keyword inject 
// and we get the function 