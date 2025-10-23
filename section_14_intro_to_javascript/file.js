// console .log is like print in python
alert("hello world");
console.log("hello world");



// variables needs a "var" in front of them and semicolon, wtf

var message = "Hello";
var name = "Rafael";

alert(message + " " + "There " + name);


// length

var tweet = prompt("Compose your tweet");
var tweetCount = tweet.length;

alert("You have written " + tweetCount + " characters");


// slice strings

var name2 = "Rafael";
name2.slice(0,3);


// toUpperCase()

console.log(name2.toUpperCase());


// challenge changing string

var myNamne = prompt("What is your name?");

var fisrtChar = myNamne.slice(0,1);
var upperCaseFirstChar = fisrtChar.toUpperCase();

var restOfName = myNamne.slice(1, myNamne.length);

var capitaliseName = upperCaseFirstChar + restOfName;

alert("Hello " + capitaliseName)


// bmi calculator

var weight = prompt("Enter your weight in kg");
var height = prompt("Enter your height in meters");
var bmi = weight / (height * height);
alert("Your BMI is " + bmi);

// functions 
function bmiCalculator(weight, height) {
    var bmi = weight / (height * height);
    return bmi;
}

// math.round()
var bmi = Math.round(bmiCalculator(65, 1.8));
alert("Your BMI is " + bmi);