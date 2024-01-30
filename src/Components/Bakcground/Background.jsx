import React, { useState } from "react";
import "./Background.css";

function Background({ setBgColor }) {
  return (
    <div className="colors">
      <div className="buttons">
        <button className="red" onClick={() => setBgColor("red")}>
          Red
        </button>
        <button className="yellow" onClick={() => setBgColor("yellow")}>
          Yellow
        </button>
        <button className="black" onClick={() => setBgColor("black")}>
          Black
        </button>
        <button className="purple" onClick={() => setBgColor("purple")}>
          Purple
        </button>
        <button className="green" onClick={() => setBgColor("green")}>
          Green
        </button>
        <button className="blue" onClick={() => setBgColor("blue")}>
          Blue
        </button>
        <button className="default" onClick={() => setBgColor("#2F3437")}>
          Default
        </button>
      </div>
    </div>
  );
}

export default Background;
