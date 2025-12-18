import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My Favourite Foods
    </h1>

    <img src={img} alt="" />
    <img src={img + "?grayscale"} alt="" />

    {/* <div>
      <img
        className="image-container"
        src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg"
        alt=""
      />
      <img
        className="image-container"
        src="https://images.pexels.com/photos/35205820/pexels-photo-35205820.jpeg"
        alt=""
      />
      <img
        className="image-container"
        src="https://images.pexels.com/photos/27972917/pexels-photo-27972917.jpeg"
        alt=""
      />
    </div> */}
  </div>,
  document.getElementById("root")
);
