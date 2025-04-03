function multiply(num){
    return num*5
}
multiply.power = 2
console.log(multiply(5));
console.log(multiply.power);
console.log(multiply.prototype);


function Createuser(username , score){
    this.username = username;
    this.score = score;
}

Createuser.prototype.incremet  = function(){
    this.score += 1;
}

Createuser.prototype.printme = function(){
    console.log(`score is ${this.score}`);
}
const chai = new  Createuser("darshii" , 56)
const aaj =  new Createuser("prince" , 78)
chai.printme()
