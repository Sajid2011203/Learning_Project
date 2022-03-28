
var a = 34

var b = 33

if (a>b){
    console.log("a is greater ten b")
} else{
    console.log(" b is less ten a")
}

var a = 50

var b = 50

if (a>b){
    console.log("a is greater ten b")
}else if (a==b){
    console.log("a is equal to b")
} else {
    console.log(" b is less ten a")
} 

//Make a "Good day" greeting if the hour is less than 18:00:

if (new Date().getHours() < 10){
    console.log("Good morning")
} else if(new Date().getHours() < 18){
    console.log("Good day!")
}
else{
    console.log("Good evening")
}
