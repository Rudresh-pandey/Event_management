import { Link, Navigate, useParams } from "react-router-dom";
import "./eventscreated.css";

import { useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "../UserContext";

function EventsCreated() {
  const { action } = useParams();
  const [title, setTitle] = useState("");
  const [eventType, setEventType] = useState("");
  const [description, setDescription] = useState("");
  const [eventMode, setEventMode] = useState("");
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [price, setPrice] = useState("");
  const [requirement, setRequirement] = useState("");
  const [addedGuests, setAddedGuests] = useState([]);
  const [guestName, setGuestName] = useState("");
  const [guestPos, setGuestPos] = useState("");
  const [redirect, setRedirect] = useState("");
  const currGuests = {};
  const { eventCreated, setEventCreated } = useContext(UserContext);

  function addMoreGuests(e) {
    e.preventDefault();
    if (guestName && guestPos) {
      currGuests.name = guestName;
      currGuests.pos = guestPos;
      setAddedGuests([...addedGuests, currGuests]);
    } else {
      alert("you need to fill details before adding more guests");
    }
    setGuestName("");
    setGuestPos("");
  }

  async function addNewEvent(e) {
    e.preventDefault();

    await axios
      .post("/add-new-event", {
        title,
        location,
        description,
        eventType,
        eventMode,
        requirement,
        startDate,
        endDate,
        price,
      })
      .then(({ data }) => {
        setEventCreated(data);
        console.log(eventCreated);
      });
    setRedirect("/account/createdevs");
  }

  if (redirect) {
    return <Navigate to={redirect} />;
  }

  return (
    <div className="eventpage">
      {action !== "new" && (
        <>
          <div className="createbtn">
            <Link to={"/account/createdevs/new"}>
              <i className="fa fa-plus"></i>
              Create Event
            </Link>
          </div>
          {eventCreated && (
            <div>
              <p>{eventCreated.title}</p>
            </div>
          )}
        </>
      )}
      {action === "new" && (
        <div className="eventform">
          <form action="" className="event-form" onSubmit={addNewEvent}>
            <h2>Title</h2>
            <input
              type="text"
              placeholder="Event Name, Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <h2>Event type</h2>
            <input
              type="text"
              name="eventoptions"
              list="datalist-events"
              placeholder="event type like:"
              value={eventType}
              onChange={(e) => setEventType(e.target.value)}
            />
            <datalist id="datalist-events">
              <select name="eventoptions" id="">
                <option value="Sports" />
                <option value="Community" />
                <option value="Conference" />
                <option value="Virtual" />
                <option value="Concert" />
              </select>
            </datalist>
            <h2>Description</h2>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <h2>Event mode</h2>
            <div className="modeselection">
              <div>
                <input
                  type="radio"
                  name="mode"
                  value="offline"
                  onChange={(e) => setEventMode(e.target.value)}
                />
                <label htmlFor="offline">Offline</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="mode"
                  value="online"
                  onChange={(e) => setEventMode(e.target.value)}
                />
                <label htmlFor="online">Online</label>
              </div>
            </div>
            <h2>Requirements</h2>
            <textarea
              name=""
              id="requirements"
              cols="30"
              rows="10"
              value={requirement}
              onChange={(e) => setRequirement(e.target.value)}
            ></textarea>
            <h2>location</h2>
            <input
              type="text"
              placeholder="address/ location/ url link for the event"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <div className="date">
              <div>
                <h3>Start Date</h3>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </div>
              <div>
                <h3>End Date</h3>
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </div>
              <div>
                <h3>Price</h3>
                <input
                  type="number"
                  list="pricelist"
                  autoComplete="off"
                  name="pricetype"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
                <datalist id="pricelist">
                  <select name="pricetype" id="">
                    <option value={0}></option>
                  </select>
                </datalist>
              </div>
            </div>

            <div>
              <h2>Guests</h2>
              <div className="guestdetail">
                <input
                  type="text"
                  placeholder="guest name"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="position"
                  value={guestPos}
                  onChange={(e) => setGuestPos(e.target.value)}
                />
                <button className="addmoreguests" onClick={addMoreGuests}>
                  <i className="fa fa-plus"></i>
                  <span>Add more Guests</span>
                </button>
              </div>
            </div>
            <button id="savebtn">Save</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default EventsCreated;
