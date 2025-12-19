//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

const ahora = new Date();
const horas = ahora.getHours();

var dinamicColor = "";
var dinamicTime = "";

if (horas < 12) {
  dinamicColor = "red";
  dinamicTime = "Good morning";
} else if (horas >= 12 && horas < 17) {
  dinamicColor = "green";
  dinamicTime = "Good Afternoon";
} else {
  dinamicColor = "blue";
  dinamicTime = "Good evening";
}

const styles = {
  color: dinamicColor,
};

ReactDOM.render(
  <h1 style={styles}>{dinamicTime}</h1>,
  document.getElementById("root")
);
