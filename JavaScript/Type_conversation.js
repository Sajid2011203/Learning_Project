var l = "100"
var s = 5

// console.log(Boolean(l))

// console.log(Boolean(''))
// console.log(Boolean('ajfoalj'))
// console.log(Boolean(Infinity))
// console.log(Boolean(NaN))
// console.log(Boolean(null))
// console.log(Boolean(0))

//Converting Strings to Numbers

var n = "55"
var e = " "
var b = ''
var s = "56 77"

// console.log(Number(n))// return 55
// console.log(Number(e)) // return 0
// console.log(Number(b))// retunrt 0
// console.log(Number(s))//return NaN

//number method for converting strings to number
// console.log(parseInt(n))
// console.log(parseFloat(s))

//The unary + operator can be used to convert a variable to a number

let num1 = "232"
let num2 = "55"

console.log(+num1 + +num2)

let x = "33"
let y = +x

console.log(y)

//Converting Numbers to Strings
//The global method String() can convert numbers to strings.

let str = 200

let str2 = 200

let total = String(str) + String(str2)

console.log(total)

//The Number method toString() does the same.

