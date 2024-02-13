import React, { useState } from "react";
import Background from "../Components/Background/Background";
import Profile from "../Components/Profile/Profile";
import Github from "../Components/Github/Github";

function Components() {
  const [bgColor, setBgColor] = useState(
    "linear-gradient(45deg, #FFA500, #FFD700, #FFA500, #FFD700)"
  );
  return (
    <div style={{ background: bgColor }} className="h-[100dvh]">
      <Profile />
      <Background setBgColor={setBgColor} />
      <Github />
    </div>
  );
}

export default Components;
