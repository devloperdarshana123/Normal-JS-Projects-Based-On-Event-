// const User = {
//     _email:"chjyu@gmail.com" , 
//     _password:"123456" ,
//     get email(){
// return this._email.toLowerCase()
//     },
//     set email(value){
// this.email = value;
//     },
//     get password(){
//     return this._password.toLowerCase()
//      },
//  set password(value){
//  this._password = value;
//  },

// }

// const tea = Object.create(User)
// console.log(tea.email);

let person = {
    name: "Alice",
    greet: function() {
        console.log("Hello, " + this.name);
    }
};

let sayHello = person.greet;
sayHello(); // Output: "Hello, undefined" (because `this` is lost)
