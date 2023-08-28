import { useContext, useState } from "react";
import "./layout.css";
import { UserContext } from "../UserContext";
// import axios from "axios";
function SearchBar() {
  const [eventName, setEventName] = useState("");
  const [eventLoc, setEventLoc] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [filter, setFilter] = useState("all");
  const { setQuery, setFilterItem } = useContext(UserContext);

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
        <button onClick={() => setFilterItem("free")}>Free</button>
        <button onClick={() => setFilterItem("concert")}>Concerts</button>
        <button onClick={() => setFilterItem("sports")}>Sports</button>
        <button onClick={() => setFilterItem("community")}>Community</button>
        <button onClick={() => setFilterItem("all")}>CLEAR ✖</button>
      </div>
    </div>
  );
}

export default SearchBar;
