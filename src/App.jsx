import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./component/Layout";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import axios from "axios";
import { UserContextProvider } from "./UserContext";
import AccoutPage from "./pages/AccoutPage";

axios.defaults.baseURL = "http://127.0.0.1:4000";
axios.defaults.withCredentials = true;
function App() {
  return (
    <UserContextProvider>
      <div className="container">
        <Routes>
          <Route path="/" element={<Layout img={"event.png"} />}></Route>
          <Route path="/sports" element={<Layout img={"sports.png"} />} />
          <Route path="/concert" element={<Layout img={"concert.png"} />} />
          <Route path="/virtual" element={<Layout img={"virtual.jpg"} />} />
          <Route path="/community" element={<Layout img={"community.jpg"} />} />
          <Route
            path="/conference"
            element={<Layout img={"conference.jpg"} />}
          />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/account/:subpage?" element={<AccoutPage />} />
        </Routes>
      </div>
    </UserContextProvider>
  );
}

export default App;
