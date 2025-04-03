// let name  = "darshii  "
// console.log(name.trim().length);
let myheros = ["thor" , "spiderman" , "ironman"]
let power = {
    thor:"hameer" ,
    spiderman:"web" ,
    ironman:"gun",
    getspiderPower:function(){
        console.log(this.spiderman)
    }
}
Object.prototype.darshii = function(){
    console.log("darshii is here")
}
Array.prototype.hey = function(){
    console.log("hey darshii")
}
// myheros.darshii()
// myheros.hey()

const user = {
    name: "Darshii",
    age: 25,

}

const teacher = {
    makeVideo:true
}
const teachingSupport = {
    isAvailable :false

}
const Tasuupert = {
    Make:"js Assignmet",
    fulltime : true,
    __proto__:teachingSupport
}
teacher.__proto__ = user
Object.setPrototypeOf(teachingSupport, teacher)

let anouser = "rohiii   "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`the length is : ${this.trim().length}`);
}
anouser.trueLength()
"icecream".trueLength()
"china".trueLength()