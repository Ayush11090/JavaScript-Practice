// primitive

// 7 type : string , number, null, undefine, boolean, BigInt, symbol


// refrence (non-premitive)

// Array, Objects, Functions

var ayush = 9
console.log(ayush);
{
    var ayush =8
    console.log(ayush);
}
console.log(ayush);

// let ayush = 9
// console.log(ayush); 
// {
//     let ayush =8
//     console.log(ayush);
// }
// console.log(ayush);

let a = 9.5

console.log(typeof a);

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id );
console.log(anotherId);
console.log(id==anotherId);

const bigint  = 112414232166525448483532

console.log(bigint);


const hero = ["ayush", "shaktiman", "gangadhar"]

let myObj = {
    name : "ayush",
    age : 21,
}


const myFunction = function() {
    console.log("Hello World");
}

console.log(typeof hero);



// stack (premitive type)    assigment generste copy
// heap  (Non premitive)     assignment assigm refrence


let myDomain = "computer.com"

let newDomain = myDomain

newDomain = "BTECHWALA.COM"

console.log(myDomain);
console.log(newDomain);

let userone = {
    name : "ayush",
    age : 34,

}
let usertwo = userone

usertwo.age = 45

console.log(userone.age);
console.log(usertwo.age);