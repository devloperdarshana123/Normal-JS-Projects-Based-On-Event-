const obj = {
    name : "darshii" ,
    age :19 ,
    gender : "female" ,
}

//  const dis = Object.getOwnPropertyDescriptor(Math , 'PI');
//  console.log(dis);
//   const NewOnj = Object.create(null)
//   console.log(NewOnj);

const chai = {
name:"ginger",
price:457 ,
isAvaliable:"yes" ,
Chai:function(){
    console.log("chai is avaliable");
}
}
console.log(Object.getOwnPropertyDescriptor(chai , "name"));
Object.defineProperty(chai , 'name', {
    // writable:false,
    // configurable:false ,
    enumerable:false ,
})

console.log(Object.getOwnPropertyDescriptor(chai , "name"));
for(let [key , value] of  Object.entries(chai)){
    if(typeof value !== 'function'){
        console.log(key , value);
    }
}