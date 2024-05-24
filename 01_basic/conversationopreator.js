let score = 34              // This is a type of number

// console.log(score)           // output => 34
// console.log(typeof score)    // output => number
// console.log(typeof(score))   // output =>number

let score1 = "34"           // This is a type of string
 
// console.log(typeof score1)    // output => string
// console.log(typeof(score1))   // output =>string

let valueInNumber = Number(score1)      // find type of score1 variable
//console.log(typeof valueInNumber)     // output =>number

let x = Number(score)
 console.log(typeof x)                  //output =>number


let score2 = "34abc"
let run = Number(score2)
// console.log(score2)             // output => 34abc
// console.log(run)                // output =>NaN(Not a Number)

/* if score value is only interg/string then given integer/string
 if score value is mixted with integer+string then output given NaN(Not a Number)
 */


 let phone = "Narzo"
 let apple = Boolean(phone)
 console.log(apple)


 // notes ===>      0 => false   1 => true   ""  => false   "sanjee"  => true