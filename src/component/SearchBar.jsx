import { useContext, useState } from "react";
import "./layout.css";
import { UserContext } from "../UserContext";
import axios from "axios";
function SearchBar() {
  const [eventName, setEventName] = useState("");
  const [eventLoc, setEventLoc] = useState("");
  const [eventDate, setEventDate] = useState("");
  const { setQuery } = useContext(UserContext);

  function searchEvent() {
    setQuery([eventName.toLowerCase(), eventLoc.toLowerCase(), eventDate]);
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
