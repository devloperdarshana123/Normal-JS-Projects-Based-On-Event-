class User{
    constructor(username , email , age , password){
        this.username = username;
        this.email = email;
        this.age = age;
        this.password = password;
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("CHai" , "chai@gamil.com" , 23 , "567")
console.log(chai.changeUsername());
console.log(chai.encryptPassword());
console.log(chai);


User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

const tea = new User("tea" , "tea@gmail.com" , 45 , "hui5675")
console.log(tea.encryptPassword());
console.log(tea);
console.log(tea.changeUsername());