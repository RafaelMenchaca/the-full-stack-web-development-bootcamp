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
console.log(guestList.length)