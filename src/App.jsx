import { BrowserRouter, Routes, Route } from "react-router-dom";
import Components from "./pages/components";
import Signup from "./pages/signup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/comp" element={<Components />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
