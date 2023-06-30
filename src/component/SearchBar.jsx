import { useContext, useState } from "react";
import "./layout.css";
import { UserContext } from "../UserContext";
import axios from "axios";
function SearchBar() {
  const [eventName, setEventName] = useState("");
  const [eventLoc, setEventLoc] = useState("");
  const [eventDate, setEventDate] = useState("");
  const { events, setEvents } = useContext(UserContext);
  async function searchEvent() {
    if (eventName) {
      const { data } = await axios.get("/searcheventbyname", {
        eventName: eventName.toLowerCase(),
      });
      if (data) {
        setEvents(data);
      }
    }
    if (eventLoc) {
      await axios
        .get("/searcheventbylocation", {
          eventLoc: eventLoc.toLowerCase(),
        })
        .then(({ data }) => {
          setEvents(data);
        });
    }
    if (eventDate) {
      await axios
        .get("/searcheventbydate", {
          eventDate,
        })
        .then(({ data }) => {
          setEvents(data);
        });
    }
  }
  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder=" &nbsp;🔍 &nbsp;Events, Organiser, Keyword"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
        />

        <input
          type="text"
          className="hiddeninput"
          placeholder=" &nbsp;🎯 &nbsp;Anywhere"
          value={eventLoc}
          onChange={(e) => setEventLoc(e.target.value)}
        />
        <input
          type="text"
          className="hiddeninput"
          placeholder=" &nbsp;📅 &nbsp;Anytime"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
        />
        <button onClick={searchEvent}>Search</button>
      </div>
      <div className="recommendbtn">
        <button>Today</button>
        <button>Tomorrow</button>
        <button>This week</button>
        <button>Sports</button>
        <button>Community</button>
      </div>
    </div>
  );
}

export default SearchBar;
