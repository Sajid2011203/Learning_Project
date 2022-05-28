//For Insert & remove Data
//way1
let arr = [1, 2, 3, 4, 5, 6, 7, 8]

arr[4] = 10

console.log(arr)

//way2 insert the last index

arr.push(10)

console.log(arr)

//way 3 insert the first index of array

arr.unshift(0)
console.log(arr)

// way 4 insert remove or update any one element
let splice = ['Apple', 'Banana', 'Orange', 'Mango']

splice.splice(1, 0, 'pineapple')

console.log(splice)

// remove first index

arr.shift()

console.log(arr)

// remove last index

arr.pop()
console.log(arr)

// reverse array

let reverse = ['Abid', 'Nayeem', 'Habibullah', 'Ashik', 'Shafi', 'Tawhid', 'Mizan']

for(var i = reverse.length - 1 ; i > 0; i--){
    console.log(i + ' ' + reverse[i])
}

