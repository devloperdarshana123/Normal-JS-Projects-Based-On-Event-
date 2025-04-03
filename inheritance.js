class user{
    constructor(username){
        this.username = username;
    }
    logme(){
        console.log(this.username);
    }
}
class teacher extends user {
    constructor(username, subject , age ){
        super(username);
        this.subject = subject;
        this.age = age
}
addCourses(){
    console.log(`this is a new course added by ${this.username}`);
}
}
const chai = new teacher("chai" , "Javascript" , 67)
chai.addCourses();
console.log(chai);
chai.logme();