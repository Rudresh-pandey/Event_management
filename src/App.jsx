import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./component/Layout";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import axios from "axios";
import { UserContextProvider } from "./UserContext";
import AccoutPage from "./pages/AccoutPage";
import Events from "./pages/Events";
// import EventCard from "./component/EventCard";
import EventDetail from "./pages/EventDetail";

axios.defaults.baseURL = import.meta.env.VITE_REACT_API_URL;
axios.defaults.withCredentials = true;
function App() {
  return (
    <UserContextProvider>
      <div className="container">
        <Routes>
          <Route path="/" element={<Layout img={"virtual.jpg"} />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:eventid?" element={<EventDetail />} />
          <Route path="/sports" element={<Layout img={"sports.png"} />} />
          <Route path="/concert" element={<Layout img={"concert.png"} />} />
          <Route path="/virtual" element={<Layout img={"event.png"} />} />
          <Route path="/community" element={<Layout img={"community.jpg"} />} />
          <Route
            path="/conference"
            element={<Layout img={"conference.jpg"} />}
          />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/account/:subpage?" element={<AccoutPage />} />
          <Route path="/account/:subpage/:action" element={<AccoutPage />} />
        </Routes>
      </div>
    </UserContextProvider>
  );
}

export default App;
