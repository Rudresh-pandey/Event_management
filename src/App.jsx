import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import Sports from "./pages/Sports";
import Concert from "./pages/Concert";
import Virtual from "./pages/Virtual";
import Community from "./pages/Community";
import Conferences from "./pages/Conferences";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/concert" element={<Concert />} />
        <Route path="/virtual" element={<Virtual />} />
        <Route path="/community" element={<Community />} />
        <Route path="/conferences" element={<Conferences />} />
      </Routes>
    </div>
  );
}

export default App;
