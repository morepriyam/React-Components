import React, { useState } from "react";
import "./Background.css";

function Background({ setBgColor }) {
  return (
    <div className="colors">
      <div className="buttons">
        <button
          className="red"
          onClick={() =>
            setBgColor("linear-gradient(to right, #FF0000, #FF6666)")
          }
        >
          Red
        </button>
        <button
          className="yellow"
          onClick={() =>
            setBgColor("linear-gradient(to right, #FFFF00, #FFFF99)")
          }
        >
          Yellow
        </button>
        <button
          className="black"
          onClick={() =>
            setBgColor("linear-gradient(to right, #000000, #333333)")
          }
        >
          Black
        </button>
        <button
          className="purple"
          onClick={() =>
            setBgColor("linear-gradient(to right, #800080, #B300B3)")
          }
        >
          Purple
        </button>
        <button
          className="green"
          onClick={() =>
            setBgColor("linear-gradient(to right, #008000, #66FF66)")
          }
        >
          Green
        </button>
        <button
          className="blue"
          onClick={() =>
            setBgColor("linear-gradient(to right, #0000FF, #3399FF)")
          }
        >
          Blue
        </button>
        <button
          className="default"
          onClick={() =>
            setBgColor(
              "linear-gradient(45deg, #FFA500, #FFD700, #FFA500, #FFD700)"
            )
          }
        >
          Default
        </button>
      </div>
    </div>
  );
}

export default Background;
