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