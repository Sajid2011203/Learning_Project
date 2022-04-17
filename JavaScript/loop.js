for (var x = 0; x < 10; x++){
    console.log('This is array')
}

const fruite = ["apple", 'banana', 'orange', 'lemon']

console.log(fruite)

/**you can also write array */
var cars = []
cars[0] = "volvo";
cars[1] = "bmw";
cars[2] = "toyota"
for (var i = 0; i < cars.length; i++){
    console.log(cars[i])
}

/** you can also new array keyword**/

var laptop = new Array("HP", "lenovo")
for ( xp of laptop) {
    console.log(xp)
}

/* you can change array element easyly*/
var b = ["a", "b", '2', "c"]
b[2] = "c",
b[3] = "d"

console.log(b)

let pc = ["Prossesor", "ram", "Hard disk", "motherboard"]

for (let all = 0; all < pc.length; all++){
    console.log(pc[all])
}

/* break loop */

for (var i = 0;; i++){
 if(i < 10){
    console.log(i)
 }   else{
     break
 }
}

/* Loop Scop */

var s = 5;

for(var s = 0; s <= 10; s++ ){
    console.log(s)
}

console.log(s)

/**You can call arrey in diffrant way**/
console.log('***Way 1***')

let way1 = ['Apple', 'Banana', 'Orange', 'Mango']

console.log(way1[0], way1[1], way1[2])

// Way 2
console.log('***Way 2***')

let way2 = ['Apple', 'Banana', 'Orange', 'Mango']

// for(x of way2) {
//     console.log(x)
// }
for(let x = 0; x < way2.length; x++) {
    console.log(way2[x])
}

// you can create even number
//way 1
console.log('**you can create even number**')
console.log(way1)

for (var even1 = 0; even1 <= 10; even1++) {
    if(even1 % 2 === 0) {
        console.log(even1)
    }
}
//way 2
console.log('**way 2**')
for (var even2 = 0; even2 <= 10; even2+= 2) {
    console.log(even2)
}

//you can create odd number
console.log('**youcan create odd number**')
console.log('*way 1*')
//way 1
for (var odd1 = 0; odd1 <= 10; odd1++){
    if(odd1 % 2 == 1) {
        console.log(odd1)
    }
}

console.log('way 2')

for(var odd2 = 1; odd2 <= 9; odd2+=2) {
    console.log(odd2)
}

//you can decrimant number
console.log('number decrimant')

for(var dec = 19; dec >= 1; dec--){
    console.log(dec)
}

// sumation bahir kora
console.log('sumation')

var sum = 0

for (var i = 1; i <= 10; i++){
    console.log(sum + ' + ' + i + ' = ' + (sum + i))
    sum += i
}

console.log('even')

var even = 0

for (var s = 1; s <=10; s++) {
    if(s % 2 === 0){
        console.log(even + ' + ' + s + ' = ' + (even+s))
        even += s
        
    }
}
