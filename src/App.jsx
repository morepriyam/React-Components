import Profile from "./Components/Profile/Profile";
import "./App.css";
import Background from "./Components/Bakcground/Background";
import { useState } from "react";
function App() {
  const [bgColor, setBgColor] = useState(
    "linear-gradient(45deg, #FFA500, #FFD700, #FFA500, #FFD700)"
  );
  return (
    <div className="App" style={{ backgroundImage: bgColor }}>
      <Profile />
      <Background setBgColor={setBgColor} />
    </div>
  );
}

export default App;
