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






