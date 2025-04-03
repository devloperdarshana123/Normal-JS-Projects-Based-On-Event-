// const console = require("console");

// const promiseone = new Promise(function (resolve , reject){
// setTimeout(function(){
//     console.log("async task is completed");
//     resolve()
// } , 1000)
// })

// promiseone.then(function(){
//     console.log("task is completed Promise is Consume")
// })

// new Promise( function(resolve , reject) {
//     setTimeout(function(){
//         console.log("Async task two ");
//         resolve()
// }, 1000)
// }).then(function(){
//     console.log("Task is completed Promise 2  is Consume");
// })
// const  promisethree = new Promise(function(resolve , reject){
//     setTimeout(function(){
// resolve({username: "Darshi" , email:"chai@example.com" , age: "19"})
//     } , 1000)
// })
// promisethree.then(function(user){
// console.log(user)
// })

// const promisefour = new Promise(function(resolve , reject){
//     setTimeout(function(){
//         let error = false
//         if(!error){
// resolve({username:"darshii"  , love:"Rohii"})
//         }
//         else{
//             reject("Error:Something went wrong")
//         }
//     } , 1000)
// })
//  promisefour
//  .then((user)=>{
// console.log(user);
// return user.username
// })
// .then((username)=>{
// console.log(username);
// })
// .catch(function(error){
//     console.log(error);
// }).finally(()=> console.log("the promise is resolve "))

const promisefive = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = true
        if(!error){
resolve({username:"darshiiRohii"  , love:"RohiiDarshii"})
        }
        else{
            reject("Error:Something went wrong in username")
        }
    } , 1000)
});
async function consumep(){
    try{
        const response = await promisefive
        console.log(response); 
    }
    catch (error){
        console.log(error)
    }
}
consumep()

// async function getalluser(){
//    try{
//     const response = await fetch('https://api.api-ninjas.com/v1/randomuser')
//    const data =  await response.json()
//    console.log(data)
//    }
//    catch(error){
//     console.log("E:" , error);
//    }
// }
// getalluser()



fetch('https://api.api-ninjas.com/v1/randomuser')
.then(response => response.json())
.then((data)=>{
    console.log(data)
})
.catch((error)=>console.log("error"))

