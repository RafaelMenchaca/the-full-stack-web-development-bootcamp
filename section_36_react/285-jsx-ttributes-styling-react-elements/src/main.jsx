import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable spellCheck={false}>
      My Favourite Foods
    </h1>

    <img src={img} alt="" />
    <img src={img + "?grayscale"} alt="" />
  </div>,
  document.getElementById("root")
);
