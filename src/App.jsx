import Profile from "./Components/Profile/Profile";
import "./App.css";
import Background from "./Components/Bakcground/Background";
import { useState } from "react";
function App() {
  const [bgColor, setBgColor] = useState("#2F3437");
  return (
    <div className="App" style={{ backgroundColor: bgColor }}>
      <Profile />
      <Background setBgColor={setBgColor} />
    </div>
  );
}

export default App;
