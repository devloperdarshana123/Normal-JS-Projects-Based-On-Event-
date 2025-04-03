function setUsername (user){
    this.user = user;

}
function createuser(username , email , age){
    setUsername.call(this ,  username)
    this.email = email
    this.age = age
}
const chai = new createuser("chai" , "chai!234" , 34)
console.log(chai);