"use strict";

const name = "ayush-GT"
const repoCount = 30

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('   Ayush')

console.log(gameName[0]);

console.log(gameName.__proto__);

console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));

console.log(gameName.indexOf('s'));
 
console.log(gameName.substring(2,4));

console.log(gameName.slice(-3,4));

console.log(gameName.trim());

const url ="https://ayush.com/ayush%50billade"
console.log(url.replace('%50', '-'));


console.log(  url.includes('ayush'));