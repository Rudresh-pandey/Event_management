import { Route, Routes } from "react-router-dom";
import "./App.css";
// import Sports from "./pages/Sports";
// import Concert from "./pages/Concert";
// import Virtual from "./pages/Virtual";
// import Community from "./pages/Community";
// import Conferences from "./pages/Conferences";
import Layout from "./component/Layout";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Layout img={"event.png"} />} />
        <Route path="/sports" element={<Layout img={"sports.png"} />} />
        <Route path="/concert" element={<Layout img={"concert.png"} />} />
        <Route path="/virtual" element={<Layout img={"virtual.jpg"} />} />
        <Route path="/community" element={<Layout img={"community.jpg"} />} />
        <Route path="/conference" element={<Layout img={"conference.jpg"} />} />
      </Routes>
    </div>
  );
}

export default App;
