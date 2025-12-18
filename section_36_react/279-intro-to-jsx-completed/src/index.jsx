// import React from "react";
// import ReactDOM from "react-dom";

// ReactDOM.render(
//   <div>
//     <h1>Hello World</h1>
//     <p>this is a paragraphsssss</p>
//     <ul>
//       <li>item 1</li>
//       <li>item 2</li>
//       <li>item 3</li>
//     </ul>
//   </div>,
//   document.getElementById("root")
// );

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser


// js code inside render

import React from "react";
import ReactDOM from "react-dom";

const name = "Rafael";
const lucky_number = 5;

ReactDOM.render(
  <div>
    <h1>Hello {name}</h1>
    <p>this is a paragraph {lucky_number}</p>
    <ul>
      <li>item {3 * 9}</li>
      <li>item {Math.floor(Math.random() * 10)}</li>
      <li>item {}</li>
    </ul>
  </div>,
  document.getElementById("root")
);
