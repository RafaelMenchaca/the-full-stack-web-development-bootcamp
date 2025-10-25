// math.random()
var randomNumber = Math.random();
console.log(randomNumber);

//math.floor()
var randomN = Math.random();
randomN = randomN * 6;
randomN = Math.floor();

// love percentage %
var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;
console.log(loveScore);
// alert("your love score is: " + loveScore + " %");

// if statement

if (loveScore > 70) {
    alert("your love score is: " + loveScore + " % You love each other");
} else {
    alert("your love score is: " + loveScore + " % you don't love each other");
}

// && AND,  || OR,  ! NOT

if (loveScore > 30 && loveScore <= 70) {
    alert("your love score is: " + loveScore + " % you don't love each other");

}

// BMI calculator advanced
function bmiCalculator (weight, height) {
    var bmi = weight / (height * height);
    bmi = Math.floor(bmi);
    if (bmi < 18.5) {
        return "Your BMI is " + bmi + ", so you are underweight."
    }
    else if (bmi >= 18.5 && bmi < 24.9) {
        return "Your BMI is " + bmi + ", so you have a normal weight."
    }
    else if (bmi >= 25 && bmi < 29.9) {
        return "Your BMI is " + bmi + ", so you are overweight."
    }
    else {
        return "Your BMI is " + bmi + ", so you are obese."
    }
}

// is leap year

function isLeap(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return "Leap year."
            } else {
                return "Not leap year."
            }
        } else {
            return "Leap year."
        }   
    } else {
        return "Not leap year."
    }
}


// Array

var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];
// console.log(guestList.length)
var guestUser = prompt("Guess the name in the list");

if (guestList.includes(guestUser)) {
    alert("Welcome!")
} else {
    alert("Try again!")
}

// fizz buzz

var output = [];
var count = 1;

function fizzBuzz() {

if ( count % 3 === 0 && count % 5 === 0) {
    output.push("FizzBuzz")
    
} else if (count % 3 === 0) {
    output.push("Fizz");
    
} else if ( count % 5 === 0){
    output.push("Buzz")
    
} else {
    output.push(count);
}
    
count++;

    console.log(output);
    
}


// Who is buying lunch today?

var nameList = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];


function buyLunch() {
    var randomN = Math.random();
    randomN = randomN * nameList.length;
    randomN = Math.floor(randomN);
    buyer = nameList[randomN];
    return buyer + " is going to buy lunch today!";

}


// while loops

function isLeap(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return "Leap year."
            } else {
                return "Not leap year."
            }
        } else {
            return "Leap year."
        }   
    } else {
        return "Not leap year."
    }
}


// Array

var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];
// console.log(guestList.length)
var guestUser = prompt("Guess the name in the list");

if (guestList.includes(guestUser)) {
    alert("Welcome!")
} else {
    alert("Try again!")
}

// fizz buzz while loop

var output = [];
var count = 1;

function fizzBuzz() {

    while(count <= 100) {

        if ( count % 3 === 0 && count % 5 === 0) {
            output.push("FizzBuzz")
            
        } else if (count % 3 === 0) {
            output.push("Fizz");
            
        } else if ( count % 5 === 0){
            output.push("Buzz")
            
        } else {
            output.push(count);
        }
            
        count++;

    }

    console.log(output);
    
}

// 100 bottles of beer

var contador = 100;

function song() {

    while (contador >= 0) {

        if  (contador >= 1) {
            console.log(contador + " bottles of beer on the wall, " + contador + " bottles of beer. Take one down and pass it around, " + (contador -1)  + " bottles of beer on the wall.");

        } else {
            console.log("No more bottles of beer on the wall, no more bottles of beer.Go to the store and buy some more, 99 bottles of beer on the wall.");
        }

        contador--;

    }
}

// for loop

var output = [];

function fizzBuzz() {
    for(var count = 1; count < 101; count++){
        if (count % 3 === 0 && count % 5 === 0) {
            output.push("FizzBuzz");

        } else if (count % 3 === 0){
            output.push("Fizz");
        } else if (count % 5 === 0) {
            output.push("Buzz");
        } else {
            output.push(count);
        }
    }
    console.log(output)
}

// fibonacci 

// function fibonacciGenerator (n) {
//     var output = [];
//     var value1 = 0;
//     var value2 = 1;

//     if (n === 1) {
//         output.push(value1);
//         return output;
//     }
    
//     if (n === 2) {
//         output.push(value1);
//         output.push(value2);
//         return output;
//     }
//     // console.log(output);

//     output.push(value1);
//     output.push(value2);
//     for (var i = 0; i < n; i++) {
//         newValue = value1 + value2;
//         value1 = value2;
//         value2 = newValue
//         output.push(newValue);
//     }
//     return output;
// }

function fibonacciGenerator(n) {
    output = [];

    if (n === 1) {
        output = [0];
    }
    else if (n === 2) {
        output = [0, 1];
    }
    else {
        output = [0, 1];

        for (var i = 2; i < n; i++) {
            output.push(output[output.length - 2] + output[output.length - 1]);

        }

    }

    return output;

}