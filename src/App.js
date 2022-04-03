import "./App.css";
import { Route, Routes } from "react-router-dom";

import Feed from "./Pages/Feed";
import Login from "./Pages/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Feed />} />
      </Routes>
    </div>
  );
}

export default App;
