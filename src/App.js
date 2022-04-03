import "./Styles/App.css";
import { Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import Landing from "./Pages/Landing";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
