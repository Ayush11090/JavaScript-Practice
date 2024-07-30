let score = "33a"
score = 33
score = null
score = true

console.log(typeof(score));
console.log(typeof score);

let valInteger = Number(score)

console.log(valInteger);


// "33" => 33
// "33s" => NaN
// null => 0
// true => 1 || false => 0

let loggedIn = 1
loggedIn = ""

let boollogged = Boolean(loggedIn)

console.log(boollogged);

// 1 = > true
// "" => false
// "ayush" => true

let someNumber = 33

let stNumber = String(someNumber)

console.log(stNumber);
console.log(typeof(stNumber));




// Opertions

let val = 5;
let negVal = -val

console.log(negVal);

console.log(2+10);
console.log(2-10);
console.log(2*10);
console.log(2/10);
console.log(2%10);
console.log(2**10);

console.log(2 + '1');
console.log(2+1);
console.log(2+1+'4');
console.log('2'+1+ 5);